import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
   value: number
} 

const initialState: UserState = {
   value: 0
}

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      increment: (state) => {
         state.value += 1
      },
      decrement: (state) => {
         state.value -= 1
      }
   }
})

export const { increment, decrement } = userSlice.actions

export default userSlice.reducer
