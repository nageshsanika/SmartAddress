/**
 * Created by NageswaraRao on 5/11/2015.
 */
'use strict';
angular.module('smartAddressApp.directive.addressList',[])
  .directive('addressesList',function(Restangular,$location){
  return {
    restrict: 'E',
    scope:{
      address:'='
    },
    controller: function($scope){
    },
    link: function(scope, elem, attrs) {
      scope.deleteUser = function (addressId) {
        console.log("Hi Testing Deleted");
        Restangular.one('addresses', addressId).remove().then(function (addressData) {
          $location.path('/dashboard');
        });
      }
    },
    template: "<div><h4 class='text-warning'>{{address.token}}</h4>" +
    "<a class='pull-right text-danger' style='margin-left:20px' ng-click='deleteUser(address._id.$oid)'><span class='glyphicon glyphicon-remove'></span></a>" +

    "<a class='pull-right text-primary' href='#/edit/{{address._id.$oid}}'><span class='glyphicon glyphicon-pencil'></span></a>" +
    "</div>"+
    "<div>{{address.address || html}}</div>" +
    "<hr/>"
  }
});
