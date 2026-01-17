import type { ShallowLocations } from "../poke-api.js";
import type { State } from "../state.js";

export async function commandMapForward(state: State) {
  const locations = await state.pokeAPI.fetchLocations(state.nextLocationsURL);

  printLocations(state, locations);
}

export async function commandMapBack(state: State) {
  if (!state.prevLocationsURL) {
    throw new Error("you're on the first page");
  }

  const locations = await state.pokeAPI.fetchLocations(state.prevLocationsURL);

  printLocations(state, locations);
}

function printLocations(state: State, locations: ShallowLocations) {
  state.nextLocationsURL = locations.next;
  state.prevLocationsURL = locations.previous;

  console.log("=========");
  for (const location of locations.results) {
    console.log(location.name);
  }
  console.log("=========");
}
