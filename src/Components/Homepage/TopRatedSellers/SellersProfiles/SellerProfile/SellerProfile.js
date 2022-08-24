import React from "react";
import { Grid, Avatar, Typography, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Place } from "@mui/icons-material";
import { Link } from "react-router-dom";

const SellerProfile = ({ id, avatarSrc, name, city, description }) => {
  return (
    <Grid
      container
      sx={{
        p: 3.5,
        border: "1px solid #808080",
        borderRadius: "8px",
        paddingBottom: "-20px",
        backgroundColor: "white",
      }}
      rowSpacing={2}
      alignItems="center"
      direction="column"
      justifyContent="center"
    >
      <Grid item>
        <Avatar sx={{ width: 120, height: 120 }} src={avatarSrc} />
      </Grid>

      <Grid item>
        <Link to={`users/${id}`} className="ghost-link">
          <Typography
            fontFamily="Roboto Condensed, sans-serif"
            variant="p"
            fontWeight="bold"
            fontSize="24px"
          >
            {name}
          </Typography>
        </Link>
      </Grid>

      <Grid item>
        <Typography>
          <Place sx={{ verticalAlign: "middle" }} /> {city}
        </Typography>
      </Grid>

      <Grid item>
        <Typography
          variant="body1"
          fontFamily="Roboto , sans-serif"
          textAlign="center"
          fontSize="21px"
          sx={{
            "&:hover": {
              color: "rgb(29, 191, 115)",
            },
          }}
        >
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SellerProfile;
