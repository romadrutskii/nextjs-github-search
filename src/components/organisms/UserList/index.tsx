import ErrorMessageBlock from '@/components/atoms/ErrorMessageBlock';
import LoadingSpinner from '@/components/atoms/LoadingSpinner';
import NoResultsMessage from '@/components/atoms/NoResultsMessage';
import UserCard from '@/components/molecules/UserCard';
import usePageLoading from '@/hooks/usePageLoading';
import { UserListProps } from '@/interfaces';

function UserList(props: UserListProps) {
  const isLoading = usePageLoading();

  const { error, users } = props;

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (users?.length) {
    return (
      <div className="flex-col space-y-3 divide-y">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    );
  }

  if (error) {
    return <ErrorMessageBlock>{error}</ErrorMessageBlock>;
  }

  if (!users?.length) {
    return <NoResultsMessage items="users" />;
  }

  return <></>;
}

export default UserList;
