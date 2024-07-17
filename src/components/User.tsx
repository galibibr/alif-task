import type { UserI} from "../helpers/types";

type UserProp = {
   user: UserI
}
export const User = ({ user }: UserProp): JSX.Element => {
  return (
     <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] border">
        <p>{user.fullname}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.age} years</p>
        <p>{user.major}</p>
        <p>{user.experience}</p>
     </div>
  );
}