/**
 * Created by NageswaraRao on 5/12/2015.
 */
'use strict';

describe('Controller: LoginController', function () {

  // load the controller's module
  beforeEach(module('smartAddressApp'));

  var LoginController,scope,Restangular;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginController = $controller('LoginController', {
      $scope: scope
    });
  }));
  it('should login properly if enters correct email and password', function() {
    scope.user={"email":"ns@nag.com","password":"ns"};
    scope.login;
    expect(scope.errorLoginMessage).toBeUndefined('');
  });
  it('should error message if enters wrong credentials', function() {
    scope.user={"email":"ns@nag.com","password":"nssss"};
    scope.login;
    expect(scope.authenticated).toBe(false);
  });
});



