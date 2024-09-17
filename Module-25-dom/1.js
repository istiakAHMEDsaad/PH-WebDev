// console.log(document)
const tempName = {
  name: "Saad",
  id: "22234103008",
  study: function (timeSt) {
    console.log(`I have been stuyding last ${timeSt}hours`);
  },
};

// Multiple class selector
const colorMe = document.getElementsByClassName("color-me");
for (const colors of colorMe) {
  console.log(colors.innerText);
}

// Tag array but not array
const liDekha = document.getElementsByTagName("li");
for (const lis of liDekha) {
  console.log(lis.innerText);
}

// Heading 2 edit
const headerDekha = document.getElementsByTagName("h2");
for (const heads of headerDekha) {
  console.log(heads.innerText);
}

// ID edit
const changeMe = document.getElementById("change-me");
changeMe.innerText = "Noo! JS bastard change my text!";

// query selector -----------Sub Class Select kora jai------------
const amraKori = document.querySelectorAll(".amra-kori span");
for (const amras of amraKori) {
  console.log(amras);
}
