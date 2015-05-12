/*wichtig,
gegen minificatino hier array zurückliefern!
*/
module.exports = ['$http','SERVER',function($http, server) {
  return {
      loadInvoices : function() {
         return $http.get(server.toURI()  + '/invoices');
      }

  };
}];