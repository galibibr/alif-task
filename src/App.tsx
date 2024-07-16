import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./store/userSlice"
import { RootState } from "./store/store"

export default function App() {
  const value: number = useSelector((state: RootState) => state.user.value)
  const dispatch = useDispatch()

  return <div>
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
    <button onClick={() => dispatch(decrement())} className="px-3">-</button>
    {value}
    <button onClick={() => dispatch(increment())} className="px-3">+</button>
  </div>
}
