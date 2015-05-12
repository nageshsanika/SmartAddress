/**
 * Created by NageswaraRao on 5/12/2015.
 */
'use strict';
describe('Controller: DashboardController', function () {

  // load the controller's module
  beforeEach(module('smartAddressApp'));

  var DashboardController,scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DashboardController = $controller('DashboardController', {
      $scope: scope
    });
  }));

  it('should not show up unauthenticated users', function() {
    expect(scope.id).toBeUndefined();
  });
  it('should  show up for authenticated user', function() {
    scope.id='555198dae4b09430da843fc1';
    expect(scope.id).toBeDefined();
  });
  it('should save the address and generate smart address token',function(){
    scope.id='555198dae4b09430da843fc1';
    scope.address={"address":"Somajiguda, Hyderabad","user_id":scope.id,"token":"SMARTADD-0"};
    scope.saveAddress;
    expect(scope.address).toBeDefined();
  });
  it('should show addresse created by the current logged in user',function(){
    scope.id='555198dae4b09430da843fc1';
    scope.getCurrentUserCreatedAddresses;
    expect(scope.id).toBeDefined();
    expect(scope.addressesData).toBeDefined();
  });

});
