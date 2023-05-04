import { Endpoints } from "@octokit/types";

// In a real-world project I would use GraphQL Code Generator
export interface User {
  login: string;
  name: string;
  location: string;
  bio: string;
  avatarUrl: string;
  id: string;
  url: string;
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
export interface ReposListProps {
  repos: Repositories;
  error?: string;
  isLoading: boolean;
}

// Type Guard
export type SearchParams = Endpoints["GET /search/repositories"]["parameters"];
export function areSearchParamsCorrect(params: any): params is SearchParams {
  return (params as SearchParams).q !== undefined || "q" in params;
}

export type Modify<T, R> = Omit<T, keyof R> & R;
