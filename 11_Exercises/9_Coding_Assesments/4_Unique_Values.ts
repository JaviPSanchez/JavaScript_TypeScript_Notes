// import "./main.css";

/*
 i
[1, 1, 1, 1, 2, 2, 2, 3, 4, 5, 6]
    j
*/

function countUniqueValues(arr: number[]) {
  if (arr.length === 0) {
    return 0;
  }
  // First pointer
  let i = 0;

  // Second Pointer
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    console.log(i, j);
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 2, 2, 2, 3, 4, 5, 6]));
