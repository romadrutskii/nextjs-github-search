import { PropsWithChildren } from "react";

function ErrorMessageBlock(props: PropsWithChildren) {
  return (
    <div className="p-5 text-red-600 border border-red-600 rounded-lg bg-red-100">
      {props.children}
    </div>
  );
}

export default ErrorMessageBlock;
