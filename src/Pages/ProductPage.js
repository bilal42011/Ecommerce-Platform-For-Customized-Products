import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance, { endPoints } from "../axiosInstance";
import ProductInfo from "../Components/ProductInfo";
import ProductMedia from "../Components/ProductMedia/ProductMedia";
import Reviews from "../Components/ProductPage/Reviews";
import { uiActions } from "../Store/Slices/uiSlice";

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
    \n\n
    1.Made from high quality galvanized pipe      \n
    2.High durability and stable for strong wind and snow.\n
    3.Easy installation. Components pre-assembled into few units ensure fast installation.\n
    4.High stability and long life for many years.\n`,
  price: 4999,
  url: "/products/solar-panel-stand",
  fullRating: {
    average: 4.0,
    count: 25,
    reviews: [
      {
        rating: 4.0,
        user: {
          username: "user2020",
          fullname: "Dr. User",
        },
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit provident, quia consequuntur quidem optio maxime tempora voluptatibus repudiandae ipsum. In, quidem perferendis. Veniam, unde. Eum totam quam iusto maiores aliquid!",
      },
    ],
  },
};

export default function ProductPage() {
  const [product, setProduct] = useState(null);

  const { productId } = useParams();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const PRODUCT_URL = `${endPoints.PRODUCT}/${productId}`;
  const AUTH_HEADERS = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const fetchProduct = async () => {
    dispatch(uiActions.setLoading(true));
    try {
      const response = await axiosInstance.get(PRODUCT_URL, AUTH_HEADERS);
      setProduct(response.data.product);
    } catch (error) {
      console.log(error);
      dispatch(
        uiActions.setAlert({
          severity: "error",
          text: "ERROR: " + error.message + " | " + error.response.data.message,
        })
      );
    }
    dispatch(uiActions.setLoading(false));
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (!product) return <></>;
  return (
    <Container maxWidth="xl" sx={{ mt: 15 }}>
      <Grid container display="flex">
        <Grid item xs={12} md={6} className="product-media">
          <ProductMedia product={product} />
        </Grid>
        <Grid item xs={12} md={6} className="prodcut-info">
          <ProductInfo product={product} />
        </Grid>
        <Grid item xs={12}>
          <Reviews rating={product.fullRating} />
        </Grid>
      </Grid>
    </Container>
  );
}
