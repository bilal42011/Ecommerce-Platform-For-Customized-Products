import { Button, Stack, Typography } from "@mui/material";
import Attachments from "../Attachments";

export default function DeliveryDescription({ order }) {
  return (
    <Stack spacing={2} textAlign="left">
      <Typography variant="h6" fontWeight={"bold"}>
        Order Deliverd
      </Typography>
      <Typography>{order.message}</Typography>
      <Attachments files={order.attachments} />
      <Button variant="contained" color="success">
        Approve
      </Button>
      <Button variant="contained" color="error">
        Decline
      </Button>
    </Stack>
  );
}
