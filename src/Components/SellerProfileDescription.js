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
import { apiServerUrl } from "../assets/js/utils";

const SellerProfileDescription = ({ user, dashboard }) => {
  return (
    <>
      <Paper
        variant="outlined"
        sx={{ p: 2, textAlign: "center" }}
        component={Stack}
        spacing={1}
      >
        <Avatar
          sx={{ width: 125, height: 125, m: "auto" }}
          src={apiServerUrl(user.avatar)}
        >
          {user.fullName?.charAt(0)}
        </Avatar>
        <Typography variant="h6">{user.fullName}</Typography>
        <Typography variant="body2" marginTop={"0px"}>
          {user.city}
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
          <>
            <Link className="ghost-link" to="/profile/chats">
              <Button variant="contained" fullWidth>
                Contact Me
              </Button>
            </Link>
            <Link className="ghost-link" to={`/users/${user._id}`}>
              <Button variant="outlined" fullWidth>
                View Profile
              </Button>
            </Link>
          </>
        ) : (
          <Link className="ghost-link" to="/profile/edit">
            <Button variant="contained" fullWidth>
              Edit Profile
            </Button>
          </Link>
        )}
      </Paper>

      <Paper
        variant="outlined"
        sx={{ p: 2, mt: 1 }}
        component={Stack}
        spacing={1}
      >
        <Typography variant="h6">DESCRIPTION</Typography>
        <Typography>
          {user.description ? user.description : "No Description Provided"}
        </Typography>
      </Paper>
    </>
  );
};

export default SellerProfileDescription;
