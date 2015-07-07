'use strict';

describe('Controller: BbqCtrl', function () {

  // load the controller's module
  beforeEach(module('gpascualyWebappApp'));

  var BbqCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BbqCtrl = $controller('BbqCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
