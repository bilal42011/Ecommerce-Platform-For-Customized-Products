import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import axiosInstance, { endPoints } from "../../axiosInstance";
import Attachments from "../Attachments";
import OverlaySpinner from "../OverlaySpinner";

export default function DeliveryDescription({
  order,
  onActionPerformed,
  token,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const onApprove = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(
        `${endPoints.ORDER}/${order._id}/${endPoints.APPROVE_ORDER}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      onActionPerformed(response.data.order);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
    setIsLoading(false);
  };

  const onDecline = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(
        `${endPoints.ORDER}/${order._id}/${endPoints.DECLINE_ORDER}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      onActionPerformed(response.data.order);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
    setIsLoading(false);
  };

  return (
    <Stack spacing={2} textAlign="left">
      <Typography variant="h6" fontWeight={"bold"}>
        Order Deliverd
      </Typography>
      <Typography>{order.message}</Typography>
      <Attachments files={order.attachments} />
      <Button variant="contained" color="success" onClick={onApprove}>
        Approve
      </Button>
      <Button variant="contained" color="error" onClick={onDecline}>
        Decline
      </Button>
      {isLoading && <OverlaySpinner />}
    </Stack>
  );
}
