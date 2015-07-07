'use strict';

describe('Controller: WebappCtrl', function () {

  // load the controller's module
  beforeEach(module('gpascualyWebappApp'));

  var WebappCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WebappCtrl = $controller('WebappCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
