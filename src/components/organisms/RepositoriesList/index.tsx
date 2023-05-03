import { octokit } from "@/api/searchRepos";
import ErrorMessageBlock from "@/components/atoms/ErrorMessageBlock";
import LoadingSpinner from "@/components/atoms/LoadingSpinner";
import RepositoryCard from "@/components/molecules/RepositoryCard";
import { Repositories, areSearchParamsCorrect } from "@/interfaces";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function RepositoriesList() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
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

  if (repos?.length) {
    return (
      <div className="flex-col space-y-3">
        {repos.map((repo) => (
          <RepositoryCard key={repo.id} {...repo} />
        ))}
      </div>
    );
  }

  if (error) {
    return <ErrorMessageBlock>{error.message}</ErrorMessageBlock>;
  }

  return <LoadingSpinner />;
}

export default RepositoriesList;
