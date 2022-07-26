import {
  Avatar,
  Button,
  Divider,
  Link,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { apiServerUrl } from "../assets/js/utils";
import DownloadIcon from "@mui/icons-material/Download";
import { Box } from "@mui/system";
import ExternalLink from "./ExternalLink";

export default function BuyerRequestListItem({ request }) {
  return (
    <ListItem>
      <Paper width="100%" variant="outlined" sx={{ flex: 1, p: 1 }}>
        <Stack spacing={1} width="100%">
          <Stack direction="row" alignItems={"center"} width="100%">
            <ListItemAvatar>
              <Avatar src={request.buyerId.avatar}>
                {request.buyerId.fullName.charAt(0)}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography fontWeight="bold">{request.title}</Typography>
              }
              secondary={
                <Typography variant="body2">{request.buyerId.city}</Typography>
              }
            />
            <Box flexGrow={1}></Box>
            <Typography>
              Budget:{"  "}
              <strong>Rs. {request.budget.toLocaleString()} /-</strong>
            </Typography>
            <Typography ml={2}>
              Timeframe:{"  "}
              <strong>{request.deliveryTime} Days</strong>
            </Typography>
          </Stack>
          <Box mt={2}>
            {" "}
            {/*description */}
            <Typography color="GrayText">{request.description}</Typography>
          </Box>
          <Divider />
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            flexWrap="wrap"
          >
            <RouterLink to="/profile/chats" className="ghost-link">
              <Button variant="outlined">Contact Buyer</Button>
            </RouterLink>
            <RouterLink to={`${request._id}`} className="ghost-link">
              <Button variant="contained">View Request</Button>
            </RouterLink>

            <Box flexGrow={1}></Box>
            <Box className="attachments">
              {request.attachments.map((elem, index) => {
                return <ExternalLink link={elem} key={index} />;
              })}
            </Box>
          </Stack>
        </Stack>
      </Paper>
    </ListItem>
  );
}
