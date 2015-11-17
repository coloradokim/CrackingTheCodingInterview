// Given a string, write a function to check if it is a permutation of a palindrome
// ("taco cat", "tact coa") => true

/* if the number of key-value pairs is the same length, continue. If no, return false
if the values are identical, return true,
if the values are not the same, return  */

// check out: http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html

  function checkPal (str1, str2) {
    var arr1 = str1.split("").sort()
    var arr2 = str2.split("").sort()

    if (arr1.length != arr2.length) {
        return false
    }

    var obj1 = arr1.reduce(function(prev, curr, index) {
      prev[index] = curr;
      return prev;
    }, {})
    var arr2 = str2.split("").sort()
    var obj2 = arr2.reduce(function(prev, curr, index) {
      prev[index] = curr;
      return prev;
    }, {})

  }

  checkPal("kim", "cate")
