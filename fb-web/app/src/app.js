'use strict';
//require jQuery
var $ = require('jquery');
window.jQuery = $;
//require boostrap.js for bootstrap components
var bootstrap = require('bootstrap');
//include angular
require('angular');
//require angular resource for easily handling sending and receiving request
require('angular-resource');
//require angular for better handling and binding controller
require('angular-ui-router');

//load src module
//require home module
require('./invoices/invoices');
require('./expenses/expenses');
require('./customers/customers');

angular.module('app', [
    'ui.router',
    'ngResource',
    'invoices',
    'expenses',
    'customers'
]).controller('MainController', ['$scope', function ($scope) {
    $scope.navElements = [{display: 'rechnung', href: 'rechnung'}, {display: 'ausgaben', href: 'ausgaben'},{display: 'kunden', href: 'kunden'}]
}]);