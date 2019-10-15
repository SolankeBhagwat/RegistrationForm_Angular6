"use strict";
var ICustomer = (function() {
  function ICustomer() {}
  ICustomer.prototype.addData = function() {
    return true;
  };
  return ICustomer;
})();

var Customer = (function() {
  function Customer() {
    this.firstName = "Bhagwat";
    this.name = "Bhagwat Solanke";
  }

  Customer.prototype.addData = function() {
    throw new Error("Method not implemented.");
  };

  Customer.prototype.GetName = function() {
    return this.name;
  };
  Customer.prototype.GetFirstName = function() {
    return this.firstName;
  };
  return Customer;
})();
exports.Customer = Customer;
