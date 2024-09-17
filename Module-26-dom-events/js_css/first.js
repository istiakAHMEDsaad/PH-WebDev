const bulb = document.getElementById("bulb");
bulb.style.width = "100px";

// On click
const makeBlue = document.getElementById("blue-me");
function makeMeBlue() {
  document.body.style.background = "blue";
}
makeBlue.onclick = makeMeBlue;

const makeRed = document.getElementById("red-me");
function makeMeRed() {
  document.body.style.background = "red";
}
makeRed.onclick = makeMeRed;

const makeYellow = document.getElementById("yellow-me");
makeYellow.onclick = function makeMeYellow() {
  document.body.style.background = "yellow";
};

// EventListener
const makeGreen = document.getElementById("green-me");
function makeMeGreen() {
  document.body.style.background = "green";
}
makeGreen.addEventListener("click", makeMeGreen);

const makePink = document.getElementById("pink-me");
makePink.addEventListener("click", function makeMeGreen() {
  document.body.style.background = "pink";
});

document.getElementById("orange-me").addEventListener("click", function () {
  document.body.style.background = "orange";
});

document
  .getElementById("black-me")
  .addEventListener("click", () => (document.body.style.background = "black"));
