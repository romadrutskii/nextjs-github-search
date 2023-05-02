import { useState } from "react";

interface Props {
  placeholder?: string;
}

function Input(props: Props) {
  const [value, setValue] = useState("");

  return (
    <input
      className="py-2.5 px-3.5 rounded border border-gray-400"
      placeholder={props.placeholder}
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    ></input>
  );
}

export default Input;
