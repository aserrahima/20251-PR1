// PAS 1:
// 1. Creación de la clase Pokemon, que representa a un objeto Pokemon
class Pokemon {
  constructor({ id, name, description, height, weight, baseExperience, types, sprites, stats }) {
    this._id = id; // identificador únic
    this._name = name; // nom del Pokémon
    this._description = description;
    this._height = height; //alçada
    this._weight = weight; //pes
    this._baseExperience = baseExperience; //experiència base
    this._abilities = abilities; // llista d'habilitats que té el Pokémon (bromista, clorofil·la, còlera...)
    this._types = types; //Llista de tipus que té el Pokémon (aigua, foc, planta...)
    this._sprites = sprites; //URL de la imatge oficial (sprites.other.oficial-artwork.front_default).
    this._stats = stats; //Array amb les estadístiques (HP, atac, defensa, velocitat, etc.).
  }

  // ======== Getters ======== //
  get id() { return this._id; }
  get name() { return this._name; }
  get description() { return this._description; }
  get height() { return this._height; }
  get weight() { return this._weight; }
  get baseExperience() { return this._baseExperience; }
  get abilities() { return this._abilities; }
  get types() { return this._types; }
  get sprites() { return this._sprites; }
  get stats() { return this._stats; }

  // ======== Setters ======== //
  set name(newName) { this._name = newName; }
  set description(newDescription) { this._description = newDescription; }
  set height(newHeight) { this._height = newHeight; }
  set weight(newWeight) { this._weight = newWeight; }
  set baseExperience(newExp) { this._baseExperience = newExp; }
  set abilities(newAbilities) { this._abilities = newAbilities; }
  set types(newTypes) { this._types = newTypes; }
  set sprites(newSprites) { this._sprites = newSprites; }
  set stats(newStats) { this._stats = newStats; }
}


//PAS 2:
// 2. Creación de la clase PokemonList
class PokemonList {
  constructor() {
    this._pokemons = []; // Array per anar guardant els Pokemons
  }

  // Añadir un Pokémon a la lista
  addPokemon(pokemon) {
    if (pokemon instanceof Pokemon) {
      this._pokemons.push(pokemon);
    } else {
      console.error("Només es poden afegir objectes de la classe Pokemon.");
    }
  }

  // Eliminar un Pokémon de la lista por ID
  removePokemon(pokemonId) {
    const index = this._pokemons.findIndex(poke => poke.id === pokemonId); // Busca l'índex (és a dir, la posició) del primer element a l'array _pokemons, on la propietat id del Pokémon és estrictament igual (===) a pokemonId. Si el troba, retorna l'índex, sino -1 si no existeix. 
    if (index !== -1) { // Comprova si l'índex trobat és correcte (és a dir, s'ha trobat el Pokemon)
      this._pokemons.splice(index, 1); // Elimina un element a l'array _pokemons a la posició "index" (per tant està modificant l'array original)

      // Mostra un missatge a la pantalla
      console.log(`Pokemon amb ID ${pokemonId} eliminat correctament.`); // Correcte: indicant que s'ha eliminat el Pokemon amb aquell ID
    } else {
      console.log(`No s'ha trobat cap pokemon amb ID ${pokemonId}.`); // Incorrecte: avisa que no s'ha trobat
    }
  }

  // Mostrar la lista de Pokémon (nombre, tipo principal e imagen)
  showList() {
    console.log("Llista de Pokemons:");
    for (let i = 0; i < pokemons.length; i++) { // Es recorren tots els Pokémons de la llista
      let pokemon = this._pokemons[i];
      console.log("Nom:" + pokemon.name + "Tipus:" + pokemon.types[0] + "Imatge:" + pokemon.sprites);
  }
}


  //PAS 3:
  // 3. Funciones flecha

  // Añadir múltiples Pokémon a la vez
  addMultiplePokemons = (...pokemons) => {
      this.addPokemon(pokemon); // es fa servir el mètode ja creat abans
  });
};

  // Obtener Pokémon dentro de un rango de peso
  getPokemonsByWeightRange = (minWeight, maxWeight) => {
    return this._pokemons.filter(pokemon =>
      pokemon.weight >= minWeight && pokemon.weight <= maxWeight
  );
};

  // Ordenar Pokémon por experiencia base
  sortPokemonsByBaseExperience = () => {
    this._pokemons.sort((a, b) => a.baseExperience - b.baseExperience); //ordre de menor a major
    console.log("Pokemons ordenats segons l'experiència base.");
};

