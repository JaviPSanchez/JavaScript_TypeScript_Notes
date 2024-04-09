/*
*********** FUNCTIONS CALLING OTHER FUNCTIONS ************

Basicamente llamamos a una funcion desde el cuerpo o interior de otra,
este workflow pasa todo el rato en JS, con el objetivo de no repetirse
mucho. DRY PRINCIPLE!
*/

function cutFruitPieces(fruit: number) {
  return fruit * 4;
}

function fruitProcessor(apples: number, oranges: number) {
  const applePieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(5, 2));
