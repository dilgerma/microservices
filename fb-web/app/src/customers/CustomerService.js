/*wichtig,
gegen minificatino hier array zurückliefern!
*/
module.exports = ['$http',function($http) {
  return {
      loadCustomers : function() {
         return $http.get('/api/customer/customers');
      },

      storeCustomer : function(customer) {
          return $http.post('/api/customer/customer', customer.toJSON());
      }

  };
}];