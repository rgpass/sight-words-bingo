"use client";

import { words } from "../../words";
import { useState } from "react";

function randomOrder(arr: string[]) {
  return arr.sort(() => 0.5 - Math.random());
}

export function NextWord() {
  const [remainingWords, setRemainingWords] = useState(randomOrder(words));
  const [previousWords, setPreviousWords] = useState<string[]>([]);
  const [word, setWord] = useState("");

  const handleClickNext = () => {
    const [first, ...rest] = remainingWords;
    setWord(first);
    setPreviousWords([...previousWords, first]);
    setRemainingWords(rest);
  };

  const handleClickPrint = () => console.log(previousWords.sort().join(", "));

  return (
    <div className="mb-1 flex gap-4">
      <button
        className="rounded-md border-2 border-blue-500 px-2 py-1"
        onClick={handleClickNext}
      >
        Next
      </button>
      <button
        className="rounded-md border-2 border-blue-500 px-2 py-1"
        onClick={handleClickPrint}
      >
        Print
      </button>
      <div className="text-center text-2xl font-bold">{word}</div>
    </div>
  );
}
