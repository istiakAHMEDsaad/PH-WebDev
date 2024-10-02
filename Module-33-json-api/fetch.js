function dummyData() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
}

function dummyUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function pokeData() {
  fetch('https://pokeapi.co/api/v2/pokemon/mew')
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
}
