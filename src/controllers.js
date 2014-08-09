'use strict';

angular.module('myApp.controllers', [])
.controller('spreadsheet', ['$scope', 'Gdocs', function($scope, Gdocs) {
    Gdocs.getSpreadsheetTabletop(function(data) {
        console.log(data);
        $scope.tableDataTabletop = data;
    });
  }]);