const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadmore');
const pokemonTypes = document.getElementById('types')

const maxRecord = 600;
const limit = 10;
let offset = 0;



function convertPokemonToHtml(pokemon) {
 
    return `
        <a href="statsPage.html?id=${pokemon.number}">
            <li class="pokemon ${pokemon.type}">
                <spam class="number">#${pokemon.number}</spam>
                <img src="${pokemon.photo}" alt="${pokemon.name}" class="img-pokemon">
                <spam class="name">${pokemon.name}</spam>
            </li>
        </a>
    `   
}

function loadPokemonItens (offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToHtml).join('')
        pokemonList.innerHTML += newHtml
    })   
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordNextPage = offset + limit

    if (qtdRecordNextPage >= maxRecord) {
        const newLimit = maxRecord - offset
        loadPokemonItens(offset, newLimit) 
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
    
})

function redirecionar() {
    let modal = document.getElementById('dv-modal')

    if (typeof modal === 'undefined' || modal === null){
        return;
    }
    else{
        modal.style.display = 'block';
    }

    document.body.style.overflow = 'hiden'
    
}
