'use strict';

angular.module('robertkalfas')
  .controller('ContactCtrl', function () {
    $('img').load(function () {
      $(this).addClass('loaded');
    });
  });
