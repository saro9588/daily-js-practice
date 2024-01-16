// You are tasked with implementing the FizzBuzz algorithm. Write a function called fizzBuzz that takes a positive integer n as its parameter and prints or returns the following:

// For each number from 1 to n (inclusive):
// If the number is divisible by 3, print or return "fizz."
// If the number is divisible by 5, print or return "buzz."
// If the number is divisible by both 3 and 5, print or return "fizzBuzz."
// If none of the above conditions are met, print or return the number itself.

// Example: n = 15 =>
// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
// 11
// fizz
// 13
// 14
// fizzBuzz

function fizzBuzz(n) {
  let x = "";
  for (let i = 1; i <= n; i++) {
    let x =
      i % 3 === 0 && i % 5 === 0
        ? "FizzBuzz"
        : i % 3 === 0
        ? "Fizz"
        : i % 5 === 0
        ? "Buzz"
        : i;
    console.log(x);
  }
  return x;
}
console.log(fizzBuzz(25)); // output:
// 1;
// 2;
// Fizz;
// 4;
// Buzz;
// Fizz;
// 7;
// 8;
// Fizz;
// Buzz;
// 11;
// Fizz;
// 13;
// 14;
// FizzBuzz;
// 16;
// 17;
// Fizz;
// 19;
// Buzz;
// Fizz;
// 22;
// 23;
// Fizz;
// Buzz;
