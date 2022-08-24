import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { useState } from "react";
import { apiServerUrl, truncate } from "../assets/js/utils";

export default function ProductCard({
  product,
  showActions,
  user,
  onAddToCart,
}) {
  const [anchorElem, setAnchorElem] = useState(null);

  const handleProductDelete = (e) => {};
  const actionsMenu = (
    <Menu
      anchorEl={anchorElem}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id="product-actions-menu"
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={anchorElem !== null}
      onClose={() => setAnchorElem(null)}
    >
      <MenuItem>
        <Link style={{ color: "inherit" }} to={`products/${product._id}/edit`}>
          {" "}
          Edit
        </Link>
      </MenuItem>
      <MenuItem onClick={handleProductDelete}>Delete</MenuItem>
    </Menu>
  );

  return (
    <Card variant="outlined">
      <CardMedia
        component="img"
        height={250}
        image={apiServerUrl(product.images[0].path)}
      />
      <CardContent component={Stack} spacing={1}>
        <CardHeader
          sx={{ flexGrow: 1, p: 0 }}
          title={
            <Link to={`/products/${product._id}`} className="ghost-link">
              <Typography variant="h5" fontWeight={"bold"} component={"h2"}>
                {product.title}
              </Typography>
            </Link>
          }
          action={
            showActions && (
              <IconButton onClick={(e) => setAnchorElem(e.currentTarget)}>
                <MoreVertIcon />
              </IconButton>
            )
          }
        />
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar src={apiServerUrl(user.avatar)}>
            {user.fullName.charAt(0)}
          </Avatar>
          <Typography color="GrayText">{user.fullName}</Typography>
        </Stack>
        <Link
          to={product._id}
          style={{ textDecoration: "none", color: "inherit" }}
        ></Link>

        {product.rating && <Rating readOnly value={product.rating} />}
        <Typography>{truncate(product.description, 200)}</Typography>
      </CardContent>
      <CardActions sx={{ padding: ".5em 1em" }}>
        <Typography fontWeight={"bold"}>
          Rs. {product.price.toLocaleString()} /-
        </Typography>
        <Button
          sx={{ flexGrow: 1, ml: 2 }}
          variant="contained"
          disableElevation
          onClick={onAddToCart}
        >
          Add to Cart
        </Button>
      </CardActions>
      {actionsMenu}
    </Card>
  );
}
