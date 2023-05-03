import { Endpoints } from "@octokit/types";

export type Users = Endpoints["GET /search/users"]["response"]["data"]["items"];
export type User = Users[0];
export type SearchUserParams = Endpoints["GET /search/users"]["parameters"];
export interface UserListProps {
  users?: Users;
  error?: string;
}
export function areUserSearchParamsCorrect(
  params: any
): params is SearchUserParams {
  return (params as SearchUserParams).q !== undefined || "q" in params;
}

export type Repositories =
  Endpoints["GET /search/repositories"]["response"]["data"]["items"];
export type Repository = Repositories[0];
export type SearchRepositoriesParams =
  Endpoints["GET /search/repositories"]["parameters"];
export interface RepositoriesListProps {
  repos?: Repositories;
  error?: string;
}
export function areReposSearchParamsCorrect(
  params: any
): params is SearchRepositoriesParams {
  return (params as SearchRepositoriesParams).q !== undefined || "q" in params;
}

export type Modify<T, R> = Omit<T, keyof R> & R;
