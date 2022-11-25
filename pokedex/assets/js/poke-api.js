

const pokeapi = {};

function convertPokeapiDetailtoPokemon(pokedetail) {
     const pokemon = new Pokemon()

     pokemon.num = pokedetail.id
     pokemon.name = pokedetail.name

     const types = pokedetail.types.map((typeSlot) => typeSlot.type.name)
     const [type] = types

     pokemon.types = types
     pokemon.type = type

     pokemon.photo = pokedetail.sprites.other.dream_world.front_default

     return pokemon
}

pokeapi.getPokemonsDetails = (pokenon) => {
     return fetch(pokenon.url)
          .then(response => response.json())
          .then(convertPokeapiDetailtoPokemon)
}

pokeapi.getPokemons = (offset = 0, limit = 10) => {
     const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

     return fetch(url).then(response => response.json())
          .then(jsonBody => jsonBody.results)
          .then(pokemons => pokemons.map(pokeapi.getPokemonsDetails))
          .then(detailRequests => Promise.all(detailRequests))
          .then(pokemondetails => pokemondetails)
          .catch(error => { console.error(error) })
}