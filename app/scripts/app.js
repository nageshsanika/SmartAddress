'use strict';
 /**
 * @ngdoc overview
 * @name smartAddressApp
 * @description
 * # smartAddressApp
 *
 * Main module of the application.
 */
var smartAddressApp=angular.module('smartAddressApp', ['ngCookies','ngResource','ngRoute','ngSanitize','restangular']);

//for authentication using rootScope

smartAddressApp.run(function($rootScope,$location){
  $rootScope.authenticated = false;
  $rootScope.currentUser = '';
  $rootScope.logout = function(){
    $rootScope.authenticated = false;
    $rootScope.currentUser = '';
    $rootScope.id='';
    $location.path('/');
  };
});

//for setting up RESTANGULAR API

smartAddressApp.config(function(RestangularProvider){
  RestangularProvider.setBaseUrl('https://api.mongolab.com/api/1/databases/mongodb_nagesh_test_env/collections');
  RestangularProvider.setDefaultRequestParams({ apiKey: 'N4-PzMrqKRTMPQ3-J06bDMHUkOjifzfj' }) ;
});





