var adder = function(a) {
  return `the sum of the 2 numbers is ${a + pi}`;
};

var pi = 3.14;

module.exports = {
  counter: function(arr) {
    return "There are " + arr.length + " elements in the array";
  },
  adder: adder
};
