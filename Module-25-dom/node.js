const fruits = document.getElementsByClassName("fruit-section");
console.log(fruits[0].childNodes[3]);
// set image
fruits[0].childNodes[3].style.width =
  "400px";

for (const fruit of fruits) {
  fruit.childNodes[3].style.width = "400px";
  fruit.style.border = "2px solid black";
}
console.log(fruits[0].firstChild);

const headerSection = document.getElementsByClassName("header-section");
const li = document.createElement("li");
li.innerText = "JavaScript";
console.log(headerSection[0].childNodes[1].childNodes[1].appendChild(li));

// List Me
const myList = document.getElementById("my-list");
const myLi1 = document.createElement("li");
myLi1.innerText = "Hi";
const myLi2 = document.createElement("li");
myLi2.innerText = "Hello";
myList.appendChild(myLi1);
myList.appendChild(myLi2);

// Where to add
const myHeadList = document.getElementById("header-section");

// What to add
const mySection = document.createElement("section");
myHeadList.appendChild(mySection);

const myH2 = document.createElement("h2");
// h2
myH2.innerText = "Hola munda";
mySection.appendChild(myH2);

// ul
const myUl = document.createElement("ul");
mySection.appendChild(myUl);

// li1
const myLi3 = document.createElement("li");
myLi3.innerText = "createElementsByTag";
myUl.appendChild(myLi3);
// li2
const myLi4 = document.createElement("li");
myLi4.innerText = "createElementById";
myUl.appendChild(myLi4);
// li3
const myLi5 = document.createElement("li");
myLi5.innerText = "createElementsByClassName";
myUl.appendChild(myLi5);

// Raw html in javascript
const dressSection = document.createElement('section');
dressSection.innerHTML = `
    <h2>
        This is Amanat Shah Lungi by (JavaScript)
    </h2>
    <ul>
        <li>Pore moja</li>
        <li>Onek patla</li>
        <li>Onek norom</li>
        <li>Batash dhuke</li>
    </ul>
`
myHeadList.appendChild(dressSection);