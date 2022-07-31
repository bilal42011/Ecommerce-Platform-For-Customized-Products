import {
  Avatar,
  Button,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { Box } from "@mui/system";

export default function BuyerRequestListItem({ request }) {
  return (
    <ListItem width="100%">
      <Paper width="100%" variant="outlined" sx={{ flex: 1, p: 1 }}>
        <Stack spacing={1} width="100%">
          <Stack direction="row" alignItems={"center"} width="100%">
            <ListItemAvatar>
              <Avatar src={request.buyer_avatar}>
                {request.buyer_full_name.charAt(0)}
              </Avatar>
            </ListItemAvatar>
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
              <strong>Rs. {request.budget.toLocaleString()} /-</strong>
            </Typography>
            <Typography ml={2}>
              Timeframe:{"  "}
              <strong>{request.time} Days</strong>
            </Typography>
          </Stack>
          <Box mt={2}>
            {" "}
            {/*description */}
            <Typography color="GrayText">{request.description}</Typography>
          </Box>
          <Divider />
          <Stack direction="row" spacing={1} alignItems="center">
            <Button variant="outlined">Contact Buyer</Button>
            <Button variant="contained">Send Proposal</Button>
            <Box flexGrow={1}></Box>
            <Box className="attachments">
              {request.attachments.map((elem, index) => {
                return (
                  <Button size="small" key={index} endIcon={<DownloadIcon />}>
                    {/* TODO: Add file link */}
                    {elem}
                  </Button>
                );
              })}
            </Box>
          </Stack>
        </Stack>
      </Paper>
    </ListItem>
  );
}
