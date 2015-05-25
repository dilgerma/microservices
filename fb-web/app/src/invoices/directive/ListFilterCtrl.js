module.exports = ['$scope', '$log', function ($scope, $log) {

    this.filter = $scope.filter;

    this.selectCurrentMonth = function () {
        this.selectMonth(new Date().getMonth());
    };

    this.selectMonth = function (month) {
        $log.debug("selecting current month");
        this.filter.month = month;
    };

    this.togglePaid = function () {
        this.filter.paid = !this.filter.paid;
    }

}];