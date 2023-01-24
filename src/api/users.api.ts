import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IUser {
  username: string;
}

type IUsersApiResponse = IUser[];

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    getUsers: build.query<IUsersApiResponse, void>({
      query() {
        return {
          url: "/users",
        };
      },
      providesTags: ["User"],
    }),
    sendUser: build.mutation<void, IUser>({
      query(data) {
        return {
          url: "/users/Login",
          method: "post",
          body: data,
        };
      },
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetUsersQuery, useSendUserMutation, useLazyGetUsersQuery } =
  usersApi;
