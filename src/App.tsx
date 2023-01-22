import { FC } from "react";
import { Toaster } from "react-hot-toast";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { LoginForm } from "./components/LoginForm";
import { Home } from "./components/Home";

export const App: FC = () => {
  const { currentUserName } = useSelector((state: RootState) => state.app);

  return (
    <Box height="100vh" bgcolor="#FAFAFA">
      <Toaster position="top-right" />
      {currentUserName ? <Home /> : <LoginForm />}
    </Box>
  );
};
