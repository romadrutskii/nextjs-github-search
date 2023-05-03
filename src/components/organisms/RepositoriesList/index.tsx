import ErrorMessageBlock from "@/components/atoms/ErrorMessageBlock";
import LoadingSpinner from "@/components/atoms/LoadingSpinner";
import NoResultsMessage from "@/components/atoms/NoResultsMessage";
import RepositoryCard from "@/components/molecules/RepositoryCard";
import { ReposListProps } from "@/interfaces";

function RepositoriesList({ repos, isLoading, error }: ReposListProps) {
  if (repos?.length) {
    return (
      <div className="flex-col space-y-3 divide-y">
        {repos.map((repo) => (
          <RepositoryCard key={repo.id} {...repo} />
        ))}
      </div>
    );
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessageBlock>{error.message}</ErrorMessageBlock>;
  }

  if (!repos?.length) {
    return <NoResultsMessage items="repositories" />;
  }

  return <></>;
}

export default RepositoriesList;
