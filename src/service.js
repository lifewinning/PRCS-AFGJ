'use strict';

angular.module('myApp.services', ['ngResource']).
  factory('EN', function($resource, $rootScope, $http) {

    var factory = {};

    factory.getSpreadsheetEN = function (callback) {
    Tabletop.init({
        key: '0AkuokbMVYNRxdFBlUXJ2ckFtUmZxZFBQSFBJWGJaMnc',
        callback: function(data, tabletop) {
          if(callback && typeof(callback) === "function") {
            $rootScope.$apply(function() {
              callback(data);
            })
          }
        },
        simpleSheet: true,
        parseNumbers: true
      })
    }
    return factory;
  }).
  factory('lang', function($resource, $rootScope, $http) {

    var factory = {};

    factory.getSpreadsheetLang = function (callback) {
    Tabletop.init({
        key: '0AkuokbMVYNRxdDhudEo0elVoVURUT1ZnYXY3a2tKeUE',
        callback: function(data, tabletop) {
          if(callback && typeof(callback) === "function") {
            $rootScope.$apply(function() {
              callback(data);
            })
          }
        },
        simpleSheet: true,
        parseNumbers: true
      })
    }
  return factory;
  })
