/**
 * Created by NageswaraRao on 5/9/2015.
 */
'use strict';

/**
 * @ngdoc function
 * @name smartAddressApp.controller:RegisterController
 * @description
 * # RegisterController
 * Controller of the smartAddressApp
 */
smartAddressApp.controller('RegisterController', function ($scope,$location,Restangular,$rootScope) {
    $scope.save = function () {
      Restangular.all('users').post($scope.user).then(function (user) {
        $rootScope.successRegisterMessage="You have Successfully Registered! Please Login to Continue";
        $location.path('/login');
      });
    };
  });
