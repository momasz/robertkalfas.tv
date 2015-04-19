'use strict';

angular.module('robertkalfas')
  .service('Config', function () {
    return {
      apiUrl: 'https://api.vimeo.com/',
      apiSimpleUrl: 'https://vimeo.com/api/v2/',
      apiToken: 'ad142b363bbe2b9e51b478f7fa908d6a',
      playerUrl: 'https://player.vimeo.com/video/',
      sourceUrl: 'http://portfolio-cms.herokuapp.com/config',
      perPage: 10
    };
  });
