arr1 = str1.toLowerCase().split("")

var obj1 = {};
for (var i = 0; i < arr1.length; i++) {
  obj1[i] = arr1[i]
}
return obj1


var obj1 = arr1.reduce(function(prev, curr, index) {
  prev[index] = curr;
  return prev;
}, {});
