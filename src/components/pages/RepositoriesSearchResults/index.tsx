import RepositoriesList from "@/components/organisms/RepositoriesList";
import SearchResults from "@/components/templates/SearchResults";

function RepositoriesSearchResults() {
  return (
    <SearchResults>
      <RepositoriesList />
    </SearchResults>
  );
}

export default RepositoriesSearchResults;
