import { useGetUsersQuery } from "./api/userApi";
import { User } from "./helpers/types";

export default function App() {
   const { data, isLoading, error } = useGetUsersQuery();

   if (error) return <div>Error</div>;

   if (isLoading) return <div>Loading...</div>;

   return (
      <div>
         {data ? (
            <>
               {data.map((user: User) => (
                  <h3 key={user.id}>{user.fullname}</h3>
               ))}
            </>
         ) : null}
      </div>
   );
}
