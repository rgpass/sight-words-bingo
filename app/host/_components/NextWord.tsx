"use client";

import { words } from "../../words";
import { useState } from "react";

function randomOrder(arr: string[]) {
  return arr.sort(() => 0.5 - Math.random());
}

export function NextWord() {
  const [remainingWords, setRemainingWords] = useState(randomOrder(words));
  const [word, setWord] = useState("");

  const handleClick = () => {
    const [first, ...rest] = remainingWords;
    setWord(first);
    setRemainingWords(rest);
  };

  return (
    <div className="flex gap-4 mb-1">
      <button
        className="border-2 border-blue-500 rounded-md px-2 py-1"
        onClick={handleClick}
      >
        Next
      </button>
      <div className="text-center text-2xl font-bold">{word}</div>
    </div>
  );
}
