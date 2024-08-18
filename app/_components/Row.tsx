import { Square } from "./Square";

export function Row({ row }: { row: string[] }) {
  return (
    <div className="flex max-h-[calc(min(95vh,_95vw))] max-w-[calc(min(95vh,_95vw))] first-of-type:border-t-2 last-of-type:border-b-2 border-blue-500">
      {row.map((word) => (
        <Square key={word} word={word} />
      ))}
    </div>
  );
}
