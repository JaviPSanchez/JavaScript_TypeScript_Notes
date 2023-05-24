import { useState, useEffect } from 'react';

/*
In simple terms, a JavaScript generator function is a special type of function that can be paused and
resumed during its execution. It allows you to generate a sequence of values over time, rather than
computing them all at once. It provides a way to lazily generate values on demand,
which can be useful in scenarios where you want to handle large or infinite sequences of data.


Here are the main principles of JavaScript generator functions:

1️⃣ Function Execution Control: Unlike regular functions that execute and return a value,
generator functions can be paused and resumed during their execution.
This means you can control the flow of execution and retrieve values from the function incrementally.

2️⃣ Generator Function Syntax: A generator function is defined using the function* syntax.
Inside the function body, you use the yield keyword to specify the values to be generated.
Each time yield is encountered, the function pauses and returns the yielded value.

3️⃣ Iteration with next(): Generator functions can be iterated using the next() method.
When you call next() on a generator function, it resumes the function execution until the
next yield statement, and returns an object with two properties: value (the yielded value) and done (a boolean indicating
  if the generator function has completed).

Now, let's illustrate these principles with an example:
*/

function* trafficLightStateMachine() {
  let state = 'red';

  while (true) {
    if (state === 'red') {
      yield 'red';
      state = 'green';
    } else if (state === 'green') {
      yield 'green';
      state = 'yellow';
    } else if (state === 'yellow') {
      yield 'yellow';
      state = 'red';
    }
  }
}

function TrafficLight() {
  const [lightColor, setLightColor] = useState('red');
  /*
In the example, we define a trafficLightStateMachine() generator function that yields three colors: red, green, and yellow.
We create an instance of the generator by calling trafficLightStateMachine(), and then we use the next() method to iterate through the generator.
Each time we call next(), the generator resumes execution until the next yield statement, and returns an object with the current value and completion status.
After the third call to next(), the generator completes (done is set to true), and subsequent calls will return { value: undefined, done: true }.


  */
  const trafficLight = trafficLightStateMachine();
  console.log(lightColor);

  useEffect(() => {
    const interval = setInterval(() => {
      setLightColor(trafficLight.next().value);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{ backgroundColor: lightColor, color: 'black', padding: '2rem' }}
    >
      Now Displaying: {lightColor.toUpperCase()}
    </div>
  );
}

/*
Generator functions provide a powerful mechanism for generating values on demand and controlling the flow of execution.
They are particularly useful when dealing with large datasets, asynchronous operations,
or scenarios where you want to lazily compute values without generating them all at once.
*/

export default TrafficLight;
