/*wichtig,
gegen minificatino hier array zurückliefern!
*/
module.exports = ['$http',function($http) {
  return {
      loadExpenses : function() {
         return $http.get('/api/expense/expenses');
      }

  };
}];