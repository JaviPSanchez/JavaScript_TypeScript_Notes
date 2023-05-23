'use strict';

/*
*****************CODING CHALLENGE #1**************

Let's build a simple poll app!

A poll has a question, an ARRAY of options from which people can choose, and an ARRAY with the number of replies for each option. This data is stored in the starter 'poll' object below.

Your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:

---1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:

What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
*/
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Ruby', '3: C++'],
  //This generates [0,0,0,0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);
    //Register answer
    /*
---1.2. Based on the input number, update the 'answers' ARRAY property. For
example, if the option is 3, increase the value at position 3 of the ARRAY by 1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
    */
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    console.log(this.answers); // Si elijo Ruby : [0, 0, 1, 0]

    /*
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
    */
    this.displayResults();
    this.displayResults('string');
  },
  /*
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string' or 'ARRAY'. If type is 'ARRAY', simply display the results ARRAY as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
  */
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
// poll.registerNewAnswer();

/*
2. Call this method whenever the user clicks the "Answer poll" button.
Aqui gracias al METHOD BIND podemos apuntar al OBJECT poll.
*/
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
/*
5. Bonus: Use the 'displayResults' method to display the 2 ARRAYs in the test data. Use both the 'ARRAY' and the 'string' option. Do not put the ARRAYs in the poll object! So what should the this keyword look like in this situation?
Llamamos al CALL METHOD porque necesitamos un nuevo this keyword
*/
poll.displayResults.call({ answers: [5, 2, 3] }); //[5, 2, 3]
poll.displayResults.call({ answers: [5, 2, 3] }, 'string'); //Poll results are 5, 2, 3
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }); //[1, 5, 3, 9, 6, 1]
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string'); //Poll results are 1, 5, 3, 9, 6, 1
/*
Test data for bonus:

§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]

Hints: Use many of the tools you learned about in this and the last section 😉

*/
