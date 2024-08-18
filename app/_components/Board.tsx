import { Row } from "./Row";
import { words } from "../words";

function randomSample(arr: string[], n: number) {
  return arr.sort(() => 0.5 - Math.random()).slice(0, n);
}

// This generates the the 5x5 for the bingo board, with the center of "BINGO".
function generateBingoBoard(words: string[]): string[][] {
  const copy = [...words];
  const bingoBoard = [];
  for (let i = 0; i < 5; i++) {
    const row = [];
    for (let j = 0; j < 5; j++) {
      if (i === 2 && j === 2) {
        row.push("BINGO");
      } else {
        row.push(copy.pop());
      }
    }
    bingoBoard.push(row);
  }

  return bingoBoard as string[][];
}

export function Board() {
  const sampleWords = randomSample(words, 24);
  const board = generateBingoBoard(sampleWords);

  return (
    <div className="flex flex-col">
      {board.map((row, i) => (
        <Row key={i} row={row} />
      ))}
    </div>
  );
}
