import { createSlice } from "@reduxjs/toolkit";
import { formErrors, UserI } from "../helpers/types";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
   newUser: UserI;
   formErrors: formErrors;
}

const initialState: UserState = {
   newUser: {
      id: 0,
      fullname: "",
      email: "",
      phone: "",
      age: 0,
      major: "",
      skills: [],
      experience: "no experience",
   },
   formErrors: {
      fullname: null,
      age: null,
   },
};

export const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      submitNewUser: (state, { payload }: PayloadAction<UserI>) => {
         const { fullname, age } = payload;

         state.formErrors.fullname = fullname.split(" ").length < 2
            ? "Please enter your full name"
            : null;
         state.formErrors.age = age <= 10 || age > 100
            ? "Please enter a valid age"
            : null;

         if (fullname.split(" ").length === 2 && age >= 10 && age < 100) {
            state.newUser = payload;
         }
      },
   },
});

export const { submitNewUser } = userSlice.actions;

export default userSlice.reducer;