//PAS 4:
// 4. Función recursiva para buscar un Pokémon por ID
function findPokemonById(pokemonList, id, index = 0) { 
  
  if (index >= pokemonList._pokemons.length) { // Cas base: si arribem al final i no s'ha trobat
    return null;
  }

  if (pokemonList._pokemons[index].id === id) {   // Si el Pokémon a aquesta posició té l'ID buscat
    return pokemonList._pokemons[index];
  }

  return findPokemonById(pokemonList, id, index + 1); // Crida recursiva avançant a la següent posició
}

//PAS 5:
// 5. Uso de reduce para encontrar el tipo más común
function getMostCommonType(pokemonList) {
  
  const tipusComptats = pokemonList._pokemons.reduce((contador, pokemon) => { // Objecte per comptar quants cops apareix cada tipus
    
    pokemon.types.forEach(type => { // Cada pokemo pot tenir un tipus o més
      if (contador[type]) { // Si ja existeix aquest tipus al comptador se suma
        contador[type] = contador[type] + 1;
      } else { // Si no existeix comença a 1
        contador[type] = 1;
      }
    });

    return contador; // Retornem l'objecte acumulador
  }, {}); // {} per començar buit

  // Cal també buscar quin tipus té el número més alt
  let tipusMesComu = null;
  let numeroMesAlt = 0;
  for (let type in tipusComptats) { // Es recorre cada tipus del comptador
    if (tipusComptats[type] > numeroMesAlt) {
      numeroMesAlt = tipusComptats[type];
      tipusMesComu = type;
    }
  }

  return tipusMesComu; // S'acaba retornant el tipus més repetit
}

console.log("El tipus més comú és:", getMostCommonType(myPokemonList));

//PAS 6:
// 6. Uso de map y filter para obtener Pokémon fuertes por ataque
function getStrongPokemons(pokemons, minAttack) {

}


/* ====================================
   DATOS DE EJEMPLO PARA LA VALIDACIÓN
   ==================================== */

// Creamos algunos Pokémon válidos
const pikachu = new Pokemon({
  id: 25,
  name: "Pikachu",
  description: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
  height: 4,
  weight: 60,
  baseExperience: 112,
  types: ["electric"],
  sprites: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  stats: [
    { name: "hp", value: 35 },
    { name: "attack", value: 55 },
    { name: "defense", value: 40 },
    { name: "speed", value: 90 }
  ]
});

const bulbasaur = new Pokemon({
  id: 1,
  name: "Bulbasaur",
  description: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
  height: 7,
  weight: 69,
  baseExperience: 64,
  types: ["grass", "poison"],
  sprites: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  stats: [
    { name: "hp", value: 45 },
    { name: "attack", value: 49 },
    { name: "defense", value: 49 },
    { name: "speed", value: 45 }
  ]
});

const charmander = new Pokemon({
  id: 4,
  name: "Charmander",
  description: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
  height: 6,
  weight: 85,
  baseExperience: 62,
  types: ["fire"],
  sprites: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  stats: [
    { name: "hp", value: 39 },
    { name: "attack", value: 52 },
    { name: "defense", value: 43 },
    { name: "speed", value: 65 }
  ]
});

/* ====================================
    EJEMPLOS DE USO Y VALIDACIÓN
    ==================================== */


// Uso de getters y setters


// Crear una lista de Pokémons


// Ejemplo 1: añadir un Pokémon


// Ejemplo 2: añadir múltiples Pokémons


// Ejemplo 3: eliminar un Pokémon


// Ejemplo 4: eliminar un Pokémon


// Ejemplo 5: mostrar la lista de Pokémons


// Ejemplo 6: obtener Pokémon por rango de peso


// Ejemplo 7: ordenar Pokémon por experiencia base


// Ejemplo 8: F. Recursiva para buscar un Pokémon por ID


// Ejemplo 9: Tipo más común
