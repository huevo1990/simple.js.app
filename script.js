let pokemonRepository = (function () {
  let pokemonlist = [];
   let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
   //function that returns all pokemon objects//
  function getAll() {
    return pokemonlist;
  }

  //function that adds pokemon objects to the pokemonList
  function add(pokemon) {
    if (typeof pokemon ==='object' &&"name" in pokemon) {
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


    function loadDetails(pokemon) {
      let url = pokemon.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
          pokemon.imageUrl = details.sprites.front_default;
          pokemon.height = details.height;
          pokemon.types = details.types;
      }).catch(function (e) {
          console.error(e);
      });
    }

    function showDetails(pokemon) {
          loadDetails(pokemon).then(function () {
            showModal(pokemon);
      });
    }

    //Modal//

    let modalContainer = document.querySelector('#pokemonModalContainer');

  	function showModal(pokemon) {
      let modalTitle = document.querySelector('.modal-title');
      let modalBody = document.querySelector('.modal-body');

      modalTitle.innerText = '';
      modalBody.innerText = '';

  		//create element for name in modal
      let nameElement = document.createElement('h1');
      nameElement.innerText = pokemon.name;
      nameElement.classList.add('name-element');

  		//create img in modal content
      let imageElement = document.createElement('img');
      imageElement.src = pokemon.imageUrl;
      imageElement.classList.add('modal-img');

  		//create element for height in modal content
      let heightElement = document.createElement('p');
      heightElement.innerText = 'Height: ' + pokemon.height

  		//create element for pokemon in modal content
      let pokemonTypes = [];

        Object.keys(pokemon.types).forEach(key => {
          pokemonTypes.push(' ' + pokemon.types[key].type.name);
        });

      let typesElement = document.createElement('p');
      typesElement.innerText = 'Type: ' + pokemonTypes;
      typesElement.classList.add('types-element');


      modalTitle.append(nameElement);
      modalBody.append(imageElement);
      modalBody.append(heightElement);
      modalBody.append(typesElement);

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



    //console.log(pokemonRepository.getAll());
  pokemonRepository.loadlist().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
  });
