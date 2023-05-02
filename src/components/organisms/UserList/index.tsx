import ErrorMessageBlock from "@/components/atoms/ErrorMessageBlock";
import UserCard from "@/components/molecules/UserCard";
import { UserListProps } from "@/interfaces";

function UserList(props: UserListProps) {
  const { error, users } = props;

  if (users?.length) {
    return (
      <div className="flex-col space-y-3">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    );
  } else if (error) {
    return <ErrorMessageBlock>{error}</ErrorMessageBlock>;
  }

  return <div>No users found. Try to change query</div>;
}

export default UserList;
