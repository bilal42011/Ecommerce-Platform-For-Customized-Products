import {
  Avatar,
  Button,
  Divider,
  Grid,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import PlaceIcon from "@mui/icons-material/Place";
import avatarImage from "../assets/safwan.webp";
import ProductCard from "../Components/ProductCard";

export default function UserProfile() {
  const user = {
    username: "username",
    full_name: "Full Name",
    aggregated_rating: 5,
    total_reviews: 125,
    avatar: avatarImage,
    // avatar: "",
    city: "Islamabad",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    products: [
      {
        id: 12312,
        image:
          "https://cdn.shopify.com/s/files/1/2980/5140/products/LoomSolar2rowDesign4PanelStand375watt_2.jpg?v=1624973202",
        ownername: "user3385",
        title: "Solar Panel Stand",
        rating: 4,
        description:
          "The flat roof solar panel mounting system Solar triangular bracket, with innovative triangular to save cost both on installation and transportation. It is installed directly on a rooftop or pre-made concrete cement block. All kinds of panels can be installed which will save time for your project.",
        price: 4999,
        url: "/products/solar-panel-stand",
      },
      {
        id: 23424,
        image:
          "https://image.made-in-china.com/202f0j00dcNiRtCWrkob/Aluminum-Alloy-Solar-Rail-Solar-Panel-Module-Stand-Bracket.jpg",
        ownername: "user3385",
        title: "Solar Panel Stand",
        rating: 4,
        description:
          "The flat roof solar panel mounting system Solar triangular bracket, with innovative triangular to save cost both on installation and transportation. It is installed directly on a rooftop or pre-made concrete cement block. All kinds of panels can be installed which will save time for your project.",
        price: 4999,
        url: "/products/solar-panel-stand",
      },
      {
        id: 3542,
        image:
          "https://5.imimg.com/data5/YY/QQ/MY-4005949/solar-panel-stand-500x500.jpg",
        ownername: "user3385",
        title: "Solar Panel Stand",
        rating: 4,
        description:
          "The flat roof solar panel mounting system Solar triangular bracket, with innovative triangular to save cost both on installation and transportation. It is installed directly on a rooftop or pre-made concrete cement block. All kinds of panels can be installed which will save time for your project.",
        price: 4999,
        url: "/products/solar-panel-stand",
      },
      {
        id: 2345,
        image:
          "https://s.alicdn.com/@sc04/kf/H2e7f5b3f0b9945baa1e49e747c996b51w.jpg_300x300.jpg",
        ownername: "user3385",
        title: "Solar Panel Stand",
        rating: 4,
        description:
          "The flat roof solar panel mounting system Solar triangular bracket, with innovative triangular to save cost both on installation and transportation. It is installed directly on a rooftop or pre-made concrete cement block. All kinds of panels can be installed which will save time for your project.",
        price: 4999,
        url: "/products/solar-panel-stand",
      },
    ],
  };
  return (
    <Container maxWidth="xl" sx={{ mt: 15 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4}>
          <Paper
            variant="outlined"
            sx={{ p: 2, textAlign: "center" }}
            component={Stack}
            spacing={1}
          >
            <Avatar
              sx={{ width: 125, height: 125, m: "auto" }}
              src={user.avatar}
            >
              {user.username.charAt(0)}
            </Avatar>
            <Typography variant="h6">{user.full_name}</Typography>
            <Stack
              direction="row"
              justifyContent={"center"}
              alignItems="center"
              spacing={1}
            >
              <Rating readOnly value={user.aggregated_rating} />{" "}
              <Typography fontWeight="bold">
                {user.aggregated_rating}
              </Typography>
              <Typography color="GrayText">
                ({user.total_reviews} reviews)
              </Typography>
            </Stack>
            <Stack direction={"row"} justifyContent="space-between">
              <Typography
                textAlign="left"
                alignItems="center"
                sx={{ display: "flex" }}
              >
                <PlaceIcon sx={{ mr: 1, verticalAlign: "middle" }} /> City
              </Typography>
              <Typography fontWeight="bold">{user.city}</Typography>
            </Stack>
            <Divider />
            <Button variant="contained">Contact Me</Button>
          </Paper>
          <Paper
            variant="outlined"
            sx={{ p: 2, mt: 1 }}
            component={Stack}
            spacing={1}
          >
            <Typography variant="h6">DESCRIPTION</Typography>
            <Typography>{user.description}</Typography>
          </Paper>
        </Grid>
        <Grid container item xs={12} sm={8} spacing={1}>
          {/* Products by seller */}
          {user.products.map((item, index) => {
            return (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <ProductCard product={item} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
}
