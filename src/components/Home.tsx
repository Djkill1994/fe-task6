import { FC } from "react";
import { Box, Stack } from "@mui/material";
import { SendMessageForm } from "./SendMessageForm";
import { Messages } from "./Messages";
import { Header } from "./Header";

export const Home: FC = () => (
  <Box height="100vh">
    <Header />
    <Stack direction="row-reverse" justifyContent="space-between" p="20px 80px">
      <SendMessageForm />
      <Messages />
    </Stack>
  </Box>
);
