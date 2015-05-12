/**
 * Created by NageswaraRao on 5/12/2015.
 */
'use strict';
describe('Controller: SearchController', function () {

  // load the controller's module
  beforeEach(module('smartAddressApp'));

  var SearchController,scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchController = $controller('SearchController', {
      $scope: scope
    });
  }));
  if('should show  no results',function(){
      scope.searchSmartAddressTokens;
      expect(scope.searchResults).toBe(false);
  });

  if('it hides search results',function(){
      scope.hideResults;
      expect(scope.searchResults).toBe(false);
  });
  it('should  results the smart address', function() {
    scope.searchSmartAddressTokens;
  });
});
