import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import CityChooser from "../CityChooser";
import { CreditCard } from "@mui/icons-material";

export default function ShippingDetails({ userInfo, onChange }) {
  return (
    <Card variant="outlined">
      <CardHeader title="Shipping Details" />
      <Divider />
      <CardContent component="form">
        <Grid container spacing={1} rowSpacing={4}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="First Name"
              value={userInfo.firstName || ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Last Name"
              value={userInfo.lastName || ""}
            />
          </Grid>
          <Grid item xs={12}>
            <CityChooser value={userInfo.city} />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              value={userInfo.address || ""}
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
