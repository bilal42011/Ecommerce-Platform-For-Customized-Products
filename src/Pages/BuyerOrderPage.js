import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axiosInstance, { endPoints } from "../axiosInstance";
import BuyerRequestInfoCard from "../Components/BuyerRequestInfoCard";
import ProposalDetails from "../Components/CustomProposalDetails/ProposalDetails";
import OverlaySpinner from "../Components/OverlaySpinner";
import CartProducts from "../Components/Cart/CartProducts";
import { Box, Button, Card, Paper, Stack, Typography } from "@mui/material";
import { getRemainingTime } from "../assets/js/utils";
import DeliverOrderModal from "../Components/BuyerOrderPage/DeliverOrderModal";
import RemainingTime from "../Components/BuyerOrderPage/RemainingTime";
import OrderActions from "../Components/BuyerOrderPage/OrderActions";
import DeliveryDescription from "../Components/BuyerOrderPage/DeliveryDescription";
import CancelOrderModal from "../Components/BuyerOrderPage/CancelOrderModal";

export default function BuyerOrderPage() {
  const [order, setOrder] = useState(null);

  const [deliverModalVisible, setDeliverModalVisible] = useState(false);
  const [cancelModalVisble, setCancelModalVisble] = useState(false);

  const { orderId } = useParams();

  const token = useSelector((state) => state.auth.user?.token);

  /**
   *
   * @param {FormData} formData
   */
  const onDeliver = async (formData) => {
    try {
      const response = await axiosInstance.post(
        `${endPoints.ORDER}/${orderId}/${endPoints.DELIVER_ORDER}`
      );
      setOrder(response.data.order);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  /**
   *
   * @param {FormData} formData
   */
  const onCancel = async (formData) => {
    try {
      const response = await axiosInstance.patch(
        `${endPoints.ORDER}/${orderId}/${endPoints.REQUEST_CANCEL}`
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
      elem = <DeliveryDescription order={order} />;
      break;
    case "PENDING_CANCEL":
      elem = (
        <Typography variant="h4">
          Cancellation Request Sent. Waiting for Approval
        </Typography>
      );
      break;
    default:
      elem = (
        <>
          <Typography>Waiting for Delivery</Typography>
          <RemainingTime time={order.dueIn} />
          <OrderActions
            hideDeliver
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
        sx={{ alignItems: "center", padding: { xs: 2, sm: 10 }, width: "100%" }}
      >
        {elem}
      </Stack>
      {order.buyerRequestId ? (
        <ProposalDetails proposal={order.proposalId} hideActions />
      ) : (
        <CartProducts cart={order} />
      )}
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
    </Container>
  );
}
