import type { State } from "./state.js";

export function startREPL(state: State) {
  state.readline.prompt();

  state.readline.on("line", (userInput) => {
    const words = cleanInput(userInput);

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
      console.log(
        `Unknown command: "${commandName}". Type "help" for a list of commands.`,
      );
      state.readline.prompt();
      return;
    }

    // Try to execute the command
    try {
      command.callback(state);
    } catch (error) {
      console.log(error);
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
