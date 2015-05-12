/**
 * Created by NageswaraRao on 5/11/2015.
 */
'use strict';
angular.module('smartAddressApp.directive.usersList',[])
  .directive('usersList',function(){
    return {
      restrict: 'E',
      scope:{
        user:'='
      },
      controller: function($scope){
      },
      template: "<div><h6 class='text-primary'><b>{{user.name}}</b></h6><hr/>"
    }
  });
