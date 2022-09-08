import React from "react";
import { Grid, Typography, Container } from "@mui/material";
import ArtImage from "../../../assets/ArtImage.png";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import SearchInput from "./SearchInput/SearchInput";

const SearchProductsSection = () => {
  const theme = useTheme();
  let isSmallScreen = !useMediaQuery(theme.breakpoints.up("sm"));
  console.log(isSmallScreen);

  return (
    <Container maxWidth="100%" disableGutters>
      <Grid
        container
        sx={{
          background: `url(${ArtImage})`,
          height: "600px",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        justifyContent="center"
        alignContent="center"
      >
        <Grid
          container
          maxWidth="xl"
          item
          alignContent="center"
          justifyContent="center"
          xs={11}
          sm={11}
          md={10}
          lg={10}
          xl={10}
          sx={{ height: "500px", backgroundColor: "rgb(0,0,0,0.5)" }}
          rowSpacing={isSmallScreen ? 3 : 0}
        >
          <Grid item xs={10}>
            <Typography
              variant="p"
              sx={{
                color: "white",
                fontSize: "2.7rem",
                fontFamily: "Roboto, sans-serif",
                fontWeight: "lighter",
              }}
            >
              Find the perfect products
            </Typography>
          </Grid>
          <SearchInput isSmallScreen={isSmallScreen} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchProductsSection;
