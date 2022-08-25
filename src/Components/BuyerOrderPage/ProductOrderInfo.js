import { Paper, Grid, Typography, Divider, Stack } from "@mui/material";
import { Box } from "@mui/system";

import CartProductItem from "../Cart/CartProductItem";
import SellerProfileDescription from "../SellerProfileDescription";

export default function ProductOrderInfo({ order, user, hideSeller }) {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={hideSeller ? 12 : 8}>
        <Paper variant="outlined">
          <CartProductItem
            item={order.productId}
            quantity={order.productQuantity}
            hideActions
          />
        </Paper>
        <Paper variant="outlined" sx={{ mt: 1, p: 2 }}>
          <Box>
            <Typography variant="h5" fontWeight="bold">
              Shipping Info
            </Typography>
            <Divider />
            <Stack direction="row" alignItems={"center"}>
              <Typography variant="subtitle1">First Name</Typography>
              <Typography sx={{ ml: 2 }} fontWeight={"bold"}>
                {order.shippingInfo.firstName}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems={"center"}>
              <Typography variant="subtitle1">Last Name</Typography>
              <Typography sx={{ ml: 2 }} fontWeight={"bold"}>
                {order.shippingInfo.lastName}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems={"center"}>
              <Typography variant="subtitle1">City</Typography>
              <Typography sx={{ ml: 2 }} fontWeight={"bold"}>
                {order.shippingInfo.city}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems={"center"}>
              <Typography variant="subtitle1">Address</Typography>
              <Typography sx={{ ml: 2 }} fontWeight={"bold"}>
                {order.shippingInfo.address}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems={"center"}>
              <Typography variant="subtitle1">Phone</Typography>
              <Typography sx={{ ml: 2 }} fontWeight={"bold"}>
                0{order.shippingInfo.phone}
              </Typography>
            </Stack>
          </Box>
        </Paper>
      </Grid>
      {!hideSeller && (
        <Grid item xs={12} sm={4}>
          <SellerProfileDescription user={user} />
        </Grid>
      )}
    </Grid>
  );
}
