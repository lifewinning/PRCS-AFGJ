'use strict';

angular.module('myApp.controllers', [])
.controller('spreadsheet', ['$scope', 'Gdocs', function($scope, Gdocs) {
    Gdocs.getSpreadsheetTabletop(function(data) {
    	angular.forEach(angular.element(tabletop.sheets("AR")), function(value, key){
    		console.log(data);
        	$scope.tableDataTabletop = data;
		});
    });
  }]);