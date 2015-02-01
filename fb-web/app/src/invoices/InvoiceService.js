/*wichtig,
gegen minificatino hier array zurückliefern!
*/
module.exports = ['$http',function($http) {
  return {
      loadInvoices : function() {
         return $http.get('/invoices');
      }

  };
}];