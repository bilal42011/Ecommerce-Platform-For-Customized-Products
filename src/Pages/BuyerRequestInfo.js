import { Download } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import SellerProfileDescription from "../Components/SellerProfileDescription";

export default function BuyerRequestInfo() {
  const request = {
    id: 1,
    buyer: {
      avatar: "",
      full_name: "User 3849",
      id: "",
      username: "user3849",
      city: "Islamabad",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    title: "Looking for an experienced Carpenter",
    budget: 7500,
    time: 12, //days
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    attachments: ["file1.jpg", "file2.docx"],
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 15 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={8}>
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
                      {request.time} Days
                    </Typography>
                  </Stack>
                </Stack>
              }
            />
            <CardContent component={Stack} sx={{ height: "100%" }}>
              <Typography variant="h6">DETAILS</Typography>
              <Typography sx={{ flex: 1 }}>{request.description}</Typography>
              <Stack direction="row">
                {request.attachments.map((elem, index) => {
                  return (
                    <Button size="small" key={index} endIcon={<Download />}>
                      {/* TODO: Add file link */}
                      {elem}
                    </Button>
                  );
                })}
              </Stack>
            </CardContent>
            {/* Rendering attachments */}

            <CardActions>
              <Link
                className="ghost-link"
                to="proposal"
                style={{ width: "100%" }}
              >
                <Button variant="contained" fullWidth>
                  Create Proposal
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <SellerProfileDescription user={request.buyer} />
        </Grid>
      </Grid>
    </Container>
  );
}
