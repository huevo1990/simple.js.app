let pokemonRepository = (function () {
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

  function add(pokemon){
    pokemonlist.push(pokemon)
  }

  function showDetails(pokemon){
    console.log(pokemon);
  }


  function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText= "pokemon.name";
    button.classList.add('button-class');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);

    button.addEventListener('Click', function(){
      showDetails(pokemon);
    });
  }

  return {
    getAll: getAll,
    add: add,
    addlistItem: addListItem
  };
  }) ();

  pokemonRepository.add ({ name: "Pikachu", height: 1.2, types: [ "electric" ] });

    console.log(pokemonRepository.getAll());

  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);

  });
