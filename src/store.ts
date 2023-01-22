import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersApi } from "./api/users.api";
import { rtkQueryMessenger } from "./middleware/rtkQueryMessenger";
import { appSlice } from "./slice/app.slice";
import { messagesApi } from "./api/messages.api";

export const store = configureStore({
  reducer: {
    [appSlice.name]: appSlice.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [messagesApi.reducerPath]: messagesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      rtkQueryMessenger,
      usersApi.middleware,
      messagesApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
