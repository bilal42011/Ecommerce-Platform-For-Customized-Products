import { Button } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axiosInstance, { endPoints } from "../axiosInstance";

import SellerProductForm from "../Components/SellerProductForm";
import { uiActions } from "../Store/Slices/uiSlice";

export default function CreateProduct() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const onCreateProduct = async (formData) => {
    dispatch(uiActions.setLoading(true));
    try {
      const response = await axiosInstance.post(endPoints.PRODUCT, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(
        uiActions.setAlert({
          severity: "success",
          text: "Product Created",
        })
      );
      navigate("/profile");
    } catch (error) {
      console.error(error);
      dispatch(
        uiActions.setAlert({
          severity: "error",
          text: `ERROR: ${
            error.response ? error.response.data.message : error.message
          }`,
        })
      );
    }
    dispatch(uiActions.setLoading(false));
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 15, position: "relative" }}>
      <SellerProductForm onSubmit={onCreateProduct} />
    </Container>
  );
}
