import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import CityChooser from "../CityChooser";
import { CreditCard } from "@mui/icons-material";
import { useState } from "react";
import { isLetters, isValidPhone } from "../../assets/js/utils";
import { useDispatch } from "react-redux";
import { uiActions } from "../../Store/Slices/uiSlice";

export default function ShippingDetails({ userInfo, onChange, onCheckout }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(userInfo);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isLetters(formData.firstName) || !isLetters(formData.lastName)) {
      return dispatch(
        uiActions.setAlert({
          title: "Error",
          text: "Name can't contain number or symbols",
          severity: "error",
        })
      );
    }

    if (!isValidPhone(formData.phone)) {
      return dispatch(
        uiActions.setAlert({
          title: "Error",
          text: "Phone number must be a valid mobile phone number",
          severity: "error",
        })
      );
    }

    onCheckout(formData);
  };

  return (
    <Card variant="outlined">
      <CardHeader title="Shipping Details" />
      <Divider />
      <CardContent component="form" onSubmit={onSubmit}>
        <Grid container spacing={1} rowSpacing={4}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="First Name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData((old) => {
                  return { ...old, firstName: e.target.value };
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Last Name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData((old) => {
                  return { ...old, lastName: e.target.value };
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <CityChooser
              required
              value={formData.city}
              onChange={(e) =>
                setFormData((old) => {
                  return { ...old, city: e.target.value };
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Address"
              value={formData.address}
              onChange={(e) =>
                setFormData((old) => {
                  return { ...old, address: e.target.value };
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Phone Number"
              sx={{ alignItems: "center" }}
              value={formData.phone}
              onChange={(e) =>
                setFormData((old) => {
                  return { ...old, phone: e.target.value };
                })
              }
              InputProps={{
                startAdornment: <Typography sx={{ mr: 1 }}>+92</Typography>,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              type="submit"
              endIcon={<CreditCard />}
              fullWidth
            >
              Checkout
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
