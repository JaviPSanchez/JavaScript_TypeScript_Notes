import "./main.css";

/*
This pattern involves dividing a dat set into smaller
chunks and then repeating a proces with a subset of data

Merge Sort, Binary Search, etc son Divide and Conquer

Given a sorted array of integers, write a function called
search, that accepts a value and returns the index where
the value passed to the functions is located.

search([1,2,3,4,5,6], 4) // 3
search([1,2,3,4,5,6], 12) // -1


/**
 * LINEAR SEARCH 👉 miramos uno por uno desde la izq
 * 
 * Pasa por todos los elementos
 * 
 * Time complexity O(N)
 * 
 */

function search(array: number[], value: number) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3

/**
 * BINARY SEARCH 👉 Divide and conquer
 *
 * Aqui reducimos a la mitad el numero de elementos
 *
 * Time complexity Log(N)
 *
 */
