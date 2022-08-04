import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Rating,
  Stack,
  Typography,
} from "@mui/material";

export default function ProductReviews({ product }) {
  return (
    <Card variant="outlined" sx={{ mt: 2 }}>
      <CardHeader sx={{ textAlign: "center" }} title="Reviews" />

      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h4">4.0</Typography>
        <Rating value={4.0} readOnly />
        <Typography>based on 69 reviews</Typography>
      </CardContent>
      <Card variant="elevation">
        <CardHeader
          title={<strong>Full Name</strong>}
          avatar={<Avatar>A</Avatar>}
          subheader={
            <Stack direction="row" alignItems={"center"}>
              <Rating value={4.0} sx={{ mr: 1 }} /> (4.0)
            </Stack>
          }
        />
        <CardContent>
          <Typography>
            I bought this sexy solar panel stand and it changed my life Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Typography>
        </CardContent>
      </Card>
      <Card variant="elevation">
        <CardHeader
          title={<strong>Full Name</strong>}
          avatar={<Avatar>A</Avatar>}
          subheader={
            <Stack direction="row" alignItems={"center"}>
              <Rating value={4.0} sx={{ mr: 1 }} /> (4.0)
            </Stack>
          }
        />
        <CardContent>
          <Typography>
            I bought this sexy solar panel stand and it changed my life Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Typography>
        </CardContent>
      </Card>
      <Card variant="elevation">
        <CardHeader
          title={<strong>Full Name</strong>}
          avatar={<Avatar>A</Avatar>}
          subheader={
            <Stack direction="row" alignItems={"center"}>
              <Rating value={4.0} sx={{ mr: 1 }} /> (4.0)
            </Stack>
          }
        />
        <CardContent>
          <Typography>
            I bought this sexy solar panel stand and it changed my life Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Typography>
        </CardContent>
      </Card>
    </Card>
  );
}
