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
        parseNumbers: true,
        proxy: 'https://s3.amazonaws.com/prcs-flatware'
      })
    }
    return factory;
  }).
  factory('ES', function($resource, $rootScope, $http) {

    var factory = {};

    factory.getSpreadsheetES = function (callback) {
    Tabletop.init({
        key: '0AkuokbMVYNRxdC1tU2dGVGpvSi14SGlMYlhicS00cGc',
        callback: function(data, tabletop) {
          if(callback && typeof(callback) === "function") {
            $rootScope.$apply(function() {
              callback(data);
            })
          }
        },
        simpleSheet: true,
        parseNumbers: true,
        proxy: 'https://s3.amazonaws.com/prcs-flatware'
      })
    }
    return factory;
  }).
  factory('AR', function($resource, $rootScope, $http) {

    var factory = {};

    factory.getSpreadsheetAR = function (callback) {
    Tabletop.init({
        key: '0AkuokbMVYNRxdDY0OTJzTmdocTJJcXhZd21CaXZnbWc',
        callback: function(data, tabletop) {
          if(callback && typeof(callback) === "function") {
            $rootScope.$apply(function() {
              callback(data);
            })
          }
        },
        simpleSheet: true,
        parseNumbers: true,
        proxy: 'https://s3.amazonaws.com/prcs-flatware'
      })
    }
    return factory;
  }).
  factory('AL', function($resource, $rootScope, $http) {

    var factory = {};

    factory.getSpreadsheetAL = function (callback) {
    Tabletop.init({
        key: '0AkuokbMVYNRxdHAwZFVYQlozckRVOXYzUjdLOUlwM1E',
        callback: function(data, tabletop) {
          if(callback && typeof(callback) === "function") {
            $rootScope.$apply(function() {
              callback(data);
            })
          }
        },
        simpleSheet: true,
        parseNumbers: true,
        proxy: 'https://s3.amazonaws.com/prcs-flatware'
      })
    }
    return factory;
  }).
    factory('AL', function($resource, $rootScope, $http) {

    var factory = {};

    factory.getSpreadsheetAL = function (callback) {
    Tabletop.init({
        key: '0AkuokbMVYNRxdHAwZFVYQlozckRVOXYzUjdLOUlwM1E',
        callback: function(data, tabletop) {
          if(callback && typeof(callback) === "function") {
            $rootScope.$apply(function() {
              callback(data);
            })
          }
        },
        simpleSheet: true,
        parseNumbers: true,
        proxy: 'https://s3.amazonaws.com/prcs-flatware'
      })
    }
    return factory;
  }).
  factory('BS', function($resource, $rootScope, $http) {

    var factory = {};

    factory.getSpreadsheetBS = function (callback) {
    Tabletop.init({
        key: '0AkuokbMVYNRxdEEwbFNHLTZfaUtLQkFKdDRFV0N1N2c',
        callback: function(data, tabletop) {
          if(callback && typeof(callback) === "function") {
            $rootScope.$apply(function() {
              callback(data);
            })
          }
        },
        simpleSheet: true,
        parseNumbers: true,
        proxy: 'https://s3.amazonaws.com/prcs-flatware'
      })
    }
    return factory;
  }).
    factory('DE', function($resource, $rootScope, $http) {

    var factory = {};

    factory.getSpreadsheetDE = function (callback) {
    Tabletop.init({
        key: '0AkuokbMVYNRxdDJIenNuaUVxV0NlMXRzMHBvbUp0TkE',
        callback: function(data, tabletop) {
          if(callback && typeof(callback) === "function") {
            $rootScope.$apply(function() {
              callback(data);
            })
          }
        },
        simpleSheet: true,
        parseNumbers: true,
        proxy: 'https://s3.amazonaws.com/prcs-flatware'
      })
    }
    return factory;
  }).
  factory('FR', function($resource, $rootScope, $http) {

    var factory = {};

    factory.getSpreadsheetFR = function (callback) {
    Tabletop.init({
        key: '0AkuokbMVYNRxdDNyblh6bXJjWERWeTIxaHpGUUdBSlE',
        callback: function(data, tabletop) {
          if(callback && typeof(callback) === "function") {
            $rootScope.$apply(function() {
              callback(data);
            })
          }
        },
        simpleSheet: true,
        parseNumbers: true,
        proxy: 'https://s3.amazonaws.com/prcs-flatware'
      })
    }
    return factory;
  }).
  factory('IT', function($resource, $rootScope, $http) {

    var factory = {};

    factory.getSpreadsheetIT = function (callback) {
    Tabletop.init({
        key: '0AkuokbMVYNRxdDlMMHI0bGZIbWNHYXMxSTYyNkZEeFE',
        callback: function(data, tabletop) {
          if(callback && typeof(callback) === "function") {
            $rootScope.$apply(function() {
              callback(data);
            })
          }
        },
        simpleSheet: true,
        parseNumbers: true,
        proxy: 'https://s3.amazonaws.com/prcs-flatware'
      })
    }
    return factory;
  }).
  factory('PL', function($resource, $rootScope, $http) {

    var factory = {};

    factory.getSpreadsheetPL = function (callback) {
    Tabletop.init({
        key: '0AkuokbMVYNRxdGE4ZkpVdHRiNF81WkoxM3lOQ1VSYmc',
        callback: function(data, tabletop) {
          if(callback && typeof(callback) === "function") {
            $rootScope.$apply(function() {
              callback(data);
            })
          }
        },
        simpleSheet: true,
        parseNumbers: true,
        proxy: 'https://s3.amazonaws.com/prcs-flatware'
      })
    }
    return factory;
  }).
  factory('RU', function($resource, $rootScope, $http) {

    var factory = {};

    factory.getSpreadsheetRU = function (callback) {
    Tabletop.init({
        key: '0AkuokbMVYNRxdGJsVDJSUHlXQnY0RUtBZ0ZSV2tuZWc',
        callback: function(data, tabletop) {
          if(callback && typeof(callback) === "function") {
            $rootScope.$apply(function() {
              callback(data);
            })
          }
        },
        simpleSheet: true,
        parseNumbers: true,
        proxy: 'https://s3.amazonaws.com/prcs-flatware'
      })
    }
    return factory;
  }).
    factory('TR', function($resource, $rootScope, $http) {

    var factory = {};

    factory.getSpreadsheetTR = function (callback) {
    Tabletop.init({
        key: '0AkuokbMVYNRxdHBUN0FLRUxpLU9RNmJLOTVROTVzaXc',
        callback: function(data, tabletop) {
          if(callback && typeof(callback) === "function") {
            $rootScope.$apply(function() {
              callback(data);
            })
          }
        },
        simpleSheet: true,
        parseNumbers: true,
        proxy: 'https://s3.amazonaws.com/prcs-flatware'
      })
    }
    return factory;
  }).
  factory('UA', function($resource, $rootScope, $http) {

    var factory = {};

    factory.getSpreadsheetUA = function (callback) {
    Tabletop.init({
        key: '0AkuokbMVYNRxdEZvNU5nNjdyczF1b2ZKSFBRZnFjRkE',
        callback: function(data, tabletop) {
          if(callback && typeof(callback) === "function") {
            $rootScope.$apply(function() {
              callback(data);
            })
          }
        },
        simpleSheet: true,
        parseNumbers: true,
        proxy: 'https://s3.amazonaws.com/prcs-flatware'
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
