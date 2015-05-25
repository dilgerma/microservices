/*wichtig,
 gegen minificatino hier array zurückliefern!
 */
module.exports = ['$http', 'SERVER', '$q', function ($http, SERVER, $q) {

    var that = this;
    this._filter = function (filter, invoices) {
        return invoices.filter(function (invoice) {
            return (!filter.year || filter.year == new Date(invoice.date).getFullYear())
            && (filter.paid == null || filter.paid == invoice.paid)
            && (filter.month == null || filter.month == new Date(invoice.date).getMonth() )

        });
        /**
         * && (filter.month == undefined || filter.month == invoice.month) && filter.paid === invoice.paid
         */
    };

    return {
        loadInvoices: function (filter) {
            var deferred = $q.defer();

            $http.get(SERVER.toURI() + '/invoices').success(function (result) {
                var filteredInvoices = that._filter(filter, result.invoices);
                deferred.resolve(filteredInvoices);
            }).error(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        }
    };
}];