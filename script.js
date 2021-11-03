let pokemonRepository = (function () {
  let pokemonlist = [];
   let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

   //function that returns all pokemon objects
  function getAll() {
    return pokemonlist;
  }

  //function that adds pokemon objects to the pokemonList
  function add(pokemon) {
    if (typeof pokemon ==="object" &&"name" in pokemon) {
      pokemonlist.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
    pokemonlist.push(pokemon)
  }

  //function that creates the pokemon list on the webpage
  function addListItem(pokemon){
    let pokemonlist = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('btn', 'btn-warning','btn-block', 'pokemon-button', 'border', 'border-secondary');
    listpokemon.appendChild(button);
    pokemonlist.appendChild(listpokemon);
    button.setAttribute('data-toggle', 'modal')
    button.setAttribute('data-target', '#pokemonModalContainer')
    button.addEventListener('click', function(){
      showDetails(pokemon);
    });
  }

  //function that loads the API
    function loadlist() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
    })
  }


    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        // Now we add the details to the item
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.types = details.types;
      }).catch(function (e) {
        console.error(e);
      });
    }

    function showDetails(pokemon) {
      loadDetails(pokemon).then(function () {
        showModal(pokemon.name, pokemon.height, pokemon.imageUrl);
      });
    }

    //Modal//

    let modalContainer = document.querySelector('#pokemonModalContainer');

    function showModal(pokemon) {
      let modalBody = $("modal-body");
      let modalTitle = $(".modal-title");
      let modalHeader = $(".modal-header");

      modalTitle.empty();
      modalBody.empty();



      let nameElement = $("<h1>" + pokemon.name + "</h1>");
      let heightElement = $("<p>" + "height : " + pokemon.height + "</p");
      let imgElement = $('<img class="modal-img" style="width:50%">');
      let typesElement = $("<p>" + "types : " + item.types + "</p>");



      modalTitle.append(nameElement);
      modalBody.append(imageElement);
      modalBody.append(heightElement);
      modalBody.appen(typesElement);



      modalContainer.classList.add('is-visible');
}

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadlist: loadlist,
    loadDetails: loadDetails,
    showDetails: showDetails,
    };
  })();

  //pokemonRepository.add ({ name: "Pikachu", height: 1.2, types: [ "electric" ] });

    //console.log(pokemonRepository.getAll());
  pokemonRepository.loadlist().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
  });
