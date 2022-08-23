import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { apiServerUrl } from "../../assets/js/utils";

export default function CartProducts({ cart, onProductRemove }) {
  return (
    <Card variant="outlined">
      <CardHeader title="Order Details" />
      <Divider />
      <CardContent component={Stack}>
        <List sx={{ flexGrow: 1 }}>
          {cart.products.map((item, key) => {
            return (
              <ListItem key={key}>
                <ListItemButton component={Link} to={`/products/${item._id}`}>
                  <ListItemAvatar>
                    <Avatar
                      variant="rounded"
                      src={apiServerUrl(item.images[0].path)}
                    ></Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.title}
                    secondary={
                      <>
                        <Typography component="span">
                          Rs. {item.price.toLocaleString()} /-
                        </Typography>
                        {" X "}
                        <Typography component="span" fontWeight="bold">
                          {item.quantity < 10 && "0"}
                          {item.quantity}
                        </Typography>
                      </>
                    }
                  ></ListItemText>
                </ListItemButton>
                <ListItemSecondaryAction>
                  <IconButton
                    onClick={(e) => onProductRemove && onProductRemove(e, item)}
                  >
                    <Close />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
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
        <Button variant="outlined" fullWidth>
          Continue Shopping
        </Button>
      </CardActions>
    </Card>
  );
}
