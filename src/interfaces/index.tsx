import { Endpoints } from "@octokit/types";

// In a real-world project I would use GraphQL Code Generator
export interface User {
  __typename: string;
  company: string;
  login: string;
  name: string;
  location: string;
  bio: string;
  avatarUrl: string;
  id: string;
}
export interface UserEdge {
  __typename: string;
  node: User;
}
export interface UserListProps {
  users?: User[];
  error?: string;
}

export type Repositories =
  Endpoints["GET /search/repositories"]["response"]["data"]["items"];
export type Repository = Repositories[0];
export interface RepositoriesListProps {
  repos?: Repositories;
  error?: string;
}
export interface ReposListProps {
  repos: Repositories;
  error: Error | null;
  isLoading: boolean;
}

type SearchParams = Endpoints["GET /search/repositories"]["parameters"];
export function areSearchParamsCorrect(params: any): params is SearchParams {
  return (params as SearchParams).q !== undefined || "q" in params;
}

export type Modify<T, R> = Omit<T, keyof R> & R;
