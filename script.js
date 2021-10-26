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
    button.classList.add('pokemon-button');
    listpokemon.appendChild(button);
    pokemonlist.appendChild(listpokemon);
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
      var url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        // Now we add the deailts to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
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

    let modalContainer = document.querySelector
    ('#modal-container');
    function showModal(name, height, img) {
      modalContainer.innerHTML = '';
      let modal = document.createElement('div');
      modal.classList.add('modal');

      let closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'Close';
      closeButtonElement.addEventListener('click', hideModal);

      let nameElement = document.createElement('h1');
      nameElement.innerText = name;

      let heightElement = document.createElement('p');
      heightElement.innerText = 'Height: ${height}';

      let imgElement = document.createElement('img');
      imgElement.src = img;

      modal.appendChild(closeButtonElement);
      modal.appendChild(nameElement);
      modal.appendChild(heightElement);
      modal.appendChild(imgElement);
      modalContainer.appendChild(modal);

      modalContainer.classList.add('is-visible');
}

    function hideModal() {
      modalContainer.classList.remove('is-visible');
}


    window.addEventListener('keydown', (e) => {
      let modalContainer = document.querySelector
      ('#modal-container');
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')){
        hideModal();
      }
    });

    modalContainer.addEventListener('click', (e) => {
		let target = e.target;
		if (target === modalContainer) {
			hideModal();
		}
	});


  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadlist: loadlist,
    loadDetails: loadDetails,
    showDetails: showDetails
    };
  })();

  //pokemonRepository.add ({ name: "Pikachu", height: 1.2, types: [ "electric" ] });

    //console.log(pokemonRepository.getAll());
  pokemonRepository.loadlist().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
  });
