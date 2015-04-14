"use strict";

angular.module('robertkalfas')
  .filter('idMaker', function() {
    return function(value) {
      return parseInt(value.replace('/videos/', ''));
    };
  });
