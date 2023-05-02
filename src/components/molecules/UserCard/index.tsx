import { User } from "@/interfaces";
import Image from "next/image";

function UserCard(props: User) {
  return (
    <div className="flex p-4 space-x-3">
      <Image src={props.avatar_url} width={30} height={30} alt="user avatar" />
      <div>
        {props.name && <div>{props.name}</div>}
        <div className="text-lg font-semibold text-gray-600">{props.login}</div>
        {props.bio && <div>{props.bio}</div>}
        {props.location && <div>{props.location}</div>}
      </div>
    </div>
  );
}

export default UserCard;
