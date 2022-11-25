const pokemonName = document.getElementById('header');
const pokemonImage = document.getElementById('pokemonImage');
const pokemonTypesDetails = document.getElementById('tipo');
const pokemonInfo = document.querySelector('#basicInfo');
const pokemonStats = document.querySelector('#statsNumber');


function convertPokemonNameToHtml(pokemon) {
  return `<h1 class="nomePokemon ${pokemon.name}">
            ${pokemon.name}
        </h1>
        <h1 class="numeroPokemon ${pokemon.number}">
            #${pokemon.number}
        </h1>
        `
}

function convertPokemonImageToHtml(pokemon) {
  return `<img src="${pokemon.photo}" alt="${pokemon.name}">`
} 

function convertPokemonInfoToHtml(pokemon) {
  return `<li class="info">
          <div class="elements">
              <img src="_assets/_img/weight.svg" alt="peso" clas="icons">
              <h4>${pokemon.peso} Kg</h4>
          </div>
          peso
        </li>
        <li class="info">
          <div class="elements">
              <img src="_assets/_img/height.svg" alt="altura" clas="icons">
              <h4>${pokemon.altura} m</h4>
          </div>
          altura
        </li>
        <li class="info">
          <div class="elements">
              <h4>
                  ${pokemon.movimento}
              </h4>
          </div>
          
          movimentos
        </li>
`
}

function convertPokemonTypesToHtml(pokemon) {
    let html = ""
    for (poke of pokemon.types){
      html += `
      <li class="type ${poke}">
       ${poke}
      </li>
      `  
    }
    return html
}

function loadPokemonItens() {
  pokeApi.getPokemon().then((pokemons = {}) => {
    const newHtmlName = convertPokemonNameToHtml(pokemons);
    const newHtmlImage = convertPokemonImageToHtml(pokemons);
    const newHtmlInfo = convertPokemonInfoToHtml(pokemons)
    const newHtml = convertPokemonTypesToHtml(pokemons);
    
    pokemonName.innerHTML += newHtmlName;
    pokemonImage.innerHTML += newHtmlImage;
    pokemonInfo.innerHTML += newHtmlInfo
    pokemonTypesDetails.innerHTML += newHtml;
  });
}

loadPokemonItens();

function back() {
  window.history.back()
}