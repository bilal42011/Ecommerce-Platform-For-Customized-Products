import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const truncate = (string = "", maxLength = 50) =>
  string.length > maxLength ? `${string.substring(0, maxLength)}…` : string;

export default function ProductCard({ product }) {
  return (
    <Link to={product.url} style={{ textDecoration: "none" }}>
      <Card variant="outlined">
        <CardMedia component="img" height={200} image={product.image} />
        <CardContent component={Stack} spacing={1}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar>{product.ownername.charAt(0)}</Avatar>
            <Typography ml={1}>{product.ownername}</Typography>
          </Box>
          <Typography variant="h5" fontWeight={"bold"} component={"h2"}>
            {product.title}
          </Typography>
          <Rating readOnly value={product.rating} />
          <Typography>{truncate(product.description, 200)}</Typography>
        </CardContent>
        <CardActions sx={{ padding: ".5em 1em" }}>
          <Typography fontWeight={"bold"}>
            Rs. {product.price.toLocaleString()} /-
          </Typography>
          <Button sx={{ flexGrow: 1, ml: 2 }} variant="contained">
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
}
