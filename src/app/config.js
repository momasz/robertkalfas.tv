'use strict';

angular.module('robertkalfas')
  .service('Config', function () {
    return {
      apiUrl: 'http://vimeo.com/api/v2/',
      apiSource: '/videos.json',
      vimeoPlayerUrl: 'https://player.vimeo.com/video/',
      sourceUrl: 'data/config.json'
    };
  });
