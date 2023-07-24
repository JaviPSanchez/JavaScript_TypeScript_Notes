import styles from './Counter.module.css';
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
    <div className={styles.counter}>
      <p>Today is {todayDate.toDateString()}</p>
      <div className={styles.counterWrapper}>
        <button
          className={increment <= 1 ? styles.nonClickableButton : ''}
          onClick={() =>
            setIncrement(currentState =>
              currentState <= 0 ? 1 : currentState - 1
            )
          }
        >
          -
        </button>
        <p>Increment: {increment}</p>
        <button onClick={() => setIncrement(currentState => currentState + 1)}>
          +
        </button>
      </div>
      <div className={styles.counterWrapper}>
        <button
          className={counter <= 0 ? styles.nonClickableButton : ''}
          onClick={() => setCounter(counter - increment)}
        >
          -
        </button>
        <p>Count: {counter}</p>
        <button onClick={() => setCounter(counter + increment)}>+</button>
      </div>
      <span className={styles.date}>
        {counter} days from today is {date.toDateString()}
      </span>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
