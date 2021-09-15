let pokemonRepository = (function () {
   let pokemonlist = [];
   let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=30';

  ];

  function getAll() {
    return pokemonlist;
  }

  function add(pokemon) {
    if (
      typeof pokemon ==="object" &&
      "name" in pokemon &&
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
    pokemonlist.push(pokemon)
  }

  function showDetails(pokemon){
    console.log(pokemon);
  }


  function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = "pokemon.name";
    button.classList.add('button-class');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function(){
      showDetails(pokemon);
    });
  }

    function loadlist() {
      return fetch(apiUrl).then(function (respone) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
          console.log(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      }
    })
    }

    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url.then(function (response) {
        return response.json();
      }).then(function (details) {
        // Now we add the deailts to the item
        item.imageUrl = details.sprites.front_default;
        item.height=details.height;
        item.types = details.types;
      }).catch(function (e) {
        console.error(e);
      });
    }

    function showDetails(pokemon) {
      loadDetails(pokemon).then(function () {
      console.log(pokemon);
      });
    }

  return {
    getAll: getAll,
    add: add,
    addlistItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
    };
  }) ();

  //pokemonRepository.add ({ name: "Pikachu", height: 1.2, types: [ "electric" ] });

    //console.log(pokemonRepository.getAll());
  pokemonRepository.loadlist().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
  });
