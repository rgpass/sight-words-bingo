"use client";

import { useState } from "react";

export function Square({ word }: { word: string }) {
  const [isSelected, setIsSelected] = useState(word === "BINGO");

  const handleClick = () => {
    if (word === "BINGO") return;
    setIsSelected(!isSelected);
  };

  return (
    <div
      className="relative flex justify-center items-center text-center w-full h-full aspect-square max-h-[calc(min(19vh,_19vw))] max-w-[calc(min(19vh,_19vw))] first-of-type:border-l-4 last-of-type:border-r-4 border-2 border-blue-500"
      onClick={handleClick}
    >
      <span className="text-xl">{word}</span>
      {isSelected && (
        <div className="absolute w-full h-full border-8 rounded-full border-red-500 bg-red-500 opacity-25" />
      )}
    </div>
  );
}
