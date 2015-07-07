'use strict';

describe('Controller: DevowormCtrl', function () {

  // load the controller's module
  beforeEach(module('gpascualyWebappApp'));

  var DevowormCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DevowormCtrl = $controller('DevowormCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
