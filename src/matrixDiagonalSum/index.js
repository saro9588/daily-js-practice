// Description
// Write a function 'diagonalSum' that calculates the sum of the elements
// on the main diagonal of a square matrix.
// The main diagonal of a matrix consists of those elements that extend from the
// top left corner to the bottom right corner.Your function should be able to
// handle both positive and negative integers.

// Requirements
// The function should take one parameter: a 2-dimensional array (matrix) of integers.
// The input matrix is guaranteed to be square (i.e., have the same number of rows and columns).
// Your function must return a single integer: the sum of the elements on the main diagonal.
// You must not use any built-in functions for directly calculating the diagonal sum.
// You must handle any cases where the length of the matrix is 0 (empty matrix).
// Do not mutate the original matrix within your function.

function matrixDiagonalSum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === j) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}

let matrixA = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let matrixB = [];
console.log(matrixDiagonalSum(matrixA));
console.log(matrixDiagonalSum(matrixB));
