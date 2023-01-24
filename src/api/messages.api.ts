import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IMessage {
  id: string;
  sender: string;
  receiver: string;
  title: string;
  body: string;
  date: string;
}

export const messagesApi = createApi({
  reducerPath: "messagesApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }),
  tagTypes: ["Messages"],
  endpoints: (build) => ({
    getMessages: build.query<IMessage[], string>({
      query(username) {
        return {
          url: `/messages?username=${username}`,
        };
      },
      providesTags: ["Messages"],
    }),
    sendMessage: build.mutation<void, Omit<IMessage, "id" | "date">>({
      query(data) {
        return {
          url: "/messages/send",
          method: "post",
          body: data,
        };
      },
      invalidatesTags: ["Messages"],
    }),
  }),
});

export const { useGetMessagesQuery, useSendMessageMutation } = messagesApi;
