const pokeApi = {}

function convertPokeApiDetailToPokemon (pokeDetail) {
    const pokemon = new Pokemon() 
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name
    
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
     
    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    pokemon.exp = pokeDetail.base_experience;
    pokemon.altura = pokeDetail.height;
    pokemon.peso = pokeDetail.weight;
    pokemon.habilidades = pokeDetail.abilities
    pokemon.altura = pokeDetail.height
    pokemon.peso = pokeDetail.weight

    
    pokemon.movimento = pokeDetail.abilities.map((movesSlot) => movesSlot.ability.name)

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 21) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
    
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) 
        .then((detailRequest) => Promise.all(detailRequest))
        .then((pokemonDetails) => pokemonDetails)
}

pokeApi.getPokemon = () => {
    const pokeId = new URLSearchParams(window.location.search).get('id');
    const urlInfo = `https://pokeapi.co/api/v2/pokemon/${pokeId}`;

    return fetch(urlInfo)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}
     
