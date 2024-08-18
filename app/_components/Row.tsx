import { Square } from "./Square";

export function Row({ row }: { row: string[] }) {
  return (
    <div className="flex max-h-[calc(min(90vh,_90vw))] max-w-[calc(min(90vh,_90vw))] first-of-type:border-t-2 last-of-type:border-b-2 border-red-500">
      {row.map((word) => (
        <Square key={word} word={word} />
      ))}
    </div>
  );
}
