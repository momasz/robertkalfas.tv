'use strict';

angular.module('robertkalfas')
  .controller('NavbarCtrl', function () {
    $('.nav-bar .toggle-button').click(function () {
      $('.nav-bar .menu').toggleClass('opened');
    });
  })
  .run(function($rootScope) {
    $rootScope.$on('$stateChangeStart', function() {
      $('.nav-bar .menu').removeClass('opened');
    });
  });
