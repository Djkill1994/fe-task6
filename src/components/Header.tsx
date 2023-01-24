import { Button, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import LogoutIcon from "@mui/icons-material/Logout";
import { setCurrentUserName } from "../slice/app.slice";
import { FC } from "react";

export const Header: FC = () => {
  const { currentUserName } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();

  return (
    <Stack justifyContent="space-between" p="5px 10px" direction="row">
      <Typography variant="h6">Hello: {currentUserName}</Typography>
      <Button onClick={() => dispatch(setCurrentUserName(""))}>
        <LogoutIcon />
      </Button>
    </Stack>
  );
};
