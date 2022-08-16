import { Download } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { apiServerUrl } from "../assets/js/utils";
import ExternalLink from "./ExternalLink";

export default function BuyerRequestInfoCard({ hideActions, request }) {
  return (
    <Card variant="outlined" sx={{ height: "100%" }} component={Stack}>
      <CardHeader
        title={
          <Typography fontWeight="bold" variant="h4" component="h1">
            {request.title}
          </Typography>
        }
        subheader={
          <Stack>
            <Stack direction="row">
              <Typography>Budget:</Typography>
              <Typography marginLeft={1} fontWeight="bold">
                Rs. {request.budget} /-
              </Typography>
            </Stack>
            <Stack direction="row">
              <Typography>Timeframe:</Typography>
              <Typography marginLeft={1} fontWeight="bold">
                {request.deliveryTime} Day(s)
              </Typography>
            </Stack>
          </Stack>
        }
      />
      <CardContent component={Stack} sx={{ height: "100%" }}>
        <Typography variant="h6">DETAILS</Typography>
        <Typography sx={{ flex: 1 }}>{request.description}</Typography>
        <Stack direction="row">
          {request.attachments.map((elem, index) => (
            <ExternalLink link={elem} key={index} />
          ))}
        </Stack>
      </CardContent>
      {!hideActions && (
        <CardActions>
          <RouterLink
            className="ghost-link"
            to="proposal"
            style={{ width: "100%" }}
          >
            <Button variant="contained" fullWidth>
              Create Proposal
            </Button>
          </RouterLink>
        </CardActions>
      )}
    </Card>
  );
}
