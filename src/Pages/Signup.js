import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import AvatarChooser from "../Components/AvatarChooser/AvatarChooser";
import CityChooser from "../Components/CityChooser";
import { useSelector, useDispatch } from "react-redux/";
import { reset } from "../Store/Slices/authSlice/authSlice";
import { register } from "../Store/Slices/authSlice/authSlice";

export default function SignUp() {
  let navigate = useNavigate();
  let auth = useSelector((state) => state.auth);
  let { user, isLoading, isSuccess, isError, message } = auth;
  let dispatch = useDispatch();

  const [formDataJson, setFormData] = useState({
    firstName: "",
    lastName: "",
    avatar: {},
    city: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
  });

  const onSignUp = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(formDataJson).forEach(
      (key) => key !== "avatar" && formData.append(key, formDataJson[key])
    );
    formData.append("avatar", formDataJson.avatar);

    dispatch(register(formData));
  };

  useEffect(() => {
    console.log(auth);
    if (isSuccess) {
      navigate("/profile/123");
    }
    if (isError) {
      console.log("Error occured");
    }
    dispatch(reset());
  }, [isSuccess, isError]);

  console.log("component rendered");

  return (
    <Card sx={{ maxWidth: "md", margin: "auto", mt: 15 }}>
      <CardHeader title="SignUp" subheader="Join E-workers today" />
      <Divider />
      <CardContent component={"form"} onSubmit={onSignUp}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <AvatarChooser
              value={formDataJson.avatar}
              onChange={(file) => {
                setFormData({ ...formDataJson, avatar: file });
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              label="First Name"
              fullWidth
              value={formDataJson.firstName}
              onChange={(e) =>
                setFormData({ ...formDataJson, firstName: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              label="Last Name"
              fullWidth
              value={formDataJson.lastName}
              onChange={(e) =>
                setFormData({ ...formDataJson, lastName: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <CityChooser
              value={formDataJson.city}
              onChange={(e) =>
                setFormData({ ...formDataJson, city: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              required
              label="Address"
              fullWidth
              value={formDataJson.address}
              onChange={(e) =>
                setFormData({ ...formDataJson, address: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Email"
              fullWidth
              InputProps={{
                inputMode: "email",
                type: "email",
              }}
              value={formDataJson.email}
              onChange={(e) =>
                setFormData({ ...formDataJson, email: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              label="Phone Number"
              InputProps={{
                inputMode: "numeric",
                type: "number",
              }}
              fullWidth
              value={formDataJson.phone}
              onChange={(e) =>
                setFormData({ ...formDataJson, phone: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              label="Password"
              fullWidth
              InputProps={{
                type: "password",
              }}
              value={formDataJson.password}
              onChange={(e) =>
                setFormData({ ...formDataJson, password: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              label="Confirm Password"
              fullWidth
              InputProps={{
                type: "password",
              }}
              value={formDataJson.confirmPassword}
              onChange={(e) =>
                setFormData({
                  ...formDataJson,
                  confirmPassword: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox required />}
              label="I accept Terms and Conditions"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth>
              SignUp
            </Button>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Typography variant="body2" sx={{ paddingX: 1 }}>
          Already have an account? <Link to="/login">Sign In</Link>{" "}
        </Typography>
      </CardActions>
    </Card>
  );
}
