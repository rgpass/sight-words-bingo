import { Board } from "../_components/Board";
import { NextWord } from "./_components/NextWord";

export default function Host() {
  return (
    <main className="flex h-full min-h-screen w-full flex-col bg-white text-black">
      <NextWord />
      <Board isAlphabetical />
    </main>
  );
}
