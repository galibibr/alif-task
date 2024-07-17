import type { UserI } from "../helpers/types";
import { User } from "./User";

type UsersProps = {
   users: UserI[]
}
export default function Users({ users }: UsersProps): JSX.Element {
  return (
     <div>
        {users.map((user: UserI) => (
           <User key={user.id} user={user} />
        ))}
     </div>
  );
}
