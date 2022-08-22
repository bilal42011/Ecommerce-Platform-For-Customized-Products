import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axiosInstance, { endPoints } from "../axiosInstance";
import BuyerRequestInfoCard from "../Components/BuyerRequestInfoCard";
import OverlaySpinner from "../Components/OverlaySpinner";
import CartProducts from "../Components/Cart/CartProducts";
import { Paper, Stack, Typography, Grid } from "@mui/material";
import DeliverOrderModal from "../Components/BuyerOrderPage/DeliverOrderModal";
import RemainingTime from "../Components/BuyerOrderPage/RemainingTime";
import OrderActions from "../Components/BuyerOrderPage/OrderActions";
import DeliveryDescription from "../Components/BuyerOrderPage/DeliveryDescription";
import CancelOrderModal from "../Components/BuyerOrderPage/CancelOrderModal";
import ConfirmCancellation from "../Components/BuyerOrderPage/ConfirmCancellation";

import SellerProfileDescription from "../Components/SellerProfileDescription";

export default function SellerOrderPage() {
  const [order, setOrder] = useState(null);

  const [deliverModalVisible, setDeliverModalVisible] = useState(false);
  const [cancelModalVisble, setCancelModalVisble] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { orderId } = useParams();

  const { token, user } = useSelector((state) => state.auth);

  /**
   *
   * @param {FormData} formData
   */
  const onDeliver = async (formData) => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.post(
        `${endPoints.ORDER}/${orderId}/${endPoints.DELIVER_ORDER}`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setOrder(response.data.order);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
    setDeliverModalVisible(false);
    setIsLoading(false);
  };

  /**
   *
   * @param {FormData} formData
   */
  const onCancel = async (formData) => {
    try {
      const response = await axiosInstance.patch(
        `${endPoints.ORDER}/${orderId}/${endPoints.REQUEST_CANCEL}`,
        null,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setOrder(response.data.order);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const onConfirmCancel = async () => {
    try {
      const response = await axiosInstance.patch(
        `${endPoints.ORDER}/${orderId}/${endPoints.CONFIRM_CANCEL}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setOrder(response.data.order);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const fetchOrder = async () => {
    try {
      const response = await axiosInstance.get(
        `${endPoints.ORDER}/${orderId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const temp = response.data.order;
      temp.proposalId.sellerId = temp.sellerId;
      setOrder(temp);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  if (!order)
    return (
      <Container
        maxWidth="xl"
        sx={{ height: "100%", position: "relative", mt: 15 }}
      >
        <OverlaySpinner />
      </Container>
    );

  let elem = <></>;

  switch (order.orderStatus) {
    case "DELIVERED":
      elem = <Typography>Order Delivered! Waiting for Approval</Typography>;
      break;
    case "PENDING_CANCEL":
      if (user._id === order.cancelInitiator) {
        elem = (
          <Typography variant="h4">
            Cancellation Request Sent. Waiting for Approval
          </Typography>
        );
      } else {
        elem = (
          <ConfirmCancellation order={order} onConfirm={onConfirmCancel} />
        );
      }
      break;
    case "CANCELLED":
      elem = (
        <Typography variant="h4" color="error">
          Order Cancelled
        </Typography>
      );
      break;
    case "COMPLETED":
      elem = (
        <Typography variant="h4" color="success.main" fontWeight="bold">
          Order Completed
        </Typography>
      );
      break;
    default:
      elem = (
        <>
          <RemainingTime time={order.dueIn} />
          <OrderActions
            onDeliverOrder={() => setDeliverModalVisible(true)}
            onCancelOrder={() => setCancelModalVisble(true)}
          />
        </>
      );
  }

  return (
    <Container maxWidth="xl" sx={{ mt: 15 }} component={Stack} spacing={1}>
      <Stack
        component={Paper}
        variant="outlined"
        position="relative"
        sx={{ alignItems: "center", padding: { xs: 2, sm: 10 }, width: "100%" }}
      >
        {elem}
      </Stack>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={8}>
          {order.buyerRequestId ? (
            <BuyerRequestInfoCard request={order.buyerRequestId} hideActions />
          ) : (
            <CartProducts cart={order} />
          )}
        </Grid>
        <Grid item xs={12} sm={4}>
          <SellerProfileDescription user={order.buyerId} />
        </Grid>
      </Grid>
      <DeliverOrderModal
        open={deliverModalVisible}
        handleClose={(_) => setDeliverModalVisible(false)}
        onDeliver={onDeliver}
      />
      <CancelOrderModal
        open={cancelModalVisble}
        handleClose={(_) => setCancelModalVisble(false)}
        onCancel={onCancel}
      />
      {isLoading && <OverlaySpinner />}
    </Container>
  );
}
