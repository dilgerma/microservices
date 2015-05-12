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
require('./angular-template-cache');
require('./invoices/invoices');
require('./expenses/expenses');
require('./customers/customers');
require('./templates/templates');

angular.module('app', [
    'ui.router',
    'ngResource',
    'genTemplateCache',
    'invoices',
    'expenses',
    'customers',
    'templates'
]).controller('MainController', ['$scope', function ($scope) {
    $scope.navElements = [{display: 'rechnung', href: 'rechnung'}, {display: 'ausgaben', href: 'ausgaben'},{display: 'kunden', href: 'kunden'}, {display: 'formulare', href: 'formulare'}]
}])
    .constant('SERVER', {
        url : 'http://localhost',
        port : 8080,
        toURI : function() {
            return this.url + ":" + this.port;
        }
    });