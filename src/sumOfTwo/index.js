// Function Name: findTwoSum

// Description
// Write a function that takes an array of integers and an integer representing a target sum.
// The function should find the two distinct numbers in the array that sum up to the target value.
// It should return an array containing these two numbers in any order.
// If no two numbers sum up to the target value,
// the function should return an empty array.
// Assume that each input would have exactly one solution and the same element
// cannot be used twice.

// Requirements
// The function must take two arguments: an array of integers and a single integer representing the target sum.
// The function must return an array of integers.
// If two numbers sum up to the target, return the array with these two numbers.
// If no pair sums up to the target, return an empty array.

function findTwoSum(list, n) {
  let filteredList = list.filter((num) => num < n);
  let a;
  let b;
  let sumOfTwo = [];
  for (let i = 0; i < filteredList.length; i++) {
    a = filteredList[i];
    b = n - a;

    if (filteredList.includes(b) && a !== b) {
      sumOfTwo.push(a, b);
      return sumOfTwo;
    }
  }
  return sumOfTwo;
}

let list1 = findTwoSum([2, 7, 11, 15], 9);
let list2 = findTwoSum([3, 2, 4], 6);
let list3 = findTwoSum([5, 5, 11], 10);
let list4 = findTwoSum([0, 5, 11], 10);
console.log(list1); // output: [2,7]
console.log(list2); // output: [2,4]
console.log(list3); // output: []
console.log(list4); // output: []
