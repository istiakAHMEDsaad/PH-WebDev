// -----------------------------Change Style with js-----------------------------
// document.getElementsByClassName('heading1');
const maTitle = document.getElementById("heading1");
maTitle.setAttribute("title", "this is me bal");

maTitle.style.backgroundColor = "aqua";
maTitle.style.color = "tomato";
maTitle.style.textAlign = "center";

const changeMe = document.getElementById("cng-maro");

// -----------------------------Show class-----------------------------
console.log(changeMe.getAttribute("class"));
console.log(changeMe.classList);
// changeMe.getAttribute("id");
// changeMe.getAttribute("class");

// -----------------------------Remove class-----------------------------
changeMe.classList.remove("test3");

const mainContainer = document.getElementsByClassName("main-container");
console.log(mainContainer[0].innerHTML);
console.log(mainContainer[0].innerText);
mainContainer[0].innerHTML = "<h2>This h2 created by js</h2>";
mainContainer[0].style.backgroundColor = "grey";

// Section box
const sections = document.querySelectorAll("section");
for (const section of sections) {
  section.style.border = "2px solid tomato";
  section.style.padding = "10px 20px";
  section.style.fontSize = "1.5rem";
  section.style.margin = "1.5rem";
  section.style.borderRadius = "10px";
  section.style.background = "lightgrey";
  section.style.color = "red";
}
