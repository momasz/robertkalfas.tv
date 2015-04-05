'use strict';

angular.module('robertkalfas')
  .factory('Items', ['$q', '$http', 'Config', 'CacheFactory', function ($q, $http, Config, CacheFactory) {
    // expose Items API object
    return {
      /**
       * main data object
       */
      data: {},
      config: {},

      /**
       * fetch data from static file or cache object
       *
       * @param field - field for a cache purposes
       * @returns {*} - returns promise
       */
      fetch: function (field) {
        var items = this;
        var defer = $q.defer();
        var movies = [];

        $http.get(Config.sourceUrl, {
          cache: CacheFactory.get('config')
        }).success(function (data) {
          items.config = data;

          var displayed = items.config;
          var users = []; // vimeo users we want to display

          for (var i = 0, len = displayed.videos.length; i < len; i++) {
            var result = $http.get(Config.apiSimpleUrl + displayed.videos[i] + '.json', {
              cache: CacheFactory.get(field)
            });

            users.push(result);
          }

          $q.all(users).then(function (result) {
            angular.forEach(result, function(response) {
              movies = movies.concat(response.data);
            });

            //movies = items.filter(movies);
            items.data = movies;

            defer.resolve();
          });
        });

        return defer.promise;
      },

      /**
       * filter data from unwanted ids
       *
       * @param data
       * @returns {Array}
       */
      filter: function (data) {
        var tmp = [];

        for (var i = 0, len = data.length; i < len; i++) {
          var el = data[i];

          for (var j = 0, lenIds = this.config.ids.length; j < lenIds; j++) {
            if (this.config.ids[j] === el.id) {
              tmp.push(el);
            }
          }
        }

        return tmp;
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
