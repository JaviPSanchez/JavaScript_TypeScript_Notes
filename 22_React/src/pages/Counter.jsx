import styles from '@styles';
import { useState } from 'react';

const Counter = () => {
  const [increment, setIncrement] = useState(1);
  const [counter, setCounter] = useState(0);
  const todayDate = new Date();
  const date = new Date();
  date.setDate(date.getDate() + counter);

  function handleReset() {
    setIncrement(1);
    setCounter(0);
  }

  return (
    <div
      className={`${styles.centerPosition} min-w-[300px] min-h-[250px] flex flex-col justify-center items-center bg-orangeLightess rounded-2xl drop-shadow-2xl p-6`}
    >
      <p className="flex justify-center items-center m-2 text-3xl">
        Today is {todayDate.toDateString()}
      </p>
      <div className="flex flex-row w-full justify-between m-2">
        <button
          className={`${
            increment <= 1
              ? 'border-solid border-[0.5px] border-[#d30d0d] cursor-none opacity-40 pointer-events-none'
              : ''
          } w-1/5 m-6 bg-orangeMedium hover:bg-orangeDark font-bold px-4 py-2 text-2xl rounded-lg transition-all duration-300`}
          onClick={() =>
            setIncrement(currentState =>
              currentState <= 0 ? 1 : currentState - 1,
            )
          }
        >
          -
        </button>
        <p className="flex w-3/5 justify-center items-center m-2 text-3xl">
          Increment: {increment}
        </p>
        <button
          className="w-1/5 m-6 bg-orangeMedium hover:bg-orangeDark text-[#343a40] font-bold px-4 py-2 border-none text-2xl rounded-lg transition-all duration-300"
          onClick={() => setIncrement(currentState => currentState + 1)}
        >
          +
        </button>
      </div>
      <div className="flex flex-row w-full justify-between m-2">
        <button
          className={`${
            counter <= 0
              ? 'border-solid border-[0.5px] border-[#d30d0d] cursor-none opacity-40 pointer-events-none'
              : ''
          } w-1/5 m-6 bg-orangeMedium hover:bg-orangeDark font-bold px-4 py-2 text-2xl rounded-lg transition-all duration-300`}
          onClick={() => setCounter(counter - increment)}
        >
          -
        </button>
        <p className="w-3/5 flex justify-center items-center m-2 text-3xl">
          Count: {counter}
        </p>
        <button
          className="w-1/5 m-6 bg-orangeMedium hover:bg-orangeDark text-[#343a40] font-bold px-4 py-2 border-none text-2xl rounded-lg transition-all duration-300"
          onClick={() => setCounter(counter + increment)}
        >
          +
        </button>
      </div>
      <span className="m-2 text-2xl">
        {counter} days from today is {date.toDateString()}
      </span>
      <button
        className="w-2/5 m-6 bg-orangeMedium hover:bg-orangeDark text-[#343a40] font-bold px-4 py-2 border-none text-2xl rounded-lg transition-all duration-300"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
