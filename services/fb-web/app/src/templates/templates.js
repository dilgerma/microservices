'use strict';
require('angular');
require('angular-ui-router');
require('ng-file-upload');

// home module
angular.module('templates', ['ui.router', 'angularFileUpload']).config(['$stateProvider', function ($stateProvider) {
    /*config path for home page*/
    $stateProvider.state('formulare', {
        url: '/',
        templateUrl: 'src/templates/templates.tpl.html',
        controller: 'TemplateController'
    });
}]).controller('TemplateController', [
    '$scope',
    'templateService',
    function ($scope, templateService) {
        $scope.templateName = '';
        $scope.templates = [];
        templateService.findAll().then(function(dataResponse) {
            $scope.templates = dataResponse.data;
        });
        $scope.upload = function (files, templateName) {
            console.log("upoading files " + files + " , " + templateName);
            templateService.upload(files, templateName).then(function () {
                return templateService.findAll();
            }).then(function (templateResponse) {
                    $scope.templates = templateResponse.data;
            });
        }

    }
]).factory('templateService', require('./TemplateService'));
