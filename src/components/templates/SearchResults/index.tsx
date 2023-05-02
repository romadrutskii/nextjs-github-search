import { PropsWithChildren } from "react";

function SearchResults(props: PropsWithChildren) {
  return <div className="container mx-auto mt-4">{props.children}</div>;
}

export default SearchResults;
