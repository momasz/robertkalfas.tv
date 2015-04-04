'use strict';

angular.module('robertkalfas')
  .directive('customImage', function () {
    return {
      restrict: 'EA',
      template: '<img ng-src="{{source}}" alt="{{title}}" />',
      scope: {
        source: '=',
        title: '='
      },
      link: function ($scope, $el) {
       $el.children('img').load(function () {
         $el.addClass('loaded');
       });
      }
    };
  });
