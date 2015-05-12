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
smartAddressApp.controller('LoginController', function ($rootScope,$scope,$location,Restangular) {

  $scope.login = function () {
    //getting user object for the entered email and password
    Restangular.all('users').getList({q:{email: $scope.user.email , password : $scope.user.password }}).then(function(data){
      //if results make authentication true
      if(data.length>0){
        //set authentication true
        $rootScope.authenticated = true;
        //getting some logged in user information to show
        $rootScope.currentUser = data['0']['name'];
        $rootScope.id=data['0']['_id']['$oid'];
        //redirecting to dashboard
        $scope.errorLoginMessage='';
        $location.path('/dashboard');
      }
      //else show authentication error
      else{
        $scope.errorLoginMessage='Please enter Correct Credentials!';
      }
    });
  };
});



