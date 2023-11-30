import { ThemeProvider, createTheme, styled } from "@mui/material";
import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import AuthModal from "./Authentication/AuthModal";
import UserSidebar from "./Authentication/UserSidebar";
const Title = styled(Typography)({
  flex: 1,
  color: "gold",
  fontFamily: "Monsterrat",
  fontWeight: "bold",
  cursor: "pointer",
});
const darkTheme = createTheme({
  palette: {
    main: "#fff",
    mode: "dark",
  },
});

const Header = () => {
  const navigate = useNavigate();
  const { currency, setCurrency, user } = CryptoState();
  // console.log(currency);
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Title onClick={() => navigate("/")} variant="h5">
              Crypto Tracker
            </Title>
            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
            {user ? <UserSidebar /> : <AuthModal />}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
