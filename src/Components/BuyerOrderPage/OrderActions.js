import { Button } from "@mui/material";
import { Box } from "@mui/system";

export default function OrderActions({
  hideDeliver,
  onDeliverOrder,
  onCancelOrder,
}) {
  return (
    <Box sx={{ mt: 5, maxWidth: 500 }}>
      {hideDeliver || (
        <Button variant="contained" onClick={onDeliverOrder} fullWidth>
          Deliver Now
        </Button>
      )}
      <Button
        sx={{ mt: 1 }}
        variant="contained"
        color="error"
        fullWidth
        onClick={onCancelOrder}
        disableElevation
      >
        Cancel Order
      </Button>
    </Box>
  );
}
