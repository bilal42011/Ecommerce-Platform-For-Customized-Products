import React from "react";
import { Typography, Container } from "@mui/material";
import SellersSlider from "./SellersSlider/SellersSlider";

const TopRatedSellers = () => {
  return (
    <Container
      className="top-rated-sellers-slider"
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
      >
        <span style={{ paddingBottom: "8px", borderBottom: "2px solid white" }}>
          Top Rated Sellers
        </span>
      </Typography>
      <SellersSlider />
    </Container>
  );
};

export default TopRatedSellers;
