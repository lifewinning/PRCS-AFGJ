'use strict';

angular.module('myApp.controllers', [])
  .controller('lang', ['$scope', 'lang', function($scope, lang){
  	lang.getSpreadsheetLang(function(data){
  		console.log("lang: "+ data);
  		$scope.langList = data;
  	})
}]);