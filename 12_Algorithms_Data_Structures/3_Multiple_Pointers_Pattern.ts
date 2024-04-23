import "./main.css";

/*
Multiple Pointers: Creating pointers or values that correspond to and
index or position and move towards the beginning, end or middle based
on a certain condition.

Write a function called sumZero which accepts a sorted array o integers
The function should find the first pair where the sum is o:

sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
sumZero([-2,0,1,3]) // undefined
*/

// Time Complexity - O(N^2) | Space Complexity - O(1)
function sumZero(arr: number[]) {
  //Pointer
  for (let i = 0; i < arr.length; i++) {
    // Loop over the rest
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 4]));

// Refactor Solution: Time Complexity - O(N) | Space Complexity - O(1)

function sumZeroOptimized(arr: number[]) {
  let left = 0; // First pointer
  let right = arr.length - 1; // Second Pointer
  while (left < right) {
    console.log(`Left Pointer index is ${left} with a value of ${arr[left]}`);
    console.log(
      `Right Pointer index is ${right} with a value of ${arr[right]}`
    );
    let sum = arr[left] + arr[right];
    console.log("sum:", sum);
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// console.log(sumZeroOptimized([-10, -3, -2, -1, 0, 1.9, 2.5, 4, 11]));

// Find Unique values:

function countUniqueValues(arr: number[]) {
  // First pointer
  let i = 0;

  // Second Pointer
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
}

console.log(countUniqueValues([1, 1, 1, 1, 2, 2, 2, 3, 4, 5, 6]));
