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
      missing: [],

      /**
       * fetch data from static file or cache object
       *
       * @param field - field for a cache purposes
       * @returns {*} - returns promise
       */
      fetch: function (field) {
        var items = this;
        var defer = $q.defer();

        items.sync(Config.sourceUrl, 'config').success(function (data) {
          items.config = data;

          var accounts = items.config.accounts;
          var videos = []; // vimeo accounts we want to display

          for (var j = 0, lenAccounts = accounts.length; j < lenAccounts; j++) {
            videos.push(items.sync(Config.apiUrl + 'users/' + accounts[j].name + '/videos?per_page=50', field));
          }

          items.syncAll(videos, function () {
              defer.resolve();
          });
        });

        return defer.promise;
      },

      sync: function (url, field) {
        return $http.get(url, {
          cache: CacheFactory.get(field)
        });
      },

      syncAll: function (data, success) {
        var movies = [];
        var items = this;

        $q.all(data).then(function (result) {
          angular.forEach(result, function(response, key) {
            var data = response.data;

            if (!items.config.accounts[key].pages) {
              items.config.accounts[key].pages = Math.ceil(data.total / data.per_page);
            }

            movies = movies.concat(data.data);
          });

          items.data = items.config.videos.length > 0 ? items.filter(movies) : movies;

          if (items.data.length < Config.perPage) {
            // todo: create API calls for missing elements (when they are on the next page or sth)
          }

          success();
        });
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
            var id = $filter('idMaker')(el.uri);
            if (parseInt(this.config.videos[j]) === id) {
              tmp.push(el);
            } else {
              this.missing.push(id);
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
