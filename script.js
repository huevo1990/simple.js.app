let pokemonlist = [
  { name: 'Bulbasaur', height: '7', types: ['Grass', 'Poison']}
  { name: 'Blastoise', height: '6', types: 'water'}
  { name: 'Alakazam', height: '5', types: 'psychic'}
  { name: 'Jynx', height: '4', types: ['psychic', 'Ice']}
  { name: 'Magneton', height: '1', types: ['Electric', 'Steel']}

];

for (let i=0; i < pokemon.length; i++) {
  if (pokemon[i].height > 6) {
     console.log(pokemon[i].name + " is one of the tall Pokemon.");
  } else if (pokemon[i].height < 3) {
     console.log(pokemon[i].name + " is one of the short Pokemon.");
  } else {
     console.log(pokemon[i].name + " is one of the Pokemon with average height.");
  }
}

for (let i=0; i < pokemon.length; i++) {
  if (pokemon[i].height < 3) {
      document.write(`<p> ${pokemon[i].name} (height: ${pokemon[i].height}") - I am the shortest Pokemon on the list! </p>`);
  } else {
      document.write(`<p> ${pokemon[i].name} (height: ${pokemon[i].height}")</p>`);
  }
}
