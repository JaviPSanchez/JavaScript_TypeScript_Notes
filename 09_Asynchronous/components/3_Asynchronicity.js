/*
In order to make this code Asynchronous we have to use an External Asynchronous API!

If we do not run this code inside an External Runtime like the Browser

JS communicate or invoke a command from this API and gets the result back

Examples of external APIs:
- setTimeout & setInterval.
- fetch.
- Web Storage
- Web Sockets
- Reading files on disk.

Returning a Promise doesn’t magically turns your synchronous code into asynchronous one.
Nor does it magically make JavaScript multi-threaded.
*/

console.log('Before async function');
loopMillionTimes().then(() => console.log('Returned Promise'));
console.log('After async function');

async function loopMillionTimes() {
  for (let i = 0; i <= 1000_000; i++) {
    // something simple
  }
  console.log('Finished Looping');
}
