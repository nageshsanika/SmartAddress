/**
 * Created by NageswaraRao on 5/12/2015.
 */
'use strict';

describe('Controller: EditController', function () {

  // load the controller's module
  beforeEach(module('smartAddressApp'));

  var EditController,scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditController = $controller('EditController', {
      $scope: scope
    });
  }));
  it("should be authenticated user only to edit",function(){
    scope.id='555198dae4b09430da843fc1';
    expect(scope.id).toBeDefined();
  });
  it('has update the current Address properly', function() {
    scope.updateAddress;
  });
});


