// Write a function that takes a plaintext string and a numeric shift value,
// then returns the encoded message using a Caesar cipher.A Caesar cipher shifts the characters
// in the plaintext by the shift value in the alphabet.
// For example, with a shift of 1, 'A' becomes 'B', 'B' becomes 'C', etc.

function encodeCipher(str) {
  let encodedString = " ";
  for (let i = 0; i < str.length; i++) {
    let strCharCode = str.charCodeAt(i);
    let newEncodedString = strCharCode + 1 + " ";
    encodedString += String.fromCharCode(newEncodedString);
  }
  return encodedString;
}

let result = encodeCipher("Hello World");
console.log(result);
