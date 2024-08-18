import { words } from "./words";

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

export default function Home() {
  const sampleWords = randomSample(words, 24);
  const board = generateBingoBoard(sampleWords);

  return (
    <main className="flex flex-col min-h-screen w-full h-full">
      <div className="flex flex-col">
        {board.map((row, i) => (
          <div
            key={i}
            className="flex max-h-[calc(min(90vh,_90vw))] max-w-[calc(min(90vh,_90vw))] first-of-type:border-t-2 last-of-type:border-b-2 border-red-500"
          >
            {row.map((word, j) => (
              <div
                key={`${i}-${j}`}
                className="flex justify-center items-center text-center w-full h-full aspect-square max-h-[calc(min(18vh,_18vw))] max-w-[calc(min(18vh,_18vw))] first-of-type:border-l-4 last-of-type:border-r-4 border-2 border-red-500"
              >
                {word}
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
