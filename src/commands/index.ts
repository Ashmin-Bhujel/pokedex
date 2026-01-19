import type { CLICommand } from "../state.js";
import { commandCatch } from "./command-catch.js";
import { commandExit } from "./command-exit.js";
import { commandExplore } from "./command-explore.js";
import { commandHelp } from "./command-help.js";
import { commandInspect } from "./command-inspect.js";
import { commandMapBack, commandMapForward } from "./command-map.js";
import { commandPokedex } from "./command-pokedex.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    catch: {
      name: "catch <pokemon_name>",
      description: "Attempt to catch a pokemon",
      callback: commandCatch,
    },
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
    explore: {
      name: "explore <location_name>",
      description: "Explore a location",
      callback: commandExplore,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    inspect: {
      name: "inspect <pokemon_name>",
      description: "View details about a caught pokemon",
      callback: commandInspect,
    },
    map: {
      name: "map",
      description: "Get the next page of locations",
      callback: commandMapForward,
    },
    mapb: {
      name: "mapb",
      description: "Get the previous page of locations",
      callback: commandMapBack,
    },
    pokedex: {
      name: "pokedex",
      description: "See all the pokemon you've caught",
      callback: commandPokedex,
    },
  };
}
