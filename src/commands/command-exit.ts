import { exit } from "node:process";
import type { State } from "../state.js";

export async function commandExit(state: State) {
  console.log("=========");
  console.log("Closing the Pokedex... Goodbye!");
  console.log("=========");
  state.readline.close();
  exit(0);
}
