import { Button, Icon, Stack } from "@mui/material";
import { Chat } from "@mui/icons-material";
import ProductSizes from "./ProductSizes";
import QuantityInput from "./QuantityInput/QuantityInput";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../Store/Slices/cartSlice";
import { uiActions } from "../Store/Slices/uiSlice";

export default function ProductForm({ product }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const existingProduct = products.find((elem) => elem._id === product._id);

  const onSubmit = (e) => {
    e.preventDefault();
    const cartProduct = {
      _id: product._id,
      quantity,
    };

    if (!user) {
      dispatch(
        uiActions.setAlert({
          title: "Error",
          text: "You must login to buy a product",
          severity: "error",
        })
      );
      navigate("/login");
    }

    if (product.ownerId._id === user._id) {
      return dispatch(
        uiActions.setAlert({
          title: "Error",
          text: "You're the owner of this product",
          severity: "error",
        })
      );
    }

    if (
      cartProduct.quantity > product.quantity ||
      (existingProduct &&
        existingProduct.quantity + cartProduct.quantity > product.quantity)
    ) {
      return dispatch(
        uiActions.setAlert({
          title: "Error",
          text: "Not enough stock!",
          severity: "error",
        })
      );
    }

    dispatch(cartActions.addItem({ product: cartProduct }));
    dispatch(
      uiActions.setAlert({
        title: "Item Added",
        text: "Successfully Added to Cart",
        severity: "success",
      })
    );
  };

  return (
    <Stack component={"form"} onSubmit={onSubmit} spacing={2}>
      {product.sizes && product.sizes.length > 0 && (
        <ProductSizes sizes={product.sizes} />
      )}
      <QuantityInput
        max={product.quantity}
        value={quantity}
        onChange={(newValue) => setQuantity(newValue)}
      />
      <Button variant="contained" type="submit">
        Buy Now <Icon></Icon>
      </Button>
      <Link
        className="ghost-link"
        to="/profile/chats"
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
