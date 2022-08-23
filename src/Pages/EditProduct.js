import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance, { endPoints } from "../axiosInstance";
import SellerProductForm from "../Components/SellerProductForm";
import { uiActions } from "../Store/Slices/uiSlice";
const products = [
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
    category: "",
    images: [],
    quantity: 0,
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
    category: "",
    images: [],
    quantity: 0,
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
    category: "",
    images: [],
    quantity: 0,
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
    category: "",
    images: [],
    quantity: 0,
  },
];

export default function EditProduct() {
  const { productId } = useParams();
  const { token } = useSelector((state) => state.auth);
  const [product, setProduct] = useState(null);
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

  const onFormSubmit = async (formData, jsonData) => {
    delete jsonData.images;
    delete jsonData.ownerId;
    try {
      const response = await axiosInstance.patch(
        PRODUCT_URL,
        jsonData,
        AUTH_HEADERS
      );
      setProduct(response.data.product);
      dispatch(
        uiActions.setAlert({
          severity: "success",
          text: "Changes Saved",
        })
      );
      navigate("/profile");
    } catch (error) {
      console.log(error);
      dispatch(
        uiActions.setAlert({
          severity: "error",
          text: "ERROR: " + error.message,
        })
      );
    }
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 15 }}>
      {product && (
        <SellerProductForm
          product={product}
          buttonLabel={"Save Changes"}
          hideFileChooser
          onSubmit={onFormSubmit}
        />
      )}
    </Container>
  );
}
