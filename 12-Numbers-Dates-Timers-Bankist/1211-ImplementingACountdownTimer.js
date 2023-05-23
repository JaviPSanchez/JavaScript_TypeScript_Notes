'use strict';

/*
Por razones de seguridad los bancos fuerzan el log out del usuario, nosotros no seremos menos y realizaremos la misma operacion.

Para ello usaremos el SET INTERVAL TIMER.

El TIMER lo implementaremos en la zona de log in, para evitar confusiones debido a la cantidad de codigo, crearemos una nueva funcion para nuestro TIMER
*/
const startLogOutTimer = function () {
  //set time to 5 minutes
  let time = 10;
  //Call the timer every second.
  const timer = setInterval(function () {
    //Queremos tambien ver los mionutos, no solo los segundos
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    //In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;
    //Decrease 1 second every second
    time = time - 1; //time--
    //When we reach 0 seconds stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
  }, 1000);
};

// Nos surgira un problema aqui y es que la funcion es llamada una vez transcurrido un segundo, para evitar esto lo que podemos hacer es separar la funcion exportandola y llamamndola inmediatamente con tick(), veamoslo en el siguiente ejemplo.

const startLogOutTimer = function () {
  //Aqui sacamos la funcion
  const tick = function () {
    //Queremos tambien ver los mionutos, no solo los segundos
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    //In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;
    //Decrease 1 second every second
    /*
    time = time - 1; //time--
    */
    //When we reach 0 seconds stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    //El time-- deberiamos ponerlo aqui, porque si no cuando el contador llega a 1, inmediatamente restamos 1, conviertiendolo en 0, y confirmando el statement en el segundo 1, forzandonos ha salir antes de tiempo, si metemos la linea de codigo despues del CONDITIONAL STATEMENT, si llegara a acero y se saldra.
    time--;
  };
  //set time to 5 minutes
  let time = 10;
  //Call the timer every second.
  //Aqui llamamos inmediatamente a la funcion
  tick();
  const timer = setInterval(tick, 1000);
};

//Cuando cambiamos de user veremos que tendremos dos timers funcionando al mismo tiempo, uno del usuario 1 y otro del usuario 2, por lo que tendremos nada mas hacer LOG IN, comprobar si hay otros timers funcionando, y si es asi, pararlo.

//Timer
if (timer) clearInterval(timer);
timer = startLogOutTimer();

// Habra que crear la variable timer en el GLOBAL SCOPE puesto que la utilizaremos con varias funciones

let currentAccount, timer;
