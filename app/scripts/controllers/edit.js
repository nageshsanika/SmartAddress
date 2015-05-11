/**
 * Created by NageswaraRao on 5/10/2015.
 */
'use strict';
smartAddressApp.controller('EditController', function ($rootScope,$scope,$location,Restangular,$routeParams,$http) {
  if(typeof $rootScope.id==='undefined'){
    $location.path('/login');
  }
  else {
    $scope.id=$routeParams.addressId;
    Restangular.one('addresses', $scope.id).get().then(function(addressData){
      $scope.addressData=addressData;
    });
    $scope.updateAddress=function(){
      var modifiedData=Restangular.one('addresses', $scope.id);
      modifiedData.address=$scope.address.address;
      modifiedData.token=$scope.addressData.token;
      modifiedData.user_id=$scope.addressData.user_id;
      modifiedData.put();
      $http.get('https://api.mongolab.com/api/1/databases/mongodb_nagesh_test_env/collections/addresses?q={"user_id":"'+$rootScope.id+'"}&apiKey=N4-PzMrqKRTMPQ3-J06bDMHUkOjifzfj').
        success(function(data, status, headers, config) {
          $scope.addressesData=data;
      }).
        error(function(data, status, headers, config) {
      });
      $location.path('/dashboard');
    };
  }
});

