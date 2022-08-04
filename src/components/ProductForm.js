import { Button, Icon, Stack } from "@mui/material";
import { Chat } from "@mui/icons-material";
import ProductSizes from "./ProductSizes";
import QuantityInput from "./QuantityInput/QuantityInput";
import { Link } from "react-router-dom";

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
      <Link
        className="ghost-link"
        to="/profile/userId/chats"
        style={{ width: "100%" }}
      >
        <Button type="button" variant="outlined" fullWidth>
          Contact Seller
          <Chat sx={{ ml: 2 }} />
        </Button>
      </Link>
    </Stack>
  );
}
