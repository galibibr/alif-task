import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../helpers/types";
import { apiUrl } from "../helpers/env";

export const userApi = createApi({
   reducerPath: 'userApi',
   baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
   tagTypes: ['User'],
   endpoints: (builder) => ({
      getUsers: builder.query<User[], void>({
         query: () => 'data',
         providesTags: ['User']
      })
   })
})

export const { useGetUsersQuery } = userApi