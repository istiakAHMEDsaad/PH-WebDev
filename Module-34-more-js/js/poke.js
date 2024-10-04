async function fetchPokemonData() {
    try {
        // get id
        const getPokemonName = document.getElementById('pokemon-name-input').value.toLowerCase();
        const getPokemonSprite = document.getElementById('pokemon-sprite');

        // fetch url
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${getPokemonName}`);

        // throw error
        if(!response.ok){
            throw new Error('Could not fetch resource');
        }

        // convert to promise
        const data = await response.json();

        // set pokemon sprite from api
        const pokemonSprite = data.sprites.front_default;

        // set image link to image source
        getPokemonSprite.src = pokemonSprite;

        // image change display none to block
        getPokemonSprite.style.display = 'block';
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}