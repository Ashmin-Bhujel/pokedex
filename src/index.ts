import { startREPL } from "./repl.js";
import { initState } from "./state.js";

async function main() {
  const cacheInterval = 1000 * 60 * 5;
  const state = initState(cacheInterval);
  await startREPL(state);
}

main();
