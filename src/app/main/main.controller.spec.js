'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('robertkalfas'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));
});
