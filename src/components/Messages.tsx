import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { useGetMessagesQuery } from "../api/messages.api";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const Messages: FC = () => {
  const { currentUserName } = useSelector((state: RootState) => state.app);
  const { data } = useGetMessagesQuery(currentUserName, {
    pollingInterval: 5000,
  });

  return (
    <Box>
      {data?.map((message) => (
        <Box key={message.id}>
          {/*<Typography>{message.id}</Typography>*/}
          {/*<Typography>{message.sender}</Typography>*/}
          {/*<Typography>{message.title}</Typography>*/}
          <Typography>{message.body}</Typography>
        </Box>
      ))}
    </Box>
  );
};
