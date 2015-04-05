'use strict';

angular.module('robertkalfas')
  .controller('WorkCtrl', function ($scope, Items, movie, $sce, Config) {
    if (typeof $scope.movies === 'undefined' || $scope.movies.length === 0) {
      $scope.movies = Items.query();
    }

    function checkId() {
      for (var i = 0, len = $scope.movies.length; i < len; i++) {
        if (parseInt(movie) === $scope.movies[i].id) {
          return $scope.movies[i];
        }
      }
      return false;
    }

    var selected = checkId();

    if (movie && selected) {
      var videoUrl = Config.playerUrl + movie + '?title=0&byline=0&portrait=0';

      $scope.movie = {
        src: $sce.trustAsResourceUrl(videoUrl),
        title: selected.title,
        description: selected.description
      };
    }
  });
