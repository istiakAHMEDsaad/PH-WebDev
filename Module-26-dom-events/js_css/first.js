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

// Common use case

const pressButton = document.getElementById("press-button");
function changeToYou() {
  const yourName = prompt("enter your name");
  if (yourName.toLowerCase() === "saad") {
    pressButton.innerText = `Hi ${yourName} 🙋‍♂️`;
  } else if (yourName.toLowerCase() === "tajrin") {
    pressButton.innerText = `Hi ${yourName} 🙋‍♀️`;
  } else {
    pressButton.innerText = `Hi ${yourName} 😀`;
  }
}

document.getElementById("button-image").addEventListener("click", function () {
  document.getElementById("show-image").innerHTML =
    '<img style="width: 300px; object-fit: cover; object-position: center;" src="https://instagram.fspd5-1.fna.fbcdn.net/v/t39.30808-6/406482633_916139479870233_5810829202165924109_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4yMDQ4eDIwNDguc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fspd5-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=Mug2-m43ZvUQ7kNvgHksgvk&edm=ANTKIIoAAAAA&ccb=7-5&oh=00_AYB93VvgLQDo7rJhQclKNuBjWT5dodude33NoRoOEQv_Qw&oe=66F0A11E&_nc_sid=d885a2" alt="Online Random Picture">';
});

// take input from input
document.getElementById("input-Take").addEventListener("click", function () {
  const inputDhoro = document.getElementById('input-input').value;
  document.getElementById('input-text').innerText = `${inputDhoro} 😁`;
  inputDhoro.value = '';
});
