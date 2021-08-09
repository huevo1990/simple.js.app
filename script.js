let pokemonlist = [
  { name: 'Bulbasaur', height: '7', types: ['Grass', 'Poison']},
  { name: 'Blastoise', height: '6', types: 'water'},
  { name: 'Alakazam', height: '5', types: 'psychic'},
  { name: 'Jynx', height: '4', types: ['psychic', 'Ice']},
  { name: 'Magneton', height: '1', types: ['Electric', 'Steel']}

];

for (let i=0; i < pokemonlist.length; i++) {
  if (pokemonlist[i].height > 6) {
     document.write(pokemonlist[i].name + " is one of the tall Pokemon.");
     document.write("<br />")
  } else if (pokemonlist[i].height < 3) {
     document.write(pokemonlist[i].name + " is one of the short Pokemon.");
     document.write("br />")
  } else {
     document.write(pokemonlist[i].name + " is one of the Pokemon with average height.");
     document.write("br />")
  }
}

for (let i=0; i < pokemonlist.length; i++) {
  if (pokemonlist[i].height < 3) {
      document.write(`<p> ${pokemonlist[i].name} (height: ${pokemonlist[i].height}") - wow, that's the shortest Pokemon on the list! </p>`);
  } else {
      document.write(`<p> ${pokemonlist[i].name} (height: ${pokemonlist[i].height}")</p>`);
  }
}
