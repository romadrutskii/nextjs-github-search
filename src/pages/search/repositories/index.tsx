import repositoriesApi from "@/api/repositories";
import RepositoriesList from "@/components/organisms/RepositoriesList";
import SearchResults from "@/components/templates/SearchResults";
import { Repositories, areSearchParamsCorrect } from "@/interfaces";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function RepositoriesPage() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [repos, setRepos] = useState<Repositories>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      if (!areSearchParamsCorrect(router.query)) {
        return;
      }

      setIsLoading(true);
      try {
        const items = await repositoriesApi.search(router.query);
        setRepos(items);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [router.query]);

  return (
    <SearchResults>
      <RepositoriesList isLoading={isLoading} repos={repos} error={error} />
    </SearchResults>
  );
}

export default RepositoriesPage;
