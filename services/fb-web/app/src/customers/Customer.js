module.exports = function(customerId, customerNumber, organization, firstName, lastName) {
    this.customerId = customerId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.customerNumber = customerNumber;
    this.organization = organization;

    this.toJSON = function() {
        return  {
            'FIRST_NAME' : this.firstName,
            'LAST_NAME' : this.lastName,
            'CUSTOMER_ID' : this.customerId,
            'CUSTOMER_NUMBER' : this.customerNumber,
            'ORGANIZATION' : this.organization
        };
    }

};