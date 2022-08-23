import { Grid, Typography } from "@mui/material";

import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance, { endPoints } from "../axiosInstance";
import CartProducts from "../Components/Cart/CartProducts";
import ShippingDetails from "../Components/Cart/ShippingDetails";
import { uiActions } from "../Store/Slices/uiSlice";
import { cartActions } from "../Store/Slices/cartSlice";
import PaymentModal from "../Components/Cart/PaymentModal";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.auth);
  const products = useSelector((state) => state.cart.products);

  const [cart, setCart] = useState(null);
  const [shippingInfo, setShippingInfo] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    city: user.city,
    phone: user.phone,
    address: user.address,
  });
  const [modalVisible, setModalVisible] = useState(false);

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

  const onCheckout = async (paymentInfo) => {
    dispatch(uiActions.setLoading(true));
    console.log(paymentInfo, shippingInfo, products);
    try {
      await axiosInstance.post(
        endPoints.ORDER,
        { products, paymentInfo, shippingInfo },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(uiActions.setLoading(false));
      dispatch(cartActions.clearCart());
      navigate("/profile/dashboard");
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

  return (
    <Container maxWidth="xl" sx={{ mt: 15 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={8}>
          {cart && <CartProducts cart={cart} onProductRemove={onRemove} />}
        </Grid>
        <Grid item xs={12} md={4}>
          <ShippingDetails
            userInfo={shippingInfo}
            onCheckout={(data) => {
              setShippingInfo(data);
              setModalVisible(true);
            }}
          />
        </Grid>
      </Grid>
      <PaymentModal
        visible={modalVisible}
        buttonText="Order Now"
        onPayment={onCheckout}
        handleClose={() => setModalVisible(false)}
      />
    </Container>
  );
}
