import { stdin, stdout } from "node:process";
import { createInterface, type Interface } from "node:readline";
import { getCommands } from "./commands/index.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
};

export function initState(): State {
  const readline = createInterface({
    input: stdin,
    output: stdout,
    prompt: "pokedex > ",
  });

  return {
    readline,
    commands: getCommands(),
  };
}
