/*
*********** FUNCTIONS CALLING OTHER FUNCTIONS ************

Basicamente llamamos a una funcion desde el cuerpo o interior de orientation, este workflow pasa todo el rato en JS el objetivo es el de siempre, no repetirse mucho en el codigo. DRYER PRINCIPLE!!
*/
function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges.`;
  return juice;
}
console.log(fruitProcessor(5, 2));
/*
LECTURE: Functions Calling Other Functions
1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice
*/

function percentageOfWorld(population) {
  return (population / 7900) * 100;
}

function describePopulation(country, population) {
  const percentage = percentageOfWorld(population);
  const description = `${country} has ${population} million people,
    which is about ${percentage} % of the world.`;
  return description;
}
console.log(describePopulation("Spain", 40));
console.log(describePopulation("Portugal", 10));
console.log(describePopulation("France", 60));
