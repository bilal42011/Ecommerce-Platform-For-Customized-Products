import { Grid } from "@mui/material";

import { Container } from "@mui/system";
import CartProducts from "../Components/Cart/CartProducts";
import ShippingDetails from "../Components/Cart/ShippingDetails";

export default function Cart() {
  const user = {
    firstName: "Safwan",
    lastName: "Karim",
    city: "Islamabad",
    address: "XYZ Town Bharakahu",
  };

  const cart = {
    total: 8900,
    products: [
      {
        id: 12312,
        image:
          "https://cdn.shopify.com/s/files/1/2980/5140/products/LoomSolar2rowDesign4PanelStand375watt_2.jpg?v=1624973202",
        ownername: "user3385",
        title: "Solar Panel Stand",
        rating: 4,
        quantity: 2,
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
        quantity: 1,
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
        quantity: 1,
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
        <Grid item xs={12} md={8}>
          <CartProducts cart={cart} />
        </Grid>
        <Grid item xs={12} md={4}>
          <ShippingDetails userInfo={user} />
        </Grid>
      </Grid>
    </Container>
  );
}
