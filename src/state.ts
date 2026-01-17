import { stdin, stdout } from "node:process";
import { createInterface } from "node:readline";
import type { Interface } from "node:readline";
import { getCommands } from "./commands/index.js";
import { PokeAPI } from "./poke-api.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
  pokeAPI: PokeAPI;
  nextLocationsURL: string;
  prevLocationsURL: string;
};

export function initState(cacheInterval: number): State {
  const readline = createInterface({
    input: stdin,
    output: stdout,
    prompt: "pokedex > ",
  });

  return {
    readline,
    commands: getCommands(),
    pokeAPI: new PokeAPI(cacheInterval),
    nextLocationsURL: "",
    prevLocationsURL: "",
  };
}
