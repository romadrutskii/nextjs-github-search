import UserList from "@/components/organisms/UserList";
import SearchResults from "@/components/templates/SearchResults";
import { UserListProps } from "@/interfaces";

function UserSearchResults(props: UserListProps) {
  return (
    <SearchResults>
      <UserList {...props} />
    </SearchResults>
  );
}

export default UserSearchResults;
