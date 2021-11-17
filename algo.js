// Currently these functions are empty. As a result, all tests will fail.
function Algo() {}

Algo.prototype.reverse = function (str) {
  return str.split('').reverse().join('');
};

Algo.prototype.isPalindrome = function (str) {
  return this.reverse(str).toLowerCase() === str.toLowerCase();
};

Algo.prototype.capitalize = function (str) {
  return str
    .split(' ')
    .map((word) => {
      return (
        word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
      );
    })
    .join(' ');
};

module.exports = Algo;
