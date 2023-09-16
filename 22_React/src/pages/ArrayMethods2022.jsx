import { useState } from 'react';
import styles from '@styles';
/*
These 3 new methods [toReversed(), toSorted() and toSpliced()] are new methods of Array in JavaScript
that are proposed for the ECMAScript 2022 standard, they are similar to the existing methods reverse(), sort() and splice(),
but they do not mutate the original array, instead they return a new array with the changes applied.

- toReversed(): This method reverses the order of the elements in an array and returns a new array.

- toSorted(): This method sorts the elements of an array according to a compare function and returns a new array.

- toSpliced(): This method changes the contents of an array by removing or replacing existing elements and/or adding new elements and returns a new array.

These methods can be useful for React because they allow you to work with arrays in a more functional and immutable way. React relies on immutability
to optimize rendering and avoid unnecessary re-renders. If you mutate an array in state, React will not detect the change and will not update the UI.
Therefore, you need to use methods that return a new array instead of changing the original one.


*/

const ArrayMethods = () => {
  // Define an array of numbers as state
  const [numbers, setNumbers] = useState([5, 2, 4, 1, 3]);
  // Define a handler function for reversing the array
  const handleReverse = () => {
    // Old method: reverse() mutates the original array
    // const reversedNumbers = [... numbers].reverse();
    // New method: toReversed() returns a new array with the elements in reverse order
    // This does not mutate the original array
    const reversedNumbers = numbers.toReversed();
    // Set the new array as state
    // This will trigger a re-render of the component
    setNumbers(reversedNumbers);
  };
  // Define a handler function for sorting the array
  const handleSort = () => {
    // Old method: sort() mutates the original array
    // const sortedNumbers = [... numbers].sort((a, b) = a - b);
    // New method: toSorted() returns a new array with the elements sorted in ascending order
    // This does not mutate the original array
    const sortedNumbers = numbers.toSorted((a, b) => a - b);
    // Set the new array as state
    // This will trigger a re-render of the component
    setNumbers(sortedNumbers);
  };
  // Define a handler function for splicing the array
  const handleSplice = () => {
    // Old method: splice() mutates the original array
    // const splicedNumbers = [... numbers];
    // splicedNumbers.splice(1, 1, 6, 7);
    // New method: toSpliced() returns a new array with one element removed at index 1 and two elements added // This does not mutate the original array
    const splicedNumbers = numbers.toSpliced(1, 1, 6, 7);
    // Set the new array as state
    // This will trigger a re-render of the component
    setNumbers(splicedNumbers);
  };
  return (
    <div
      className={`${styles.centerPosition} min-w-fit min-h-[250px] flex flex-col justify-center items-center bg-orangeLightess rounded-2xl drop-shadow-2xl p-6`}
    >
      <h1 className="text-3xl font-bold m-4">Array Methods Demo</h1>
      <p className="text-3xl font-bold m-4 bg-grey2 rounded-lg p-6 drop-shadow-2xl">
        Current array: {numbers.join(', ')}
      </p>
      <div className="flex flex-row justify-center items-center">
        <button
          className="w-2/5 m-6 bg-orangeMedium hover:bg-orangeDark text-[#343a40] font-bold px-4 py-2 border-none text-2xl rounded-lg transition-all duration-300"
          onClick={handleReverse}
        >
          Reverse
        </button>
        <button
          className="w-2/5 m-6 bg-orangeMedium hover:bg-orangeDark text-[#343a40] font-bold px-4 py-2 border-none text-2xl rounded-lg transition-all duration-300"
          onClick={handleSort}
        >
          Sort
        </button>
        <button
          className="w-2/5 m-6 bg-orangeMedium hover:bg-orangeDark text-[#343a40] font-bold px-4 py-2 border-none text-2xl rounded-lg transition-all duration-300"
          onClick={handleSplice}
        >
          Splice
        </button>
      </div>
    </div>
  );
};

export default ArrayMethods;
