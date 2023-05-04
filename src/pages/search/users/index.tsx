import usersApi from "@/api/users";
import UserList from "@/components/organisms/UserList";
import SearchResults from "@/components/templates/SearchResults";
import { User, UserListProps, areSearchParamsCorrect } from "@/interfaces";
import { GetServerSidePropsContext } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let users: User[] | null = null,
    error = null;

  if (areSearchParamsCorrect(context.query)) {
    try {
      users = await usersApi.search(context.query.q);
    } catch (e) {
      if (e instanceof Error) {
        error = e.message;
      }
    }
  } else {
    error = "Query params are not correct!";
  }

  return {
    props: {
      users,
      error,
    },
  };
}

export default function UserSearchResults(props: UserListProps) {
  return (
    <SearchResults>
      <UserList {...props} />
    </SearchResults>
  );
}
