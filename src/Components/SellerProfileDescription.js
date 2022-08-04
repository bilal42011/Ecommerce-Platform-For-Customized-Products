import React from "react";
import {
  Paper,
  Avatar,
  Typography,
  Stack,
  Button,
  Rating,
  Divider,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import { Link } from "react-router-dom";

const SellerProfileDescription = ({ user, dashboard }) => {
  return (
    <>
      <Paper
        variant="outlined"
        sx={{ p: 2, textAlign: "center" }}
        component={Stack}
        spacing={1}
      >
        <Avatar sx={{ width: 125, height: 125, m: "auto" }} src={user.avatar}>
          {user.username.charAt(0)}
        </Avatar>
        <Typography variant="h6">{user.full_name}</Typography>
        <Typography variant="body2" marginTop={"0px"}>
          {user.username}
        </Typography>
        {user.aggregated_rating && (
          <Stack
            direction="row"
            justifyContent={"center"}
            alignItems="center"
            spacing={1}
          >
            <Rating readOnly value={user.aggregated_rating} />{" "}
            <Typography fontWeight="bold">{user.aggregated_rating}</Typography>
            <Typography color="GrayText">
              ({user.total_reviews} reviews)
            </Typography>
          </Stack>
        )}
        <Stack direction={"row"} justifyContent="space-between">
          <Typography
            textAlign="left"
            alignItems="center"
            sx={{ display: "flex" }}
          >
            <PlaceIcon sx={{ mr: 1, verticalAlign: "middle" }} /> City
          </Typography>
          <Typography fontWeight="bold">{user.city}</Typography>
        </Stack>
        <Divider />
        {!dashboard ? (
          <Button variant="contained">
            <Link
              to="/profile/userid/chats"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Contact Me
            </Link>
          </Button>
        ) : (
          <Button variant="contained">
            <Link
              to="/profile/userid/edit"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Edit Profile
            </Link>
          </Button>
        )}
      </Paper>
      {user.description && (
        <Paper
          variant="outlined"
          sx={{ p: 2, mt: 1 }}
          component={Stack}
          spacing={1}
        >
          <Typography variant="h6">DESCRIPTION</Typography>
          <Typography>{user.description}</Typography>
        </Paper>
      )}
    </>
  );
};

export default SellerProfileDescription;
