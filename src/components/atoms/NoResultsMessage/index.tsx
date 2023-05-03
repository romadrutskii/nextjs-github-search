interface Props {
  items: string;
}

function NoResultsMessage({ items = "items" }: Props) {
  return <div>No {items} found. Try to change the query.</div>;
}

export default NoResultsMessage;
