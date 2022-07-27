import { Grid } from "@mui/material";
import ProductInfo from "../components/ProductInfo";
import ProductMedia from "../components/ProductMedia/ProductMedia";

export default function ProductPage() {
  const product = {
    id: 12312,
    images: [
      "https://cdn.shopify.com/s/files/1/2980/5140/products/LoomSolar2rowDesign4PanelStand375watt_2.jpg?v=1624973202",
      "https://image.made-in-china.com/202f0j00dcNiRtCWrkob/Aluminum-Alloy-Solar-Rail-Solar-Panel-Module-Stand-Bracket.jpg",
      "https://5.imimg.com/data5/YY/QQ/MY-4005949/solar-panel-stand-500x500.jpg",
      "https://s.alicdn.com/@sc04/kf/H2e7f5b3f0b9945baa1e49e747c996b51w.jpg_300x300.jpg",
    ],
    sizes: ["Small", "Medium", "Large"],
    ownername: "user3385",
    title: "Solar Panel Stand",
    rating: 4,
    description: `Buy Solar Stand 3 Pv for three solar panel only from E-Workers at best rates- Easy to mount on Wall or to mount on Roof. True quality and durability. Strong Structure Solar Brackets Panel System Mounting Stand with Ground ScreW 
      
      1.Made from high quality galvanized pipe      
      2.High durability and stable for strong wind and snow.
      3.Easy installation. Components pre-assembled into few units ensure fast installation.
      4.High stability and long life for many years.`,
    price: 4999,
    url: "/products/solar-panel-stand",
  };
  return (
    <Grid container display="flex">
      <Grid item xs={12} md={6} className="product-media">
        <ProductMedia product={product} />
      </Grid>
      <Grid item xs={12} md={6} className="prodcut-info">
        <ProductInfo product={product} />
      </Grid>
    </Grid>
  );
}
