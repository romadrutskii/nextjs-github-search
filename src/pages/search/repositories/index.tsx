import { octokit } from "@/api/searchRepos";
import RepositoriesList from "@/components/organisms/RepositoriesList";
import SearchResults from "@/components/templates/SearchResults";
import { Repositories, areSearchParamsCorrect } from "@/interfaces";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function RepositoriesPage() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [repos, setRepos] = useState<Repositories>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (!areSearchParamsCorrect(router.query)) {
        return;
      }

      setIsLoading(true);
      try {
        const response = await octokit.rest.search.repos(router.query);
        setRepos(response.data.items);
      } catch (e) {
        if (e instanceof Error) {
          setError(e);
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
