/**
 * Created by NageswaraRao on 5/10/2015.
 */
'use strict';
smartAddressApp.controller('EditController', function ($rootScope,$scope,$location,Restangular,$routeParams) {
  if(typeof $rootScope.id==='undefined'){
    $location.path('/login'); //redirecting if not a authenticated user
  }
  else {
    //getting address object id from URL
    $scope.id=$routeParams.addressId;
    //getting the details of address using restangular one() using object id
    Restangular.one('addresses', $scope.id).get().then(function(addressData){
      $scope.addressData=addressData;
    });
    //updating the address
    $scope.updateAddress=function(){
      var modifiedData=Restangular.one('addresses', $scope.id);

      //fields to put
      modifiedData.address=$scope.address.address;
      modifiedData.token=$scope.addressData.token;
      modifiedData.user_id=$scope.addressData.user_id;

      //update using restangular put()
      modifiedData.put();

      //getting fresh data to dashboard
      Restangular.all('addresses').getList({q:{user_id: $rootScope.id}}).then(function(data){
        $scope.addressesData=data;
        $location.path('/dashboard');
      });
    };
  }
});

