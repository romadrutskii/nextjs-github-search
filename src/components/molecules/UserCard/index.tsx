import { User } from "@/interfaces";
import Image from "next/image";

function UserCard(props: User) {
  return (
    <div className="flex p-4 space-x-3">
      <Image
        src={props.avatarUrl}
        width="0"
        height="0"
        sizes="100vw"
        className="w-6 h-6 rounded-full mt-1.5"
        alt="user avatar"
      />
      <div>
        <div className="flex items-center space-x-3">
          {props.name && <div className="text-blue-500">{props.name}</div>}
          <div className="text-lg font-semibold text-gray-600">
            {props.login}
          </div>
        </div>
        {props.bio && <div>{props.bio}</div>}
        {props.location && (
          <div className="text-gray-500">{props.location}</div>
        )}
      </div>
    </div>
  );
}

export default UserCard;
