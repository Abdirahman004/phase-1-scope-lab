//  Declare a global variable customerName
var customerName = 'bob';

//  Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

//  Function to set bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob';
}

//  Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

//   Declare a constant leastFavoriteCustomer
const leastFavoriteCustomer = 'some initial value';

// Function to attempt to change leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'a new value'; 
}

