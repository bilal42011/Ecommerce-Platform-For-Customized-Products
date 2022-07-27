import { Button, Icon, Stack } from "@mui/material";
import { Chat } from "@mui/icons-material";
import ProductSizes from "./ProductSizes";
import QuantityInput from "./QuantityInput/QuantityInput";

export default function ProductForm({ product }) {
  return (
    <Stack component={"form"} onSubmit={(e) => e.preventDefault()} spacing={2}>
      {product.sizes && product.sizes.length > 0 && (
        <ProductSizes sizes={product.sizes} />
      )}
      <QuantityInput />
      <Button variant="contained">
        Buy Now <Icon></Icon>
      </Button>
      <Button type="button" variant="outlined">
        Contact Seller
        <Chat sx={{ ml: 2 }} />
      </Button>
    </Stack>
  );
}
