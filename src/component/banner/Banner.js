import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Carousel from "./Carousel";

const Template = styled(Box)({
  backgroundImage: "url(./banner2.jpg)",
});
const ContTemp = styled(Container)({
  height: 400,
  display: "flex",
  paddingTop: 25,
  flexDirection: "column",
  justifyContent: "space-around",
});

const Box2 = styled(Box)({
  display: "flex",
  height: "40%",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
});
const Banner = () => {
  return (
    <Template>
      <ContTemp>
        <Box2>
          <Typography
            variant="h2"
            style={{
              fontFamily: "Montserrat",
              fontWeight: "bold",
              marginBottom: 15,
            }}
          >
            Crypto Tracker
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              fontFamily: "Montserrat",
              color: "darkgray",
              textTransform: "capitalize",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </Box2>
        <Carousel />
      </ContTemp>
    </Template>
  );
};

export default Banner;
