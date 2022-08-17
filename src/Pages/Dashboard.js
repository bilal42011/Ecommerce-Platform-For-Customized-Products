import { Divider, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useSelector } from "react-redux";
import ActiveOrdersTable from "../Components/Dashboard/ActiveOrdersTable";
import SellerProfileDescription from "../Components/SellerProfileDescription";

export default function Dashboard() {
  const user = useSelector((state) => state.auth.user?.user);

  return (
    <Container maxWidth="xl" sx={{ mt: 15 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4}>
          <SellerProfileDescription user={user} dashboard />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper variant="outlined">
            <Typography px={2} py={1} variant="h5">
              Active Orders
            </Typography>
            <Divider />
            <ActiveOrdersTable orders={user.orders} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
