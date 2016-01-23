/// <reference path="../../../typings/tsd.d.ts" />

/// <reference path="main/main.controller.ts" />

module fbReportingWeb {
    'use strict';

    angular.module('fbReportingWeb', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ui.bootstrap'])
        .controller('MainCtrl', MainCtrl)

        .config(function ($stateProvider:ng.ui.IStateProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'app/main/main.html',
                    controller: 'MainCtrl'
                });

            $urlRouterProvider.otherwise('/');
        })
        .constant('SERVER', {
                url : 'http://localhost',
                port : 8999,
                toURI : function() {
                    return this.url + ":" + this.port;
                }
            });
    ;
}
