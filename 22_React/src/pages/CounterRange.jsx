import styles from './CounterRange.module.css';
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
    <div className={styles.container}>
      <p>Today is {todayDate.toDateString()}</p>
      <div className={styles.counterWrapper}>
        <input
          type="range"
          min="0"
          max="100"
          value={increment}
          onChange={e => setIncrement(+e.target.value)}
        />
        <p>Increment: {increment}</p>
      </div>
      <div className={styles.counterWrapper}>
        <button
          className={counter <= 0 ? styles.nonClickableButton : ''}
          onClick={() => setCounter(counter - increment)}
        >
          -
        </button>
        <input
          type="text"
          value={counter}
          onChange={e => setCounter(+e.target.value)}
        />
        <button onClick={() => setCounter(counter + increment)}>+</button>
      </div>
      <span className={styles.date}>
        {counter} days from today is {date.toDateString()}
      </span>
      {increment !== 1 || counter !== 0 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </div>
  );
};

export default CounterRange;
