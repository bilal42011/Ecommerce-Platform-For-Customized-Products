import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormLabel,
  Grid,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance, { endPoints } from "../axiosInstance";
import AvatarChooser from "../Components/AvatarChooser/AvatarChooser";
import CityChooser from "../Components/CityChooser";
import { authActions } from "../Store/Slices/authSlice/authSlice";

export default function EditProfile() {
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formDataJson, setFormData] = useState({
    description: "",
    ...user,
    password: "",
    confirmPassword: "",
  });

  const onSaveChanges = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(formDataJson).forEach((key) =>
      formData.append(key, formDataJson[key])
    );

    try {
      const response = await axiosInstance.patch(endPoints.USER, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(authActions.updateUser(response.data.user));
      navigate("/profile");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <Card sx={{ maxWidth: "md", margin: "auto", mt: 15 }}>
      <CardHeader title="Edit Your Profile" subheader="Join E-workers today" />
      <Divider />
      <CardContent component={"form"} onSubmit={onSaveChanges}>
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
          {/* <Grid item xs={12} md={6}>
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
          </Grid> */}
          <Grid item xs={12}>
            <TextField
              label="Description"
              fullWidth
              InputProps={{
                type: "text",
              }}
              multiline
              rows={5}
              value={formDataJson.description}
              onChange={(e) =>
                setFormData({
                  ...formDataJson,
                  description: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth>
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
