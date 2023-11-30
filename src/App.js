import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CoinPage from "./pages/CoinPage";
import Header from "./component/Header";
import { Box, styled } from "@mui/material";
import Alert from "./component/Alert";

const Container = styled(Box)({
  backgroundColor: "#14161a",
  color: "white",
  minHeight: "100vh",
});
function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </Container>
      <Alert />
    </BrowserRouter>
  );
}

export default App;
