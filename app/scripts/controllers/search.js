/**
 * Created by NageswaraRao on 5/10/2015.
 */
'use strict';
smartAddressApp.controller('SearchController', function ($rootScope,$scope,$location,Restangular) {
  $scope.searchResults=false;
  $scope.searchSmartAddressTokens = function () {
    //showing search result div
    $scope.searchResults = true;
    //getting search results based on smart address token
    Restangular.all('addresses').getList({q:{token: $scope.address.token.toUpperCase()}}).then(function(data){
      if(data.length>0) {
        $scope.resultSmartAddressData = data['0']['address']; //showing the address if data exists
      }
      else{
        $scope.resultSmartAddressData="No Results Found!";  //showing message if no data
      }
    });
  };
  //hiding results on click of 'X' mark
  $scope.hideResults=function(){
    $scope.searchResults=false;
    $scope.address.token='';
  }
});
