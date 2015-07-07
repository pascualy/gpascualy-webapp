'use strict';

describe('Controller: CeramicsCtrl', function () {

  // load the controller's module
  beforeEach(module('gpascualyWebappApp'));

  var CeramicsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CeramicsCtrl = $controller('CeramicsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
