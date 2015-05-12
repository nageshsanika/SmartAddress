/**
 * Created by NageswaraRao on 5/9/2015.
 */
'use strict';
/**
 * @ngdoc function
 * @name smartAddressApp.controller:DashboardController
 * @description
 * #DashboardController
 * Controller of the smartAddressApp
 */
angular.module('smartAddressApp').controller('DashboardController', function ($rootScope,$scope,Restangular,$location){
  if(typeof $rootScope.id==='undefined'){
    //redirecting if not a authenticated user
    $location.path('/login');
  }
  else {
    //get all list of addresses created so far to calculate length and to genreate smart address post fix
    $scope.allAddressesData = Restangular.all('addresses').getList().$object;
    //getting all registered users
    $scope.allUsersData = Restangular.all('users').getList().$object;
    //getting all the addresses created by the current logged in user
    $scope.getCurrentUserCreatedAddresses=function() {
      Restangular.all('addresses').getList({q:{user_id: $rootScope.id}}).then(function(data){
       $scope.addressesData=data;
      });
    }
    $scope.getCurrentUserCreatedAddresses();

    //save address
    $scope.saveAddress=function(){
      //taking user id from rootScope
      $scope.address.user_id=$rootScope.id;

      //generating Smart address token based on address object length;
      $scope.address.token = 'SMARTADD-' + $scope.allAddressesData.length;

      //saving the address data using Restangular POST
      Restangular.all('addresses').post($scope.address).then(function (address) {
        //success message and token after successfully saving the data
        $scope.successMessage = "Your Address is Successfully added ! your Token is ";
        $scope.smartAddressToken = address.token;

        //getting all the addresses created by the current logged in user including recently added address also
        $scope.getCurrentUserCreatedAddresses();

        //resetting address model and redirecting to dashboard;
          $scope.address.address = '';
          $location.path('/dashboard');
        });
    }
  }
});
