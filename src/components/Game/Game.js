import { sample } from "../../utils";
import { WORDS } from "../../data";

// Components
import GuessInput from "../GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  return (
    <>
      <GuessInput />
    </>
  );
}

export default Game;
