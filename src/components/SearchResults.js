import { CircularProgress, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../Store/Slices/cartSlice";
import { uiActions } from "../Store/Slices/uiSlice";
import ProductCard from "./ProductCard";

export default function SearchResults({ results }) {
  const { user } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const onAddToCart = (product) => {
    const cartProduct = {
      _id: product._id,
      quantity: 1,
    };
    const existingProduct = products.find((elem) => elem._id === product._id);

    if (!user) {
      return dispatch(
        uiActions.setAlert({
          title: "Error",
          text: "Please Login to buy this product",
          severity: "error",
        })
      );
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
    <Box sx={{ mt: 2 }}>
      {results ? (
        <Grid container spacing={1}>
          {results.map((item, index) => {
            return (
              <Grid key={index} item xs={12} md={3}>
                <ProductCard
                  product={item}
                  user={item.ownerId}
                  onAddToCart={() => onAddToCart(item)}
                />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <CircularProgress sx={{ margin: "auto" }} />
      )}
    </Box>
  );
}
