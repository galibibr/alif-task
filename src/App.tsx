import { useGetUsersQuery } from "./api/userApi";
import { Header } from "./components/Header";
import Users from "./components/Users";

export default function App(): JSX.Element {
   const { data: users, isLoading, error } = useGetUsersQuery();

   if (error) return <div>Request failed</div>

   if (isLoading) return <div>Loading...</div>;

   return (
      <div>
        <Header />
        <main className="py-4">
            {users?.length ? (
               <Users users={users} />
            ) : <div>No users found</div>}
         </main>
      </div>
   );
}
