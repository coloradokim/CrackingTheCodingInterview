// Implement an alogrithm to determine is a string has all unique characters.

function isUnique (str) {
  var newArr = str.split('');
  var valuesSoFar = {};
  for (var i = 0; i < newArr.length; i++) {
    var value = newArr[i];
    if (value in valuesSoFar) {
      return false;
    }
    valuesSoFar[value] = false
  }
  return true
}

console.log(isUnique("Hello"));
