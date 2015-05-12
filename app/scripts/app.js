'use strict';
 /**
 * @ngdoc overview
 * @name smartAddressApp
 * @description
 * # smartAddressApp
 *
 * Main module of the application.
 */

var smartAddressApp=angular.module('smartAddressApp', ['ngCookies','ngResource','ngRoute','ngSanitize','restangular','smartAddressApp.directive.addressList','smartAddressApp.directive.usersList']);

smartAddressApp.run(function($rootScope,$location){

  $rootScope.authenticated = false;  //global boolean value for authentication
  $rootScope.currentUser = ''; //global current user -- initially empty (before login)

  //logout function to set authentication false and make current user empty
  $rootScope.logout = function(){
    $rootScope.authenticated = false;
    $rootScope.currentUser = '';
    $rootScope.id='';
    $location.path('/');
  };
});






