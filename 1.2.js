// Given 2 strings, write a method to decide is one is a permutation of the other

function isPerm (test1, test2) {
  var lowerCase1 = test1.toLowerCase().split("").sort().join("");
  var lowerCase2 = test2.toLowerCase().split("").sort().join("");
  
  lowerCase1 === lowerCase2 ? console.log(true) : console.log(false);
}

isPerm("Kim", "mike")
