'use strict';

describe('Controller: VivaceCtrl', function () {

  // load the controller's module
  beforeEach(module('gpascualyWebappApp'));

  var VivaceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VivaceCtrl = $controller('VivaceCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
