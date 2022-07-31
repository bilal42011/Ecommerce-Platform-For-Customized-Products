import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container
      maxWidth="100%"
      disableGutters
      sx={{
        paddingTop: "3rem",
        paddingBottom: "3rem",
        backgroundColor: "#E6EDEE",
        marginTop: { xs: "5rem", sm: "6rem", md: "8rem", maxHeight: "200px" },
      }}
    >
      <Container maxWidth="xl" disableGutters>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          rowSpacing={4}
        >
          <Grid
            container
            item
            xs={12}
            md={6}
            justifyContent="center"
            rowSpacing={2}
          >
            <Grid item xs={12} md={6} textAlign="center">
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <Typography
                  fontFamily="Roboto"
                  fontSize="35px"
                  fontWeight="bold"
                >
                  E-Workers
                </Typography>
              </Link>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{ textAlign: { xs: "center", md: "start" } }}
              alignSelf="center"
            >
              <Typography fontFamily="Roboto, sans-serif" fontSize="20px">
                @ E-workers Pvt. Ltd
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            item
            xs={12}
            md={6}
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              container
              item
              xs={12}
              columnSpacing={4}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  <TwitterIcon color="white" />
                </Link>
              </Grid>
              <Grid item>
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  <FacebookRoundedIcon color="white" />
                </Link>
              </Grid>
              <Grid item>
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  <InstagramIcon color="white" />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Footer;
