import Badge from "@/components/atoms/Badge";
import ExternalLink from "@/components/atoms/ExternalLink";
import StargazersCount from "@/components/atoms/StargazersCount";
import { Repository } from "@/interfaces";
import format from "date-fns/format";

function RepositoryCard({
  full_name,
  description,
  topics,
  stargazers_count,
  updated_at,
  html_url,
}: Repository) {
  return (
    <div className="flex p-4 space-x-3">
      <div className="mt-1.5">
        <svg
          aria-hidden="true"
          focusable="false"
          role="img"
          viewBox="0 0 16 16"
          width="16"
          height="16"
          fill="currentColor"
          className="text-gray-500"
        >
          <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
        </svg>
      </div>

      <div className="flex-column space-y-1">
        <div className="text-blue-500" data-test-id="search-repo-card-name">
          <ExternalLink url={html_url} dataTestId="search-repo-card-link">
            {full_name}
          </ExternalLink>
        </div>
        {description && <div>{description}</div>}
        {topics && (
          <div className="flex flex-wrap -mr-3">
            {topics.map((t) => (
              <Badge className="mt-1 mr-3" key={t} text={t} />
            ))}
          </div>
        )}
        <div className="flex space-x-4 text-gray-500">
          <StargazersCount count={stargazers_count} />
          <div>Updated on {format(new Date(updated_at), "LLL d, yyyy")}</div>
        </div>
      </div>
    </div>
  );
}

export default RepositoryCard;
