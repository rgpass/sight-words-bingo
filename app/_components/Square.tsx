export function Square({ word }: { word: string }) {
  return (
    <div className="flex justify-center items-center text-center w-full h-full aspect-square max-h-[calc(min(18vh,_18vw))] max-w-[calc(min(18vh,_18vw))] first-of-type:border-l-4 last-of-type:border-r-4 border-2 border-red-500">
      {word}
    </div>
  );
}
