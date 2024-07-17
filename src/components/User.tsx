import type { UserI } from "../helpers/types";

type UserProp = {
   user: UserI;
};
export const User = ({ user }: UserProp): JSX.Element => {
   return (
      <tbody>
         <tr>
            <td className="border px-1">{user.fullname}</td>
            <td className="border px-1">{user.email}</td>
            <td className="border px-1">{user.phone}</td>
            <td className="border px-1">{user.age} years</td>
            <td className="border px-1">{user.major}</td>
            <td className="border px-1">{user.experience}</td>
         </tr>
      </tbody>
   );
};
