import { Divider, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import ActiveOrdersTable from "../Components/Dashboard/ActiveOrdersTable";
import SellerProfileDescription from "../Components/SellerProfileDescription";

export default function Dashboard() {
  const user = {
    username: "username",
    full_name: "Full Name",
    aggregated_rating: 5,
    total_reviews: 125,
    avatar: "",
    city: "Islamabad",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    orders: [
      {
        id: 1,
        buyerUsername: "user333",
        price: 5000,
        timeRemaining: "2 Days 1 Hour",
      },
      {
        id: 1,
        buyerUsername: "user333",
        price: 5000,
        timeRemaining: "2 Days 1 Hour",
        isDeliverd: true,
      },
      {
        id: 1,
        buyerUsername: "user333",
        price: 5000,
        timeRemaining: "2 Days 1 Hour",
      },
      {
        id: 1,
        buyerUsername: "user333",
        price: 5000,
        timeRemaining: "2 Days 1 Hour",
      },

      {
        id: 1,
        buyerUsername: "user333",
        price: 5000,
        timeRemaining: "2 Days 1 Hour",
      },
      {
        id: 1,
        buyerUsername: "user333",
        price: 5000,
        timeRemaining: "2 Days 1 Hour",
      },
    ],
  };

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
