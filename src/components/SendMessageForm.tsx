import { Box, Button, Grid, TextField } from "@mui/material";
import { FC } from "react";
import { IMessage, useSendMessageMutation } from "../api/messages.api";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "../store";

type ISendMessageForm = Omit<IMessage, "id" | "sender">;

export const SendMessageForm: FC = () => {
  const [sendMessage] = useSendMessageMutation();
  const { currentUserName } = useSelector((state: RootState) => state.app);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISendMessageForm>();

  const onSubmit: SubmitHandler<ISendMessageForm> = (data) => {
    sendMessage({ ...data, sender: currentUserName });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ mt: 3 }}
      width="100%"
    >
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Grid item xs={12} width="100%">
          <TextField
            {...register("receiver", { required: true })}
            error={!!errors.receiver}
            helperText={!!errors.receiver && "Enter receiver"}
            size="small"
            label="Receiver"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} width="100%">
          <TextField
            {...register("title", { required: true })}
            error={!!errors.title}
            helperText={!!errors.title && "Enter title"}
            size="small"
            label="Title"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} width="100%">
          <TextField
            {...register("body", { required: true })}
            error={!!errors.body}
            helperText={!!errors.body && "Enter body"}
            size="small"
            label="Body"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} width="100%">
          <Button type="submit" variant="contained" sx={{ mt: 3 }} fullWidth>
            Send message
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
