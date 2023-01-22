import { Box, Button, TextField } from "@mui/material";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUserName } from "../slice/app.slice";

export const LoginForm: FC = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  return (
    <Box>
      <TextField onChange={({ target: { value } }) => setValue(value)} />
      <Button onClick={() => dispatch(setCurrentUserName(value))}>Login</Button>
    </Box>
  );
};
