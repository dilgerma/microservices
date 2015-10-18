module fbReportingWeb {
    'use strict';
    export class MainCtrl {

        static $inject = ['$scope', '$http', 'SERVER'];

        private $http:ng.IHttpService;

        constructor($scope:any, $http:ng.IHttpService, SERVER) {
            this.$http = $http;
            console.log($scope);
            $scope.request = () => {
                return this.$http.get('./report').success(function (result:any) {
                    $scope.result = result;
                });

            }
        }


    }

}
