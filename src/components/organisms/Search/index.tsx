import SearchEntityComponent from "@/components/molecules/SearchEntity";
import SearchHeader from "@/components/molecules/SearchHeader";

export default function Search() {
  return (
    <div className="space-y-4">
      <SearchHeader />
      <SearchEntityComponent />
    </div>
  );
}
