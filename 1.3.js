// URLify: Write a method to replace all spaces in a string with '%20'

function URLify (str) {
  var newArr = str.split('')
  var mapArr = newArr.map(function(item) {
    if (item === " ") {
      return "%20"
    }
    else {
      return item
    }
  })
  return mapArr.join("")
}




console.log(URLify("Winter is coming"));
