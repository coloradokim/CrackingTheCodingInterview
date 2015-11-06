// Implement an alogrithm to determine is a string has all unique characters.

function isUnique(str) {
  var newArr = str.split('')
  newArr.reduce(function(prev, curr) {
    if (prev === curr) {
      console.log("The string has repeated characters");
    }
    else {
      console.log("The string is unique!");
    }
  })
}

isUnique("hello")
