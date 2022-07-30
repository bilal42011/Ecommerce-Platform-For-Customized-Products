import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

export default function BuyerRequestListItem({ request }) {
  return (
    <Paper width="100%" variant="outlined">
      <ListItem width="100%">
        <ListItemAvatar>
          <Avatar src={request.buyer_avatar}>
            {request.buyer_full_name.charAt(0)}
          </Avatar>
        </ListItemAvatar>
        <Stack direction="row" alignItems={"center"} width="100%">
          <ListItemText
            primary={request.buyer_username}
            secondary={
              <Typography variant="body2">
                {request.buyer_city}, Pakistan
              </Typography>
            }
          />
          <Box flexGrow={1}></Box>
          <Typography>
            Budget:{"  "}
            <Typography display="inline" fontWeight="bold">
              Rs. {request.budget.toLocaleString()} /-
            </Typography>
          </Typography>
          <Typography ml={2}>
            Timeframe:{"  "}
            <Typography fontWeight="bold" display="inline">
              {request.time} Days
            </Typography>
          </Typography>
        </Stack>
        <Box mt={2}>
          {" "}
          {/*description */}
          {/* <Typography>{request.description}</Typography> */}
        </Box>
      </ListItem>
    </Paper>
  );
}
