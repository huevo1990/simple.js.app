pokemonRepository = (function () {
   let pokemonlist = [
    { name: 'Bulbasaur', height: '7', types: ['Grass', 'Poison']},
    { name: 'Blastoise', height: '6', types: 'water'},
    { name: 'Alakazam', height: '5', types: 'psychic'},
    { name: 'Jynx', height: '4', types: ['psychic', 'Ice']},
    { name: 'Magneton', height: '1', types: ['Electric', 'Steel']}
  ];

  function getAll() {
    return pokemonlist;
  }

  function add(pokemon)
  {pokemonlist.push(pokemon)

  return {
    getAll: getAll,
    add: add
  }
  pokemonlist.forEach(function(name) {
    console.log(pokemon.name + 'is' + pokemon.height + 'height' + pokemon.types + 'type');
  });

  console.log( pokemonRepository.getAll() );
  pokemonRepository.add(item);
})
