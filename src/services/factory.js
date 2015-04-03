'use strict';

angular.module('robertkalfas')
  .factory('Items', function ($q, $http) {
    // expose Items API object
    return {
      /**
       * main data object
       */
      data: {},

      /**
       * fetch data from static file or cache object
       *
       * @param $resource - static resource
       * @param field - field for a cache purposes
       * @returns {*} - returns promise
       */
      fetch: function ($resource, field) {
        var items = this;
        var cached = null; //items.get(field);

        if (cached) {
          items.data = cached;
          return true;
        }
        else {
          var defer = $q.defer();

          $http.get($resource).success(function (data) {
            items.data = data;
            //items.cache(data, field);
            defer.resolve();
          });

          return defer.promise;
        }
      },

      /**
       * cached data into the localStorage database
       *
       * @param data - data to write to cache
       * @param field - cache field
       */
      cache: function (data, field) {
        localStorage[field] = angular.toJson(data);
      },

      /**
       * get data from cached localStorage database
       *
       * @param field - cache field
       * @returns {Object|Array|string|number|*}
       */
      get: function (field) {
        return angular.fromJson(localStorage[field]);
      },

      /**
       * get the main data object
       *
       * @returns {*}
       */
      query: function () {
        return this.data;
      }
    };
  });

angular.module('robertkalfas')
  .factory('Movies', function (Items) {
    return Items;
  });
