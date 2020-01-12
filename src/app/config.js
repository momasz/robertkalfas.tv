'use strict';

angular.module('robertkalfas')
  .service('Config', function () {
    return {
      apiUrl: 'https://api.vimeo.com/',
      apiSimpleUrl: 'https://vimeo.com/api/v2/',
      apiToken: '91072e38c9d69f9c2c5caaa4b3222a72',
      playerUrl: 'https://player.vimeo.com/video/',
      sourceUrl: 'http://portfolio-cms.herokuapp.com/videos',
      perPage: 10
    };
  });
