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
import { Link } from "react-router-dom";

import { useState } from "react";
import AvatarChooser from "../../components/AvatarChooser/AvatarChooser";
import CityChooser from "../../components/CityChooser";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    avatar: "",
    city: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onSignUp = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Card sx={{ maxWidth: "md", margin: "auto" }}>
      <CardHeader title="SignUp" subheader="Join E-workers today" />
      <Divider />
      <CardContent component={"form"} onSubmit={onSignUp}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <AvatarChooser
              value={formData.avatar}
              onChange={(e) => {
                setFormData({ ...formData, avatar: e.target.value });
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="First Name"
              fullWidth
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Last Name"
              fullWidth
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <CityChooser
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              label="Phone Number"
              fullWidth
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              fullWidth
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Password"
              fullWidth
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Last Name"
              fullWidth
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
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
