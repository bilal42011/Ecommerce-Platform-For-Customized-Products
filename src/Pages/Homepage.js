import React from "react";
import { Container } from "@mui/material";
import SearchProductsSection from "../Components/Homepage/SearchProductsSection/SearchProductsSection";
import TopRatedSellers from "../Components/Homepage/TopRatedSellers/TopRatedSellers";
import AboutSite from "../Components/Homepage/AboutSIte/AboutSite";

const Homepage = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <SearchProductsSection />
      <TopRatedSellers />
      <AboutSite />
    </Container>
  );
};

export default Homepage;
