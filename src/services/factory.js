'use strict';

angular.module('robertkalfas')
  .factory('Items', ['$q', '$http', 'Config', function ($q, $http, Config) {
    var config = Config;

    // expose Items API object
    return {
      /**
       * main data object
       */
      data: {},

      /**
       * fetch data from static file or cache object
       *
       * @param field - field for a cache purposes
       * @returns {*} - returns promise
       */
      fetch: function (field) {
        var items = this;
        var cached = null; //items.get(field);

        if (cached) {
          items.data = cached;
          return true;
        }
        else {
          var defer = $q.defer();
          var movies;

          $http.get('http://vimeo.com/api/v2/robertkalfas/videos.json').success(function (data) {
            movies = data;

            $http.get('http://vimeo.com/api/v2/studiopigeon/videos.json').success(function (data) {
              items.data = movies.concat(data);
              defer.resolve();
            });
            //items.cache(data, field);
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
  }]);
