import './main.css';

/**
 * Error handling with try-catch works with ASYNC/Await.
 */

const btn: Element | null = document.querySelector('btn-country')!;

const whereAmI = async function () {
  try {
    console.log('Click!');
  } catch (err) {
    console.error(`${err}😫`);
  }
};
btn?.addEventListener('click', whereAmI)!;

/**
 *
 * When we use the finally keyword in conjuction with try-catch
 */

function testReturn() {
  try {
    console.log('Try executed');
    return 10;
  } finally {
    console.log('Finally executed');
    return 1;
  }
}

console.log(testReturn());

function testReturn2() {
  try {
    return 10;
    throw 'error'; // Not executed, control goes to finally
  } catch {
    console.log('catch executed');
    return 1;
  } finally {
    console.log('Finally executed');
    return 1000; // If we remove this one we will obtain 10
  }
}

console.log(testReturn2());
