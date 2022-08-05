import {
  Avatar,
  Button,
  Chip,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { ScheduleOutlined } from "@mui/icons-material";

export default function Order({ order }) {
  return (
    <ListItem sx={{ width: "100%" }}>
      <Paper
        variant="elevation"
        elevation={2}
        component={Stack}
        justifyContent="space-between"
        direction="row"
        width="100%"
        alignItems={"center"}
        padding={2}
      >
        <Stack direction="row" alignItems={"center"}>
          <ListItemAvatar>
            <Avatar>{order.buyerUsername.charAt(0)}</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<strong>{order.buyerUsername}</strong>}
          ></ListItemText>
        </Stack>
        <Box>
          <Typography color="GrayText">Price</Typography>
          <Typography>Rs. {order.price} </Typography>
        </Box>
        <Box>
          {!order.isDeliverd ? (
            <>
              <Typography textAlign="center" color="GrayText">
                Due In
              </Typography>
              <Typography display="flex" alignItems="center">
                <ScheduleOutlined
                  sx={{
                    verticalAlign: "middle",
                    width: 18,
                    height: 18,
                  }}
                />
                {order.timeRemaining}{" "}
              </Typography>
            </>
          ) : (
            <>
              <Chip color="secondary" label="Delivered" />
            </>
          )}
        </Box>
        <Button>View</Button>
      </Paper>
    </ListItem>
  );
}
