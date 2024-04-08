import './main.css';

/*
******JAVASCRIPT ENGINE & RUNTIME*****

Primero tendremos el JS Runtime, que es el BROWSER, podemos verlo como un
CONTAINER. El corazon de un RUNTIME, es el ENGINE de JS con su CALL STACK y su HEAP.
Without an ENGINE there is no RUNTIME and there is no JS. Pero para poder usar JS no
solo necesitamos un ENGINE sino que tambien API's (DOM, Timers, Fetch API, etc). API's
son funcionalidades que proveemos al ENGINE pero que no son parte de JS.

No hay que olvidar que JS puede existir fuera de un BROWSER, como es el caso de NODE.JS,
pero al no disponer de un BROWSER no tendremos las API's del BROWSER. En vez de estas
API's tenemos multiples C++ BINDINGS y el llamado THREAD POOL.

JS accede a estas Web APIs a traves de lo que conocemos como THE GLOBAL WINDOW OBJECT.
*/
console.log(window);
console.log(window.screen.width);
console.log(window.screen.height);

console.log(window.Geolocation.prototype);

navigator.geolocation.getCurrentPosition(
  //Success Callback
  res => console.log(res.coords.latitude, res.coords.longitude),
  // Error Callback
  error => console.log(error)
);
/*

1️⃣ JavaScript Engine simplemente es un programa that executes JS code, cada
BROWSER tiene su propio ENGINE the JS, pero el mas conocido es Google V8.
V8 powers Google Chrome but also Node.js

Cualquier JavaScript Engine contains:

  🔵 CALL STACK (where code is executed) 👉 el codigo es ejecutado a traves de un
  EXECUTION CONTEXT. Es single threaded, only handles a single task at a time!
  🔵 HEAP (where objects are stored) 👉  Es un unstructured memory pool que guarda
  todos los OBJECTS que nuestra aplicacion necesita.

Luego Tendremos:

2️⃣ Web APIS 👉 To interact with the features leverage by the Browser, some of this API´s
allows us to initiate async tasks in the background

3️⃣ TASK QUEUE 👉 It is used by callback web APIs to enqueue the callback once the
asynchronous task has completed

4️⃣ MICROTASK QUEUE 👉 Only use by Promise Handlers (.then(), .catch(), .finally()),
async function bodies, queueMicrotask(()=>{}) and the new MutationObserver(()=>{})

5️⃣ Event Loop 👉 Se encarga de ejecutar las tareas en un orden específico.

Queda saber como el codigo es compilado, pudiendo distinguir:

1️⃣ Codigo Compilado = todo nuestro codigo es convertido de una sola vez, y transportado
en un portable file that can be executed on the computer

2️⃣ Codigo Interpretado = basicatelly runs through the source code and executes it line
by line. Al principio JS utilizaba INTERPRETATION, siendo mucho las lento que COMPILATION,
pero hoy tenemos MODERN JS que usa un mix de los dos metodos. Lo que se conoce como
just-in-time compilation (No existe el portable file).
*/
