/**
 * Created by NageswaraRao on 5/12/2015.
 */
'use strict';
//for setting up RESTANGULAR API Provider

smartAddressApp.config(function(RestangularProvider){
  // declaring apiURL and apiKey
  // the fallowing api is created in shared clusters -- MongoLab
  var apiURL="https://api.mongolab.com/api/1/databases/nagesh_sanika_shared_cluster/collections";
  var apiKey="N4-PzMrqKRTMPQ3-J06bDMHUkOjifzfj";

  //configuring Restangular
  RestangularProvider.setBaseUrl(apiURL);
  RestangularProvider.setDefaultRequestParams({ apiKey: apiKey }) ;
});
