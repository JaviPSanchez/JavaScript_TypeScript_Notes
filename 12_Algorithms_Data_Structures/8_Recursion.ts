import "./main.css";

/**
 *
 *
What is Recursion?

Is it a process that calls itself. Not like callback functions, it calls itself!

Why is it important?

It is everywhere, in JSON.parse or JSON.stringify for exemple, document.getElementById
and DOM traversal, or in data structures like trees...

Call Stack?

As we know, when a function is called is placed on top of the call stack, removed after
returned. But with recursion functions keep pushing new functions onto the callstack.

ssential parts of a recursion function:

1º Base Case --> Is it the condition when the recursion ends
2º Different Input --> 
 *
 */

//Exemple of Non Recursive

function countDown(num: number) {
  for (let index = num; index > 0; index--) {
    console.log(index);
  }
  console.log("All done!");
}
countDown(5);

//Recursive

function countDownRecursive(num: number) {
  // Base Case
  if (num < 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDownRecursive(num);
}
countDownRecursive(5);

// Recursive

function sumRange(num: number) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
// return 3 + sumRange(2) = 3
//                  return 2 + sumRange(1) = 3
//                              return 1

console.log(sumRange(3)); // 6

// Factorial --> 10! = 10 * 9 * 8 * 7 * 6 ... * 1
