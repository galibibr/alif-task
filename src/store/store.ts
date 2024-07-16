import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import { useDispatch, useSelector } from "react-redux";
import { userApi } from "../api/userApi";

export const store = configureStore({
   reducer: {
      user: userSlice,
      [userApi.reducerPath]: userApi.reducer
   },
   middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(userApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()