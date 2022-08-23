import { Divider, Rating, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ProductForm from "./ProductForm";

export default function ProductInfo({ product }) {
  return (
    <Stack spacing={2}>
      <Typography variant="h3" component="h1" fontWeight="bold">
        {product.title}
      </Typography>
      <Typography fontWeight="bold">By {product.ownername}</Typography>
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
