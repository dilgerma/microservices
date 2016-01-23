'use strict';
require('angular');
require('angular-ui-router');

// home module
angular.module('invoices', ['ui.router']).config(['$stateProvider', function ($stateProvider) {
    /*config path for home page*/
    $stateProvider.state('rechnung', {
        url: '/',
        templateUrl: 'src/invoices/invoices.tpl.html',
        controller: 'InvoiceController'
    });
}]).controller('InvoiceController', [
    '$scope',
    '$log',
    'invoiceService',
    function ($scope, $log, invoiceService) {

        $scope.filter = {
        };

        $scope.$watch('filter', function (filter) {
            $log.debug("Received new Filter", filter);
        }, true);

        /* initialize */
        $scope.load = function () {
            invoiceService.loadInvoices($scope.filter).then(function (invoices) {
                $scope.invoices = invoices;
            }, function (response) {
                $scope.response = response;
            });
        };

    }
]).factory('invoiceService', require('./InvoiceService'))
    .directive('invoiceFilter', require('./directive/ListFilter'));
