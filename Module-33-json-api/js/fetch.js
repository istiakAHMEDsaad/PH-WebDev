function dummyData() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
}

function dummyUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => showUserData(json));
}
function showUserData(json) {
  for (const user of json) {
    console.log(user.username);
  }
}

/* function pokeData() {
  fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then((response) => response.json())
    .then((json) => showPokemonData(json))
    .catch((error) => console.log(error));
} */

document
  .getElementById('pokemon-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const inputValue = document.getElementById('pokemonInput').value;

    fetch('https://pokeapi.co/api/v2/pokemon/'+inputValue)
      .then((response) => response.json())
      .then((json) => showPokemonData(json))
      .catch((error) => console.log(error));

      const showName = function showPokemonData(json){
        console.log(json.name);
      }
    const createPara = document.createElement('p');
    createPara.innerText = `Pokemon name ${showName(json)}`;
    document.getElementById('showPoke').appendChild(createPara);
  });
