import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import ProductCard from "../Components/ProductCard";
import SellerProfileDescription from "../Components/SellerProfileDescription";
import Reviews from "../Components/ProductPage/Reviews";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axiosInstance, { endPoints } from "../axiosInstance";
import { useParams, Link, useNavigate } from "react-router-dom";
import OverlaySpinner from "../Components/OverlaySpinner";
import { Add, ArrowRight } from "@mui/icons-material";
import { uiActions } from "../Store/Slices/uiSlice";
import { cartActions } from "../Store/Slices/cartSlice";

export default function UserProfile({ dashboard }) {
  const [user, setUser] = useState(null);
  const { token, user: selfUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { userId } = useParams();
  const navigate = useNavigate();

  const fetchUser = async () => {
    let id = `${userId ? "public/" + userId : ""}`;
    try {
      const response = await axiosInstance.get(`${endPoints.USER}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data.user);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  const { products } = useSelector((state) => state.cart);
  const onAddToCart = (product) => {
    const cartProduct = {
      _id: product._id,
      quantity: 1,
    };
    const existingProduct = products.find((elem) => elem._id === product._id);

    console.log(product, user);
    if (product.ownerId === user._id) {
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
  if (userId === selfUser._id) {
    return navigate("/profile");
  }

  if (!user)
    return (
      <Container maxWidth="xl" sx={{ mt: 15 }}>
        <OverlaySpinner />
      </Container>
    );

  return (
    <Container maxWidth="xl" sx={{ mt: 15 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4}>
          <SellerProfileDescription user={user} dashboard={dashboard} />
          {/* <Reviews rating={user.fullRating} /> */}
        </Grid>
        <Grid container item xs={12} sm={8} spacing={1}>
          {/* Products by seller */}
          {user.products.length === 0 && user.isSeller ? (
            <Box
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: "100%",
              }}
            >
              <Typography variant="h5" color="GrayText">
                No Ready Made Products Available
                {!userId && (
                  <Link to="/profile/products/create" className="ghost-link">
                    <Button endIcon={<ArrowRight />}>
                      Create your first Product
                    </Button>
                  </Link>
                )}
              </Typography>
            </Box>
          ) : (
            <>
              {user.products.map((item, index) => {
                return (
                  <Grid item xs={12} md={6} lg={4} key={index}>
                    <ProductCard
                      product={item}
                      showActions={dashboard}
                      user={user}
                      onAddToCart={() => onAddToCart(item)}
                      onDelete={() => fetchUser()}
                    />
                  </Grid>
                );
              })}
            </>
          )}
          {!userId &&
            user.isSeller(
              <Grid item xs={12} md={6} lg={4}>
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  height={"100%"}
                >
                  <Link to="products/create">
                    <Button startIcon={<Add />}> Create New Product</Button>
                  </Link>
                </Stack>
              </Grid>
            )}
        </Grid>
      </Grid>
    </Container>
  );
}
