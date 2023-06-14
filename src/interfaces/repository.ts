import { Endpoints } from "@octokit/types";

export type Repositories =
  Endpoints["GET /search/repositories"]["response"]["data"]["items"];
export type Repository = Repositories[0];

export interface ReposListProps {
  repos: Repositories;
  error?: string;
  isLoading: boolean;
}
