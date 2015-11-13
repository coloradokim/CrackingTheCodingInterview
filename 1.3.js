// URLify: Write a method to replace all spaces in a string with '%20'

function URLify (str) {
  var newArr = str.split('')
  var index = newArr.indexOf(" ");
  if (index !== -1) {
    newArr[index] = "%20"
    console.log(newArr.join(" "))
  }
}


URLify("Kim is confused.")
