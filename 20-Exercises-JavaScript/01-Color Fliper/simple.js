const button = document.getElementById("btn");
const color = document.querySelector(".color");

const arrayColors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#000000",
  "#ffffff",
  "#0000ff",
  "#ffff00",
  "#00ffff",
  "#ff00ff",
];

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = arrayColors[randomNumber];
  color.textContent = arrayColors[randomNumber];
});
function getRandomNumber() {
  return Math.floor(Math.random() * arrayColors.length);
}
