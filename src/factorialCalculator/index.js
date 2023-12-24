// Write a function that takes an integer as
// input and returns the factorial of that number.

function factorialNum(num) {
  let y = 1;
  for (let i = 1; i <= num; i++) {
    y = i * y;
  }
  return y;
}

let x = factorialNum(5);
console.log(x); //output: 120
