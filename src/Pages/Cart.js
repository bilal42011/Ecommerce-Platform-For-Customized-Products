import { Grid, Typography } from "@mui/material";

import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance, { endPoints } from "../axiosInstance";
import CartProducts from "../Components/Cart/CartProducts";
import ShippingDetails from "../Components/Cart/ShippingDetails";
import { uiActions } from "../Store/Slices/uiSlice";
import { cartActions } from "../Store/Slices/cartSlice";

const user = {
  firstName: "Safwan",
  lastName: "Karim",
  city: "Islamabad",
  address: "XYZ Town Bharakahu",
};

const cart = {
  total: 8900,
  products: [
    {
      id: 12312,
      image:
        "https://cdn.shopify.com/s/files/1/2980/5140/products/LoomSolar2rowDesign4PanelStand375watt_2.jpg?v=1624973202",
      ownername: "user3385",
      title: "Solar Panel Stand",
      rating: 4,
      quantity: 2,
      description:
        "The flat roof solar panel mounting system Solar triangular bracket, with innovative triangular to save cost both on installation and transportation. It is installed directly on a rooftop or pre-made concrete cement block. All kinds of panels can be installed which will save time for your project.",
      price: 4999,
      url: "/products/solar-panel-stand",
    },
    {
      id: 23424,
      image:
        "https://image.made-in-china.com/202f0j00dcNiRtCWrkob/Aluminum-Alloy-Solar-Rail-Solar-Panel-Module-Stand-Bracket.jpg",
      ownername: "user3385",
      title: "Solar Panel Stand",
      rating: 4,
      quantity: 1,
      description:
        "The flat roof solar panel mounting system Solar triangular bracket, with innovative triangular to save cost both on installation and transportation. It is installed directly on a rooftop or pre-made concrete cement block. All kinds of panels can be installed which will save time for your project.",
      price: 4999,
      url: "/products/solar-panel-stand",
    },
    {
      id: 23424,
      image:
        "https://image.made-in-china.com/202f0j00dcNiRtCWrkob/Aluminum-Alloy-Solar-Rail-Solar-Panel-Module-Stand-Bracket.jpg",
      ownername: "user3385",
      title: "Solar Panel Stand",
      rating: 4,
      quantity: 1,
      description:
        "The flat roof solar panel mounting system Solar triangular bracket, with innovative triangular to save cost both on installation and transportation. It is installed directly on a rooftop or pre-made concrete cement block. All kinds of panels can be installed which will save time for your project.",
      price: 4999,
      url: "/products/solar-panel-stand",
    },
  ],
};

export default function Cart() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const products = useSelector((state) => state.cart.products);

  const [cart, setCart] = useState(null);

  const calculateCart = async () => {
    dispatch(uiActions.setLoading(true));
    try {
      const response = await axiosInstance.post(endPoints.CART, products);
      const temp = {
        products: response.data.products,
        total: response.data.total,
      };
      setCart(temp);
    } catch (error) {
      console.log(error);
      dispatch(
        uiActions.setAlert({
          severity: "error",
          text: "ERROR: " + error.response.data.message || error.message,
        })
      );
    }
    dispatch(uiActions.setLoading(false));
  };

  useEffect(() => {
    calculateCart();
  }, []);

  if (!products || !products.length) {
    return (
      <Container
        maxWidth="xl"
        sx={{
          mt: 15,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" color="GrayText">
          Cart is Empty
        </Typography>
      </Container>
    );
  }

  const onRemove = (e, product) => {
    dispatch(cartActions.removeItem({ product }));
  };

  const onCheckout = async (data) => {
    try {
    } catch (error) {
      console.log(error);
      dispatch(
        uiActions.setAlert({
          severity: "error",
          text: "ERROR: " + error.response.data.message || error.message,
        })
      );
    }
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 15 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={8}>
          {cart && <CartProducts cart={cart} onProductRemove={onRemove} />}
        </Grid>
        <Grid item xs={12} md={4}>
          <ShippingDetails userInfo={user} />
        </Grid>
      </Grid>
    </Container>
  );
}
