// Description
// Write a function to check if a given string is a palindrome.
// The function should take a string as input and return true
// if the input string is a palindrome, otherwise false.

function palindrome(str) {
  let newStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reverseStr = newStr.split("").reverse().join("");
  return newStr === reverseStr ? true : false;
}
let strA = "madam";
let strB = "hello";
let strC = "A man, a plan, a canal, Panama";
console.log(palindrome(strA)); // true
console.log(palindrome(strB)); // false
console.log(palindrome(strC)); // true
