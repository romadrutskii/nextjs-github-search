import Input from "@/components/atoms/Input";
import Select from "@/components/atoms/Select";

enum SearchEntity {
  Users = "Users",
  Repositories = "Repositories",
}

const searchEntities = Object.keys(SearchEntity);

const searchPlaceholder = "Start typing to search...";

export default function SearchEntityComponent() {
  return (
    <div className="flex space-x-4">
      <Input placeholder={searchPlaceholder} />
      <Select
        className="flex-1"
        options={searchEntities}
        defaultValue={SearchEntity.Users}
      />
    </div>
  );
}
