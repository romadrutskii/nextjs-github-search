import Input from "@/components/atoms/Input";
import Select from "@/components/atoms/Select";
import { Modify } from "@/interfaces";
import { HTMLAttributes } from "react";

const searchPlaceholder = "Start typing to search...";

type Props = Modify<
  HTMLAttributes<HTMLDivElement>,
  {
    onSearchInput: (s: string) => void;
    searchEntities: string[];
    onChangeSearchEntity: (s: string) => void;
  }
>;

function SearchEntityComponent({
  onSearchInput,
  searchEntities,
  onChangeSearchEntity,
}: Props) {
  return (
    <div className="flex flex-wrap justify-center space-x-4">
      <Input className="mb-2" placeholder={searchPlaceholder} onInput={onSearchInput} />
      <Select
        className="mb-2"
        options={searchEntities}
        onInput={onChangeSearchEntity}
      />
    </div>
  );
}

export default SearchEntityComponent;
