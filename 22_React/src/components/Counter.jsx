import { useState } from 'react';

export const Counter = () => {
  const [increment, setIncrement] = useState(5);
  const [counter, setCounter] = useState(0);
  const [date, setDate] = useState(new Date());
  console.log(date);
  console.log(counter);

  const decreaseDate = () => {
    const decreasedDate = new Date(date);
    decreasedDate.setDate(decreasedDate.getDate() + counter);
    setDate(decreasedDate);
  };
  const incrementDate = () => {
    const incrementedDate = new Date(date);
    console.log(incrementedDate);
    incrementedDate.setDate(incrementedDate.getDate() + counter);
    console.log(incrementedDate);
    setDate(incrementedDate);
  };

  function decreaseCounter() {
    setCounter(counter - increment);
    decreaseDate();
  }

  function increaseCounter() {
    setCounter(counter + increment);
    incrementDate();
  }

  return (
    <div className="counter">
      <div className="counter-wrapper">
        <button onClick={() => setIncrement(currentState => currentState - 5)}>
          -
        </button>
        <p>Increment: {increment}</p>
        <button onClick={() => setIncrement(currentState => currentState + 5)}>
          +
        </button>
      </div>
      <div className="counter-wrapper">
        <button onClick={decreaseCounter}>-</button>
        <p>Count: {counter}</p>
        <button onClick={increaseCounter}>+</button>
      </div>
      <span className="date">
        {counter} days from today is {date.toDateString()}
      </span>
    </div>
  );
};
