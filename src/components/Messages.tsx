import { Card, Stack, Typography } from "@mui/material";
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
    <Stack spacing="10px" width="600px" sx={{ overflowY: "auto" }}>
      {data?.map((message) => (
        <Card key={message.id} sx={{ height: "300px" }}>
          <Stack>
            <Typography p="5px" borderBottom="1px solid #dbdbdb">
              {message.date}
            </Typography>
            <Typography p="5px" borderBottom="1px solid #dbdbdb">
              {message.receiver}
            </Typography>
            <Typography p="5px" borderBottom="1px solid #dbdbdb">
              {message.sender}
            </Typography>
            <Typography p="5px" borderBottom="1px solid #dbdbdb">
              {message.title}
            </Typography>
            <Typography p="5px">{message.body}</Typography>
          </Stack>
        </Card>
      ))}
    </Stack>
  );
};
