'use strict';
require('angular');
require('angular-ui-router');

// home module
angular.module('expenses', ['ui.router']).config(['$stateProvider', function($stateProvider) {
    /*config path for home page*/
    $stateProvider.state('ausgaben', {
        url: '/ausgaben',
        templateUrl: 'src/expenses/expenses.tpl.html',
        controller: 'ExpenseController'
    });
}]).controller('ExpenseController', [
    '$scope',
    'expenseService',
    function($scope, expenseService) {
        /* initialize */
        $scope.load = function() {
            expenseService.loadExpenses().success(function(data) {
                $scope.expenses = data.expenses;
            }).error(function(response) {
                $scope.response = response;
            });
        };
    }
]).factory('expenseService', require('./expenseService'));
