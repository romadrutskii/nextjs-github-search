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
