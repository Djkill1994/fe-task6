import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Box, Stack } from "@mui/material";
import { SendMessageForm } from "./SendMessageForm";
import { Messages } from "./Messages";

export const Home: FC = () => {
  const { currentUserName } = useSelector((state: RootState) => state.app);

  return (
    <Stack gap="100px">
      {currentUserName}
      <SendMessageForm />
      <Messages />
    </Stack>
  );
};
