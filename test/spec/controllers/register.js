/**
 * Created by NageswaraRao on 5/12/2015.
 */
'use strict';

describe('Controller: RegisterController', function () {

  // load the controller's module
  beforeEach(module('smartAddressApp'));

  var RegisterController,scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegisterController = $controller('RegisterController', {
      $scope: scope
    });
  }));

  it('should registers user successfully', function() {
    scope.user={"name":"NageswaraRao","email":"ns@nag.com","password":"nssss"};
    scope.save();
    expect(scope.successRegister).toBe(true);
  });
});
