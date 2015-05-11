/**
 * Created by NageswaraRao on 5/10/2015.
 */
'use strict';
smartAddressApp.controller('SearchController', function ($scope,$location,$http,$rootScope) {
  $scope.searchSmartAddressTokens = function () {
    $scope.searchResults = true;
    $http.get('https://api.mongolab.com/api/1/databases/mongodb_nagesh_test_env/collections/addresses?q={"token":"' + $scope.address.token.toUpperCase() + '"}&apiKey=N4-PzMrqKRTMPQ3-J06bDMHUkOjifzfj').
      success(function (data, status, headers, config) {
        if(data.length>0) {
          $scope.resultSmartAddressData = data['0']['address'];
        }
        else{
          $scope.resultSmartAddressData="No Results Found!";
        }
      }).
      error(function (data, status, headers, config) {
      });

  };
  $scope.hideResults=function(){
    $scope.searchResults=false;
    $scope.address.token='';
  }
});
