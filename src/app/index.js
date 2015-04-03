'use strict';

angular.module('robertkalfas', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'mm.foundation'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('work', {
        url: '/work/:movie',
        templateUrl: 'app/work/work.html',
        controller: 'WorkCtrl',
        resolve: {
          load: function (Items) {
            return Items.fetch('data/movies.json', 'movies');
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
      });

    $urlRouterProvider.otherwise('/');
  })
;
