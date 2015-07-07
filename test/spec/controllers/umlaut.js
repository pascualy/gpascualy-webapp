'use strict';

describe('Controller: UmlautCtrl', function () {

  // load the controller's module
  beforeEach(module('gpascualyWebappApp'));

  var UmlautCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UmlautCtrl = $controller('UmlautCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
