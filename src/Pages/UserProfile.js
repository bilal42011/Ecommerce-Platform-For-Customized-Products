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
import { useParams, Link } from "react-router-dom";
import OverlaySpinner from "../Components/OverlaySpinner";
import { Add, ArrowRight } from "@mui/icons-material";
import { uiActions } from "../Store/Slices/uiSlice";
import { cartActions } from "../Store/Slices/cartSlice";

export default function UserProfile() {
  // const user = {
  //   username: "username",
  //   full_name: "Full Name",
  //   aggregated_rating: 5,
  //   total_reviews: 125,
  //   avatar: avatarImage,

  //   city: "Islamabad",
  //   fullRating: {
  //     average: 5.0,
  //     count: 125,
  //     reviews: [
  //       {
  //         rating: 5.0,
  //         user: {
  //           username: "user2020",
  //           fullname: "Dr. User",
  //         },
  //         description:
  //           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit provident, quia consequuntur quidem optio maxime tempora voluptatibus repudiandae ipsum. In, quidem perferendis. Veniam, unde. Eum totam quam iusto maiores aliquid!",
  //       },
  //     ],
  //   },
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   products: [
  //     {
  //       id: 12312,
  //       image:
  //         "https://cdn.shopify.com/s/files/1/2980/5140/products/LoomSolar2rowDesign4PanelStand375watt_2.jpg?v=1624973202",
  //       ownername: "user3385",
  //       title: "Solar Panel Stand",
  //       rating: 4,
  //       description:
  //         "The flat roof solar panel mounting system Solar triangular bracket, with innovative triangular to save cost both on installation and transportation. It is installed directly on a rooftop or pre-made concrete cement block. All kinds of panels can be installed which will save time for your project.",
  //       price: 4999,
  //       url: "/products/solar-panel-stand",
  //     },
  //     {
  //       id: 23424,
  //       image:
  //         "https://image.made-in-china.com/202f0j00dcNiRtCWrkob/Aluminum-Alloy-Solar-Rail-Solar-Panel-Module-Stand-Bracket.jpg",
  //       ownername: "user3385",
  //       title: "Solar Panel Stand",
  //       rating: 4,
  //       description:
  //         "The flat roof solar panel mounting system Solar triangular bracket, with innovative triangular to save cost both on installation and transportation. It is installed directly on a rooftop or pre-made concrete cement block. All kinds of panels can be installed which will save time for your project.",
  //       price: 4999,
  //       url: "/products/solar-panel-stand",
  //     },
  //     {
  //       id: 3542,
  //       image:
  //         "https://5.imimg.com/data5/YY/QQ/MY-4005949/solar-panel-stand-500x500.jpg",
  //       ownername: "user3385",
  //       title: "Solar Panel Stand",
  //       rating: 4,
  //       description:
  //         "The flat roof solar panel mounting system Solar triangular bracket, with innovative triangular to save cost both on installation and transportation. It is installed directly on a rooftop or pre-made concrete cement block. All kinds of panels can be installed which will save time for your project.",
  //       price: 4999,
  //       url: "/products/solar-panel-stand",
  //     },
  //     {
  //       id: 2345,
  //       image:
  //         "https://s.alicdn.com/@sc04/kf/H2e7f5b3f0b9945baa1e49e747c996b51w.jpg_300x300.jpg",
  //       ownername: "user3385",
  //       title: "Solar Panel Stand",
  //       rating: 4,
  //       description:
  //         "The flat roof solar panel mounting system Solar triangular bracket, with innovative triangular to save cost both on installation and transportation. It is installed directly on a rooftop or pre-made concrete cement block. All kinds of panels can be installed which will save time for your project.",
  //       price: 4999,
  //       url: "/products/solar-panel-stand",
  //     },
  //   ],
  // };

  const [user, setUser] = useState(null);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { userId } = useParams();

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
    if (product.ownerId == user._id) {
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
          <SellerProfileDescription user={user} dashboard={!userId} />
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
                      showActions
                      user={user}
                      onAddToCart={() => onAddToCart(item)}
                    />
                  </Grid>
                );
              })}
            </>
          )}
          {!userId && (
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
