import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { UserI } from "../helpers/types";
import { apiUrl } from "../helpers/env";

export const userApi = createApi({
   reducerPath: 'userApi',
   baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
   tagTypes: ['User'],
   endpoints: (builder) => ({
      getUsers: builder.query<UserI[], void>({
         query: () => 'data',
         providesTags: ['User']
      }),
      postUser: builder.mutation<UserI, UserI>({
         query: (user: UserI) => ({
            url: 'data',
            method: 'POST',
            body: user
         }),
         invalidatesTags: ['User']
      })
   })
})

export const { useGetUsersQuery, usePostUserMutation } = userApi