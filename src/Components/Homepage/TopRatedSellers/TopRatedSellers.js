import React from "react";
import { Typography, Container } from "@mui/material";
import SellersSlider from "./SellersSlider/SellersSlider";

const TopRatedSellers = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        paddingTop: "3rem",
        backgroundColor: "#0d084d",
        marginTop: { xs: "3rem", sm: "4rem", md: "6rem" },
      }}
    >
      <Typography
        variant="h3"
        textAlign="center"
        color="white"
        fontWeight="bold"
        sx={{
          paddingBottom: "8px",
          borderBottom: "2px solid white",
          width: "fit-content",
          margin: "auto",
        }}
      >
        Top Rated Sellers
      </Typography>
      <SellersSlider />
    </Container>
  );
};

export default TopRatedSellers;
