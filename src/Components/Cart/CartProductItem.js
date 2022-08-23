import { Close } from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { apiServerUrl } from "../../assets/js/utils";

export default function CartProductItem({
  item,
  onProductRemove,
  hideActions,
  quantity,
}) {
  const tempQuantity = quantity || item.quantity;

  return (
    <ListItem>
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
                {tempQuantity < 10 && "0"}
                {tempQuantity}
              </Typography>
            </>
          }
        ></ListItemText>
      </ListItemButton>
      {!hideActions && (
        <ListItemSecondaryAction>
          <IconButton
            onClick={(e) => onProductRemove && onProductRemove(e, item)}
          >
            <Close />
          </IconButton>
        </ListItemSecondaryAction>
      )}
    </ListItem>
  );
}
