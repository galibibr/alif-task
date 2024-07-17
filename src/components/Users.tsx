import { useEffect } from "react";
import type { UserI } from "../helpers/types";
import { User } from "./User";
import { useAppDispatch } from "../store/store";
import { setPostUserIsLoading, setShowModal } from "../store/userSlice";

type UsersProps = {
   users: UserI[];
};
export default function Users({ users }: UsersProps): JSX.Element {
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(setPostUserIsLoading(false));
      dispatch(setShowModal(false));
   }, [users.length]);

   return (
      <div className="px-[32px] mx-auto max-w-[1200px]">
         <div>
            <p className="font-bold text-xl">Users</p>
            <p className="text-sm">Total: {users.length}</p>
         </div>
         <table className="w-full border-separate border">
            <thead>
               <tr>
                  <th className="border">Full Name</th>
                  <th className="border">Email</th>
                  <th className="border">Phone</th>
                  <th className="border">Age</th>
                  <th className="border">Major</th>
                  <th className="border">Experience</th>
               </tr>
            </thead>
            {users.map((user: UserI) => (
               <User key={user.id} user={user} />
            ))}
         </table>
      </div>
   );
}
