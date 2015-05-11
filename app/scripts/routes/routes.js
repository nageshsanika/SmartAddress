/**
 * Created by NageswaraRao on 5/9/2015.
 */
'use strict';
smartAddressApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/register.html',
      controller: 'RegisterController'
    })
    .when('/dashboard',{
      templateUrl: 'views/dashboard.html',
      controller: 'RegisterController'
    })
    .when('/login',{
      templateUrl:'views/login.html',
      controller:'LoginController'
    })
    .when('/edit/:addressId', {
      controller: 'EditController',
      templateUrl: 'views/edit.html'
    })
    .otherwise({
      redirectTo: '404.html'
    });
});
