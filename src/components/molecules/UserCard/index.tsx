import ExternalLink from "@/components/atoms/ExternalLink";
import { User } from "@/interfaces";
import Image from "next/image";

function UserCard({ avatarUrl, name, login, bio, location, url }: User) {
  return (
    <div className="flex p-4 space-x-3">
      <Image
        src={avatarUrl}
        width="0"
        height="0"
        sizes="100vw"
        className="w-6 h-6 rounded-full mt-1.5"
        alt="user avatar"
      />
      <div>
        <div className="flex items-center space-x-3">
          {name && (
            <div className="text-blue-500" data-test-id="search-user-card-name">
              {name}
            </div>
          )}
          <ExternalLink url={url} dataTestId="search-user-card-link">
            <div className="text-lg font-semibold text-gray-600">{login}</div>
          </ExternalLink>
        </div>
        {bio && <div>{bio}</div>}
        {location && <div className="text-gray-500">{location}</div>}
      </div>
    </div>
  );
}

export default UserCard;
