import { Modify } from "@/interfaces";
import { ChangeEvent, HTMLAttributes, useState } from "react";

type Props = Modify<
  HTMLAttributes<HTMLInputElement>,
  {
    onInput: (s: string) => void;
    placeholder?: string;
  }
>;

function Input({ onInput, placeholder, className = '' }: Props) {
  const [value, setValue] = useState("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setValue(v);
    onInput(v);
  };

  return (
    <input
      className={`py-2.5 px-3.5 rounded border border-gray-400 ${className}`}
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={changeHandler}
    ></input>
  );
}

export default Input;
