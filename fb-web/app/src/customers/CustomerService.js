/*wichtig,
gegen minificatino hier array zurückliefern!
*/
module.exports = ['$http',function($http) {
  return {
      loadCustomers : function() {
         return $http.get('/customers');
      }

  };
}];