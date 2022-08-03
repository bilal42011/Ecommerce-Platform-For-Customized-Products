import {Grid} from "@mui/material";
import { Container } from "@mui/system";
import ProductCard from "../Components/ProductCard";
import avatarImage from "../assets/safwan.webp";
import SellerProfileDescription from "../Components/SellerProfileDescription";

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
          <SellerProfileDescription user={user} />
        </Grid>
        <Grid container item xs={12} sm={8} spacing={1}>
          {/* Products by seller */}
          {user.products.map((item, index) => {
            return (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <ProductCard product={item} showActions />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
}
