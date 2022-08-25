import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axiosInstance, { endPoints } from "../axiosInstance";
import ProposalDetails from "../Components/CustomProposalDetails/ProposalDetails";
import OverlaySpinner from "../Components/OverlaySpinner";

import { Paper, Stack, Typography } from "@mui/material";
import RemainingTime from "../Components/BuyerOrderPage/RemainingTime";
import OrderActions from "../Components/BuyerOrderPage/OrderActions";
import DeliveryDescription from "../Components/BuyerOrderPage/DeliveryDescription";
import CancelOrderModal from "../Components/BuyerOrderPage/CancelOrderModal";
import ConfirmCancellation from "../Components/BuyerOrderPage/ConfirmCancellation";
import ProductOrderInfo from "../Components/BuyerOrderPage/ProductOrderInfo";
import { uiActions } from "../Store/Slices/uiSlice";

export default function BuyerOrderPage() {
  const [order, setOrder] = useState(null);

  const [cancelModalVisble, setCancelModalVisble] = useState(false);
  const dispatch = useDispatch();

  const { orderId } = useParams();

  const { token, user } = useSelector((state) => state.auth);

  /**
   *
   * @param {FormData} formData
   */
  const onCancel = async (formData) => {
    try {
      const response = await axiosInstance.patch(
        `${endPoints.ORDER}/${orderId}/${endPoints.REQUEST_CANCEL}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setOrder(response.data.order);
      setCancelModalVisble(false);
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
      if (temp.proposalId) temp.proposalId.sellerId = temp.sellerId;
      else temp.productId.ownerId = temp.sellerId;
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
      elem = (
        <DeliveryDescription
          order={order}
          onActionPerformed={(newOrder) => setOrder(newOrder)}
          token={token}
        />
      );
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
        <Typography variant="h4" color="error" fontWeight="bold">
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
          <Typography>Waiting for Delivery</Typography>
          <RemainingTime time={order.dueIn} />
          <OrderActions
            hideDeliver
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
        sx={{
          alignItems: "center",
          padding: { xs: 2, sm: 10 },
          m: 1,
          width: "100%",
        }}
      >
        {elem}
      </Stack>
      {order.buyerRequestId ? (
        <ProposalDetails proposal={order.proposalId} hideActions />
      ) : (
        <ProductOrderInfo order={order} user={order.sellerId} />
      )}
      <CancelOrderModal
        open={cancelModalVisble}
        handleClose={(_) => setCancelModalVisble(false)}
        onCancel={onCancel}
      />
    </Container>
  );
}
