/* 1.5 There are three types of edits that can be performed on a string: insert, remove, or replace a character.
Given two strings, write a function to check if they are 0 or 1 edit away

pale, ple => true
pales, pale => true
pale, bale => true
pal, bake => false */

// use modulo to determine even and odd numbers

function canEdit (str1, str2) {
  arr1 = str1.toLowerCase().split("")
  arr2 = str2.toLowerCase().split("")

  

console.log(arr2);
  var obj1 = {};
  for (var i = 0; i < arr1.length; i++) {
    obj1[i] = arr1[i]
  }

  var obj2 = {};
  for (var i = 0; i < arr2.length; i++) {
    obj2[i] = arr2[i]
  }
}

console.log(canEdit ("pale", "ple"))
