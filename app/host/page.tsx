import { Board } from "../_components/Board";
import { NextWord } from "./_components/NextWord";

export default function Host() {
  return (
    <main className="flex flex-col min-h-screen w-full h-full bg-white text-black">
      <NextWord />
      <Board isAlphabetical />
    </main>
  );
}
