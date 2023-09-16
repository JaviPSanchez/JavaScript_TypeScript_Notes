import styles from '@styles';
import { useState } from 'react';

const CounterRange = () => {
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
      <p className="flex justify-center items-center m-2 text-3xl font-bold">
        Today is {todayDate.toDateString()}
      </p>
      <div className="flex flex-col items-center m-4">
        <input
          type="range"
          min="0"
          max="100"
          value={increment}
          onChange={e => setIncrement(+e.target.value)}
        />
        <p className="m-4 text-3xl font-bold">Increment: {increment}</p>
      </div>
      <div className="w-full flex flex-row justify-between items-center m-2">
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
        <input
          className="w-3/5 border-solid border-[0.5px] border-grey4 rounded-xl h-[40px] p-4 text-2xl focus:outline-none focus:border-sky-500 focus:ring-sky-500"
          type="text"
          value={counter}
          onChange={e => setCounter(+e.target.value)}
        />
        <button
          className="w-1/5 m-6 bg-orangeMedium hover:bg-orangeDark font-bold px-4 py-2 text-2xl rounded-lg transition-all duration-300"
          onClick={() => setCounter(counter + increment)}
        >
          +
        </button>
      </div>
      <span className="text-2xl font-bold m-4">
        {counter} days from today is {date.toDateString()}
      </span>
      {increment !== 1 || counter !== 0 ? (
        <button
          className=" m-6 bg-orangeMedium hover:bg-orangeDark font-bold px-4 py-2 text-2xl rounded-lg transition-all duration-300"
          onClick={handleReset}
        >
          Reset
        </button>
      ) : null}
    </div>
  );
};

export default CounterRange;
