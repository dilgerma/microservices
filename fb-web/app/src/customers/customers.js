'use strict';
require('angular');
require('angular-ui-router');

// home module
angular.module('customers', ['ui.router']).config(['$stateProvider', function($stateProvider) {
    /*config path for home page*/
    $stateProvider.state('kunden', {
        url: '/',
        templateUrl: 'src/customers/customers.tpl.html',
        controller: 'CustomerController'
    });
}]).controller('CustomerController', [
    '$scope',
    'customerService',
    function($scope, customerService) {
        /* initialize */
        $scope.load = function() {
            customerService.loadCustomers().success(function(data) {
                $scope.customers = data.customers;
            }).error(function(response) {
                $scope.response = response;
            });
        };
    }
]).factory('customerService', require('./CustomerService'));
