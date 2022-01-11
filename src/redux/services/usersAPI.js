import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const API = createApi({
  reducerPath: "usersAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: builder => ({
    getStatusAuth: builder.mutation({
      query: infoForAuth => ({
        url: "/users",
        method: "PUT",
        body: {
          ...infoForAuth,
        },
      }),
    }),
    registerUser: builder.mutation({
      query: ({ login, password }) => ({
        url: "/users",
        method: "POST",
        body: {
          login,
          pass: password,
        },
      }),
    }),
  }),
});

export const { useGetStatusAuthMutation, useRegisterUserMutation } = API;
