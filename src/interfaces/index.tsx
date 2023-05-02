import { Endpoints } from "@octokit/types";

export type Users = Endpoints["GET /search/users"]["response"]["data"]["items"];
export type User = Users[0];
export type SearchUserParams = Endpoints["GET /search/users"]["parameters"];

export interface UserListProps {
  users?: Users;
  error?: string;
}

export type Modify<T, R> = Omit<T, keyof R> & R;
