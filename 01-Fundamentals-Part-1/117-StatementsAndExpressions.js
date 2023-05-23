/*
 *********************STATEMENTS VS EXPRESSIONS*******************
 

 LECTURE : Statements vs expressions: Una EXPRESION es todo aquello que tiene un valor por si mismo, ya sea un numero,
una string, una booleana o una variable, serian como las palabras que forman una frase, como por ejemplo:
*/
3 + 4;
1991;
true || (false && true);
const me = "Javi";
// sin embargo luego tenemos los STATEMENTS, que seria como la frase entera que ejecuta acciones, como declarar una variable, un switch, etc pero no produce un valor como tal, en el siguiente ejemplo podemos ver como dentro de un STATEMENT podemos tener una EXPRESION (const str = "Hola Javi")
if (25 > 62) {
  const str = "Hola Javi";
}
