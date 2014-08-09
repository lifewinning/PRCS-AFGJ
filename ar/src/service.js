'use strict';

angular.module('myApp.services', ['ngResource']).
  factory('Gdocs', function($resource, $rootScope, $http) {

    var factory = {};

    factory.getSpreadsheetTabletop = function (callback) {
    Tabletop.init({
        key: '0AkuokbMVYNRxdHE2anZsV0JrSmQ5QjBSRkszNnBRRFE',
        callback: function(data, tabletop) {
          if(callback && typeof(callback) === "function") {
            $rootScope.$apply(function() {
              callback(data);
            })
          }
        },
        simpleSheet: false,
        parseNumbers: true
      })
    }

    return factory;
  });