import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./store/userSlice"
import { RootState } from "./store/store"
import { useGetUsersQuery } from "./api/userApi"
import { User } from "./helpers/types"

export default function App() {
  const value: number = useSelector((state: RootState) => state.user.value)
  const dispatch = useDispatch()

  const { data, isLoading, error } = useGetUsersQuery()

  return (
     <div>
        <div className="App">
           {error ? (
              <>Oh no, there was an error</>
           ) : isLoading ? (
              <>Loading...</>
           ) : data ? (
              <>
              {data.map((user: User) => (
                 <h3 key={user.id}>{user.fullname}</h3>
              ))}
              </>
           ) : null}
        </div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <button onClick={() => dispatch(decrement())} className="px-3">
           -
        </button>
        {value}
        <button onClick={() => dispatch(increment())} className="px-3">
           +
        </button>
     </div>
  );
}
