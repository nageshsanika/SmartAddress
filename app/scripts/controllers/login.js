/**
 * Created by NageswaraRao on 5/9/2015.
 */
'use strict';

/**
 * @ngdoc function
 * @name smartAddressApp.controller:LoginController
 * @description
 * #LoginController
 * Controller of the smartAddressApp
 */
smartAddressApp.controller('LoginController', function ($scope,$location,$http,$rootScope) {
  $scope.login = function () {
    $http.get('https://api.mongolab.com/api/1/databases/mongodb_nagesh_test_env/collections/users?q={"email":"'+$scope.user.email+'","password":"'+$scope.user.password+'"}&apiKey=N4-PzMrqKRTMPQ3-J06bDMHUkOjifzfj').
      success(function(data, status, headers, config) {
        if(data.length>0){
          $rootScope.authenticated = true;
          $rootScope.currentUser = data['0']['name'];
          $rootScope.id=data['0']['_id']['$oid'];
          $location.path('/dashboard');
        }
        else{
           $scope.errorLoginMessage='Please enter Correct Credentials!';
        }
      }).
      error(function(data, status, headers, config) {
      });
  };
});



