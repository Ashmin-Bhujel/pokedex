import type { State } from "./state.js";

export async function startREPL(state: State) {
  state.readline.prompt();

  state.readline.on("line", async (userInput) => {
    const words = cleanInput(userInput);
    const args = words.slice(1);

    // Return if there is no command
    if (words.length === 0) {
      state.readline.prompt();
      return;
    }

    // Get commands
    const commandName = words[0]!;
    const command = state.commands[commandName];

    // Check if the command exists in registry
    if (!command) {
      console.log("---------");
      console.log(
        `Unknown command: "${commandName}". Type "help" for a list of commands.`,
      );
      console.log("---------");
      state.readline.prompt();
      return;
    }

    // Try to execute the command
    try {
      await command.callback(state, ...args);
    } catch (error) {
      console.log("---------");
      console.log((error as Error).message);
      console.log("---------");
    }
    state.readline.prompt();
  });
}

export function cleanInput(userInput: string) {
  return userInput
    .trim()
    .split(" ")
    .filter((word) => word !== "");
}
