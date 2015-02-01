'use strict';
require('angular');
require('angular-ui-router');

// home module
angular.module('home', ['ui.router']).config(['$stateProvider', function($stateProvider) {
    /*config path for home page*/
    $stateProvider.state('rechnung', {
        url: '/',
        templateUrl: 'src/invoices/invoices.tpl.html',
        controller: 'InvoiceController'
    });
}]).controller('InvoiceController', [
    '$scope',
    'invoiceService',
    function($scope, invoiceService) {
        /* initialize */
        $scope.load = function() {
            invoiceService.loadInvoices().success(function(data) {
                $scope.invoices = data.invoices;
            }).error(function(response) {
                $scope.response = response;
            });
        };
    }
]).factory('invoiceService', require('./InvoiceService'));