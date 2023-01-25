import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { useGetMessagesQuery } from "../api/messages.api";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ExpandMore } from "@mui/icons-material";

export const Messages: FC = () => {
  const { currentUserName } = useSelector((state: RootState) => state.app);
  const { data } = useGetMessagesQuery(currentUserName, {
    pollingInterval: 5000,
  });

  return (
    <Paper
      sx={{
        padding: "12px",
        gap: "10px",
        borderRadius: "6px",
        display: "flex",
        flexDirection: "column",
        minWidth: "450px",
      }}
    >
      {data?.map((message) => (
        <Paper key={message.id} variant="outlined">
          <Stack>
            <Box
              display="flex"
              justifyContent="space-between"
              p="6px 24px 0 24px"
            >
              <Typography fontWeight={800} fontSize="16px">
                {message.sender}
              </Typography>
              <Typography color="gray" fontSize="12px">
                {message.date}
              </Typography>
            </Box>
            <Accordion disableGutters>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography fontWeight={550} fontSize="14px">
                  {message.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{message.body}</Typography>
              </AccordionDetails>
            </Accordion>
          </Stack>
        </Paper>
      ))}
    </Paper>
  );
};
