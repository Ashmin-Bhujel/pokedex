import type { State } from "../state.js";

export async function commandPokedex(state: State) {
  const pokemons = Object.values(state.caughtPokemon);

  console.log("---------");
  if (pokemons.length === 0) {
    console.log("You haven't caught any pokemon yet");
    console.log("---------");
    return;
  }

  console.log("Your Pokedex:");
  for (const pokemon of pokemons) {
    console.log(`- ${pokemon.name}`);
  }

  console.log("---------");
}
