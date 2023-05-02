import { Modify } from "@/interfaces";
import { ChangeEvent, HTMLAttributes, useState } from "react";

type Props = Modify<
  HTMLAttributes<HTMLSelectElement>,
  {
    options: string[];
    defaultValue?: string;
    onInput: (s: string) => void;
  }
>;

function Select({ options, defaultValue, onInput }: Props) {
  const [value, setValue] = useState(defaultValue);

  const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const v = e.target.value;
    setValue(v);
    onInput(v);
  };

  return (
    <select
      className="py-2.5 px-3.5 rounded border border-gray-400 bg-transparent"
      value={value}
      onChange={changeHandler}
    >
      {options.map((option) => (
        <option value={option} key={option} style={{ fontFamily: "system-ui" }}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
