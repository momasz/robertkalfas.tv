'use strict';

angular.module('robertkalfas')
  .factory('Items', ['$q', '$http', 'Config', 'CacheFactory', '$filter', function ($q, $http, Config, CacheFactory, $filter) {
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
          var accounts = []; // vimeo accounts we want to display

          for (var j = 0, lenAccounts = displayed.accounts.length; j < lenAccounts; j++) {
            accounts.push($http.get(Config.apiUrl + 'users/' + displayed.accounts[j] + '/videos', {
              cache: CacheFactory.get(field)
            }));
          }

          $q.all(accounts).then(function (result) {
            angular.forEach(result, function(response) {
              movies = movies.concat(response.data.data);
            });

            movies = items.filter(movies);
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

          for (var j = 0, lenIds = this.config.videos.length; j < lenIds; j++) {
            if (this.config.videos[j] === $filter('idMaker')(el.uri)) {
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
  }])
  .run(function($http, Config) {
    $http.defaults.headers.common.Authorization = 'Bearer ' + Config.apiToken;
  });
