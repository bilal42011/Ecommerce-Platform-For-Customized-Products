import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
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

const truncate = (string = "", maxLength = 50) =>
  string.length > maxLength ? `${string.substring(0, maxLength)}…` : string;

export default function ProductCard({ product, showActions }) {
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
        <Link style={{ color: "inherit" }} to={`products/${product.id}/edit`}>
          {" "}
          Edit
        </Link>
      </MenuItem>
      <MenuItem onClick={handleProductDelete}>Delete</MenuItem>
    </Menu>
  );

  return (
    <Card variant="outlined">
      <CardMedia component="img" height={250} image={product.image} />
      <CardContent component={Stack} spacing={1}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar>{product.ownername.charAt(0)}</Avatar>

          <Typography sx={{ flexGrow: 1 }} ml={1}>
            {product.ownername}
          </Typography>
          {showActions && (
            <IconButton onClick={(e) => setAnchorElem(e.currentTarget)}>
              <MoreVertIcon />
            </IconButton>
          )}
        </Box>
        <Link
          to={product.url}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography variant="h5" fontWeight={"bold"} component={"h2"}>
            {product.title}
          </Typography>
        </Link>
        <Rating readOnly value={product.rating} />
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
        >
          Add to Cart
        </Button>
      </CardActions>
      {actionsMenu}
    </Card>
  );
}
