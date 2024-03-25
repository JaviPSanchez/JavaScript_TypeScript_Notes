const button = document.getElementById("btn");
const color = document.querySelector(".color");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
/*
A hexadecimal color is specified with: #RRGGBB.

RR (red), GG (green) and BB (blue) are hexadecimal integers between 00 and FF specifying the intensity of the color.

For example, #0000FF is displayed as blue, because the blue component is set to its highest value (FF) and the others are set to 00.
*/

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  console.log(hexColor);
  document.body.style.background = hexColor;
});
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
