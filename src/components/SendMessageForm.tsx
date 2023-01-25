import { Autocomplete, Box, Button, Grid, TextField } from "@mui/material";
import { FC } from "react";
import { IMessage, useSendMessageMutation } from "../api/messages.api";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useGetUsersQuery, useLazyGetUsersQuery } from "../api/users.api";

type ISendMessageForm = Omit<IMessage, "id" | "sender" | "date">;

export const SendMessageForm: FC = () => {
  const [sendMessage] = useSendMessageMutation();
  const { data } = useGetUsersQuery();
  const [refetchUsers] = useLazyGetUsersQuery();
  const { currentUserName } = useSelector((state: RootState) => state.app);

  const { register, handleSubmit, reset, control, formState } =
    useForm<ISendMessageForm>({
      defaultValues: { receiver: "", body: "", title: "" },
    });

  const onSubmit: SubmitHandler<ISendMessageForm> = (data) => {
    sendMessage({ ...data, sender: currentUserName });
    reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      width="500px"
      height="450px"
      border="1px solid #dbdbdb"
      p="12px"
      bgcolor="white"
      borderRadius="6px"
      position="sticky"
      top="66px"
    >
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Grid item xs={12} width="100%">
          <Controller
            render={({ field: { onChange, value, onBlur } }) => (
              <Autocomplete
                onOpen={() => refetchUsers()}
                freeSolo
                value={value}
                onBlur={onBlur}
                onChange={(event, item) => onChange(item)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    placeholder="Enter receiver"
                  />
                )}
                options={data?.map(({ username }) => username) || []}
              />
            )}
            name="receiver"
            control={control}
          />
        </Grid>
        <Grid item xs={12} width="100%">
          <TextField
            {...register("title", { required: true })}
            size="small"
            fullWidth
            placeholder="Enter your title"
          />
        </Grid>
        <Grid item xs={12} width="100%">
          <TextField
            {...register("body", { required: true })}
            placeholder="Enter your text"
            multiline
            minRows={10}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} width="100%">
          <Button
            disabled={!formState.isValid}
            type="submit"
            variant="contained"
            sx={{ mt: 3 }}
            fullWidth
          >
            Send message
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
