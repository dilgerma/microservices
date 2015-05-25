/**
 * Expects to receive a filter object with these properties that
 * could even be prefilled.
 *
 *    this.filter = {
 *        year: new Date().getYear(),
 *        paid: false,
 *        //defaults to none
 *        selectedMonth: null
 *    };
 */
module.exports = [function() {
   return {
       restricts: 'a',
       scope: {
           filter : '=invoiceFilter'
       },
       templateUrl: '/invoices/directive/listFilter.html',
       controller: require("./ListFilterCtrl"),
       controllerAs: 'filterCtrl'
   }
}];