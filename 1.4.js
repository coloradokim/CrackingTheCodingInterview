// Given a string, write a function to check if it is a permutation of a palindrome
// check out: http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html

  function isPalindrome (str1, str2) {
    var arr1 = str1.toLowerCase().split("").sort();
    var arr2 = str2.toLowerCase().split("").sort();

    if (arr1.length != arr2.length) {
        return false;
    };

    var obj1 = arr1.reduce(function(prev, curr, index) {
      prev[index] = curr;
      return prev;
    }, {});

    var obj2 = arr2.reduce(function(prev, curr, index) {
      prev[index] = curr;
      return prev;
    }, {});

    if (obj1[0] !== obj2[0]) {
      return false;
    };
    return true;
};

console.log(isPalindrome("kim", "miK"));
