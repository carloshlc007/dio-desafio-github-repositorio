

function convertPokemontoLi(pokemon){
     return `<li class="pokemon ${pokemon.type}">
     <span class="number">#${pokemon.num}</span>
     <span class="name">${pokemon.name}</span>
     <div class="detail">
          <ol class="types">
               ${pokemon.types.map(type => `<li class="type ${type}">${type}</li>`).join('')}
          </ol>
          <img src="${pokemon.photo}"
               alt="${pokemon.name}">
     </div>
</li>`
}

const pokemonList = document.getElementById('pokemonList')

pokeapi.getPokemons().then((pokemons = []) => { 
     pokemonList.innerHTML += pokemons.map(convertPokemontoLi).join('')
})
.catch(error => {console.error(error)})