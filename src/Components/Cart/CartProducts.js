import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  List,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import CartProductItem from "./CartProductItem";

export default function CartProducts({ cart, onProductRemove }) {
  return (
    <Card variant="outlined">
      <CardHeader title="Order Details" />
      <Divider />
      <CardContent component={Stack}>
        <List sx={{ flexGrow: 1 }}>
          {cart.products.map((item, key) => {
            return (
              <CartProductItem
                key={key}
                item={item}
                onProductRemove={onProductRemove}
              />
            );
          })}
        </List>
        <Divider />
        <Stack p={2} direction="row" justifyContent="space-between">
          <Typography component="h3" variant="h5">
            Total
          </Typography>
          <Typography component="h3" variant="h5" fontWeight="bold">
            Rs. {cart.total.toLocaleString()} /-
          </Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Link to="/browse">
          <Button variant="outlined" fullWidth>
            Continue Shopping
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
