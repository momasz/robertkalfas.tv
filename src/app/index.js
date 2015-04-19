'use strict';

angular.module('robertkalfas', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'mm.foundation', 'angular-cache'])
  .config(function ($stateProvider, $urlRouterProvider, CacheFactoryProvider) {
    $stateProvider
      .state('work', {
        url: '/work/:movie',
        templateUrl: 'app/work/work.html',
        controller: 'WorkCtrl',
        resolve: {
          load: function (Items) {
            return Items.fetch('movies');
          },
          movie: function($stateParams) {
            return $stateParams.movie;
          }
        }
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactCtrl'
      })
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html'
      });

    $urlRouterProvider.otherwise('/work/');

    angular.extend(CacheFactoryProvider.defaults, { maxAge: 15 * 60 * 1000 });
  })
  .run(function($rootScope, $http, CacheFactory) {
    var body = $('body');

    $rootScope.$on('$stateChangeStart', function() {
      body.animate({ scrollTop: 0 }, 'slow');
      body.removeClass();
    });

    $rootScope.$on('$stateChangeSuccess', function() {
      body.addClass('loaded');
    });

    $http.defaults.cache = CacheFactory('defaultCache', {
      maxAge: 15 * 60 * 1000, // Items added to this cache expire after 15 minutes
      cacheFlushInterval: 60 * 60 * 1000, // This cache will clear itself every hour
      deleteOnExpire: 'aggressive' // Items will be deleted from this cache when they expire
    });
  });
