import { useEffect } from "react";
import type { UserI } from "../helpers/types";
import { User } from "./User";
import { useAppDispatch } from "../store/store";
import { setPostUserIsLoading, setShowModal } from "../store/userSlice";

type UsersProps = {
   users: UserI[]
}
export default function Users({ users }: UsersProps): JSX.Element {
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(setPostUserIsLoading(false))
      dispatch(setShowModal(false))
   }, [users.length])
  return (
     <div className="px-[32px] mx-auto max-w-[1200px]">
        {users.map((user: UserI) => (
           <User key={user.id} user={user} />
        ))}
     </div>
  );
}
