/**
 * Created by NageswaraRao on 5/9/2015.
 */
'use strict';
/**
 * @ngdoc function
 * @name smartAddressApp.controller:DashboardController
 * @description
 * #LoginController
 * Controller of the smartAddressApp
 */
angular.module('smartAddressApp').controller('DashboardController', function ($rootScope,$scope,Restangular,$location,$http){
  if(typeof $rootScope.id==='undefined'){
    $location.path('/login');
  }
  else {
    $scope.allAddressesData = Restangular.all('addresses').getList().$object;

    $http.get('https://api.mongolab.com/api/1/databases/mongodb_nagesh_test_env/collections/addresses?q={"user_id":"'+$rootScope.id+'"}&apiKey=N4-PzMrqKRTMPQ3-J06bDMHUkOjifzfj').
    success(function(data, status, headers, config) {
      $scope.addressesData=data;
    }).
    error(function(data, status, headers, config) {
    });

    $scope.saveAddress=function(){
      $scope.address.user_id=$rootScope.id;
      $scope.address.token = 'SMARTADD-' + $scope.allAddressesData.length;
      Restangular.all('addresses').post($scope.address).then(function (address) {
        $scope.successMessage = "Your Address is Successfully added ! your Token is ";
        $scope.smartAddressToken = address.token;
        $http.get('https://api.mongolab.com/api/1/databases/mongodb_nagesh_test_env/collections/addresses?q={"user_id":"'+$rootScope.id+'"}&apiKey=N4-PzMrqKRTMPQ3-J06bDMHUkOjifzfj').
          success(function(data, status, headers, config) {
            $scope.addressesData=data;
            $scope.allAddressesData = Restangular.all('addresses').getList().$object;
          }).
          error(function(data, status, headers, config) {
          });
          $scope.address.address = '';
          $location.path('/dashboard');
        });
    }
  }
})
  .controller('AddressDisplayController',function($rootScope,$scope, $location, Restangular,$http) {
    $scope.deleteUser = function (addressId) {
      Restangular.one('addresses', addressId).remove().then(function (addressData) {
        $http.get('https://api.mongolab.com/api/1/databases/mongodb_nagesh_test_env/collections/addresses?q={"user_id":"'+$rootScope.id+'"}&apiKey=N4-PzMrqKRTMPQ3-J06bDMHUkOjifzfj').
          success(function(data, status, headers, config) {
            $scope.addressesData=data;
          }).
          error(function(data, status, headers, config) {
          });
        $location.path('/dashboard');
      });
    };
});
