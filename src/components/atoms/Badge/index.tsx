import { Modify } from "@/interfaces";
import { HTMLAttributes } from "react";

type Props = Modify<
  HTMLAttributes<HTMLDivElement>,
  {
    text: string;
  }
>;

function Badge({ text, className = "" }: Props) {
  return (
    <div
      className={`bg-sky-100 text-blue-500 rounded-full px-3 pb-1 pt-0.5 ${className}`}
    >
      {text}
    </div>
  );
}

export default Badge;
