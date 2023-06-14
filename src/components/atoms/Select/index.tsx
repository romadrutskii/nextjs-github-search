import { Modify } from "@/interfaces";
import { ChangeEvent, HTMLAttributes, memo, useState } from "react";

type Props = Modify<
  HTMLAttributes<HTMLSelectElement>,
  {
    options: string[];
    defaultValue?: string;
    onInput: (s: string) => void;
  }
>;

const Select = memo(function Select({
  options,
  defaultValue,
  onInput,
  className = "",
}: Props) {
  const [value, setValue] = useState(defaultValue);

  const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const v = e.target.value;
    setValue(v);
    onInput(v);
  };

  return (
    <select
      className={`py-2.5 px-3.5 rounded border border-gray-400 bg-transparent ${className}`}
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
});

export default Select;
