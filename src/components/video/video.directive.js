'use strict';

angular.module('robertkalfas')
  .directive('customVideo', function () {
    return {
      restrict: 'EA',
      template: '<iframe ng-src="{{source}}" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
      scope: {
        source: '='
      },
      link: function ($scope, $el) {
        var body = $('body').removeClass('loaded');
        $el.children('iframe').load(function () {
          body.addClass('loaded');
        });
      }
    };
  });
