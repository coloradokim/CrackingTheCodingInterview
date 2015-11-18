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
