import { Divider, Rating, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import ProductForm from "./ProductForm";

export default function ProductInfo({ product }) {
  return (
    <Stack spacing={2}>
      <Typography variant="h3" component="h1" fontWeight="bold">
        {product.title}
      </Typography>
      <Link to={`/users/${product.ownerId._id}`}>
        <Typography fontWeight="bold">By {product.ownerId.fullName}</Typography>
      </Link>
      <Box display={"flex"} alignItems="center">
        <Rating value={product.rating || 0} readOnly />
        <Typography ml={1}>({product.rating || 0})</Typography>
      </Box>
      <Typography>Rs. {product.price.toLocaleString()} /-</Typography>
      <Divider sx={{ mt: 2 }} />
      <ProductForm product={product} />
      <Typography variant="h4">Description</Typography>
      <Typography variant="body1">{product.description}</Typography>
    </Stack>
  );
}
