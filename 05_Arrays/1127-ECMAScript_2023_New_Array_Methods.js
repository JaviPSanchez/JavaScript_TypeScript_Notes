/*
👉 Check out these powerful new array methods introduced in ECMAScript, designed to make array manipulation even more efficient and useful. Let's dive in!

1. toReversed(): This method allows you to obtain a reversed version of an array without modifying the original array. Simply call toReversed() on an array, and it returns a new array with the elements in reverse order. This is perfect for scenarios where you need to reverse the order of items but want to preserve the original array.

2. toSorted(): Sorting an array is now easier than ever with the toSorted() method. this method also generates a new array without modifying the original one. By calling toSorted() on an array, you obtain a sorted version in ascending order. It's incredibly handy when you need to perform operations on a sorted array while retaining the original order.

3. toSpliced(startIndex, deleteCount): With this method, you can extract a portion of an array without changing the original array. Specify the startIndex and deleteCount parameters to define the range of elements to extract.

These new array methods bring increased flexibility and convenience to your JavaScript code. Enjoy experimenting with them and leverage their power in your projects!
*/

/*
1️⃣ toReversed(): This method allows you to obtain a reversed version of an array without modifying the original array.
Simply call toReversed() on an array, and it returns a new array with the elements in reverse order.
This is perfect for scenarios where you need to reverse the order of items but want to preserve the original array.
*/

let initArray = [1, 2, 3];
let iteratedArray = initArray.toReversed();
console.log(initArray, iteratedArray);
// Output: [1, 2, 3], [3, 2, 1]

/*
2️⃣ toSorted(): Sorting an array is now easier than ever with the toSorted() method. Similar to toReversed(),
this method generates a new array without modifying the original one. By calling toSorted() on an array,
you obtain a sorted version in ascending order. It's incredibly handy when you need to perform operations
on a sorted array while retaining the original order.
*/
initArray = [2, 1, 3];
iteratedArray = initArray.toSorted();
console.log(initArray, iteratedArray);
// Output: [2, 1, 3], [1, 2, 3]

/*
3️⃣ toSpliced(startIndex, deleteCount): With this method, you can extract a portion of an array without changing the original array.
Specify the startIndex and deleteCount parameters to define the range of elements to extract. The resulting array is returned,
allowing you to perform targeted operations while keeping the initial array intact.
*/
initArray = [1, 2, 3, 4];
iteratedArray = initArray.toSpliced(1, 2);
console.log(initArray, iteratedArray);
// Output: [1, 2, 3, 4], [1, 4]
