import { useState } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  options: string[];
  defaultValue?: string;
}

function Select({ options, defaultValue }: Props) {
  const [value, setValue] = useState(defaultValue);

  return (
    <select
      className="py-2.5 px-3.5 rounded border border-gray-400 bg-transparent"
      value={value}
      onChange={(e) => setValue(e.target.value)}
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
