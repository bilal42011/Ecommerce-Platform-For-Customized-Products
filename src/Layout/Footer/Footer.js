import React from "react";
import { Container, Grid, Typography, Link as MUILink } from "@mui/material";
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
        backgroundColor: "#0C0404",
        marginTop: { xs: "6rem", sm: "8rem", md: "12rem" },
      }}
    >
      <Container maxWidth="xl" disableGutters>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          rowSpacing={4}
        >
          <Grid item xs={12} md={6} textAlign="center">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <Typography
                fontFamily="Roboto"
                fontSize="35px"
                fontWeight="bold"
                color="white"
                sx={{ letterSpacing: { xs: "20px", md: "50px" } }}
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
            <Typography
              fontFamily="Roboto, sans-serif"
              fontSize="20px"
              color="white"
              sx={{ letterSpacing: "5px" }}
            >
              &copy; E-workers Pvt. Ltd
            </Typography>
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
                <MUILink
                  href="https://reactjs.org"
                  target="_blank"
                  style={{ textDecoration: "none", color: "#E75480" }}
                >
                  <TwitterIcon color="white" />
                </MUILink>
              </Grid>
              <Grid item>
                <MUILink
                  href="https://reactjs.org"
                  target="_blank"
                  style={{ textDecoration: "none", color: "#E75480" }}
                >
                  <FacebookRoundedIcon color="white" />
                </MUILink>
              </Grid>
              <Grid item>
                <MUILink
                  href="https://reactjs.org"
                  target="_blank"
                  style={{ textDecoration: "none", color: "#E75480" }}
                >
                  <InstagramIcon color="white" />
                </MUILink>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Footer;
