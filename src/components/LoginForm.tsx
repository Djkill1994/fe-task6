import { Button, Stack, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "../api/users.api";
import { setCurrentUserName } from "../slice/app.slice";

export const LoginForm: FC = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const [sendUser] = useLoginUserMutation();

  return (
    <Stack
      direction="column"
      gap="20px"
      m="auto"
      height="100vh"
      justifyContent="center"
    >
      <Typography variant="h5">Enter your name please.</Typography>
      <TextField
        label="Name"
        onChange={({ target: { value } }) => setValue(value)}
      />
      <Button
        disabled={!value}
        variant="contained"
        onClick={() => {
          dispatch(setCurrentUserName(value));
          sendUser({ username: value });
        }}
      >
        Login
      </Button>
    </Stack>
  );
};
