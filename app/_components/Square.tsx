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
      className="relative flex aspect-square h-full max-h-[calc(min(19vh,_19vw))] w-full max-w-[calc(min(19vh,_19vw))] items-center justify-center border-2 border-blue-500 text-center first-of-type:border-l-4 last-of-type:border-r-4"
      onClick={handleClick}
    >
      <span className="text-xl">{word}</span>
      {isSelected && (
        <div className="absolute h-full w-full rounded-full border-8 border-red-500 bg-red-500 opacity-25" />
      )}
    </div>
  );
}
