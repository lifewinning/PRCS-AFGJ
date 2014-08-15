'use strict';

angular.module('myApp.controllers', [])
.controller('spreadsheet', ['$scope', 'EN', function($scope, EN) {
    EN.getSpreadsheetEN(function(data) {
        console.log(data);
        $scope.tableDataTabletop = data;
    });
  }]).controller('lang', ['$scope', 'lang', function($scope, lang){
  	lang.getSpreadsheetLang(function(data){
  		console.log("lang: "+ data);
  		$scope.langList = data;
  	})
  }]);