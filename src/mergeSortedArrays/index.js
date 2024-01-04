// Function Name: mergeSortedArrays
// Description
// You are given two arrays of integers, each one is sorted in non-decreasing order. Your task is to write a function that merges the two arrays together into one sorted array in non-decreasing order.
// The solution should not use any sort functions provided by the language's standard library, and should manually combine the two arrays in a way that maintains the sorted order.
// Special care must be taken to handle duplicates correctly - they should all be included in the final sorted array.

// Requirements
// The function must be named mergeSortedArrays.
// The function must take two parameters, both of which are arrays of integers.
// The function must return a new array containing all the elements from the input arrays, sorted in non-decreasing order.
// Do not use any built-in sort functions. Manual implementation is required.
// The original arrays should not be modified.
// Efficiently handle arrays of different lengths.

function mergeSortedArrays(arrA, arrB) {
  let newArray = [...arrA, ...arrB];
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i] > newArray[i + 1]) {
        let temp = newArray[i];
        newArray[i] = newArray[i + 1];
        newArray[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return newArray;
}

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

console.log(mergeSortedArrays(arr1, arr2)); // output: [1,2,3,4,5,6]
