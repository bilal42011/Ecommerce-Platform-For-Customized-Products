import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../axiosInstance";
import BuyerRequestInfoCard from "../Components/BuyerRequestInfoCard";
import OverlaySpinner from "../Components/OverlaySpinner";
import SellerProfileDescription from "../Components/SellerProfileDescription";

export default function BuyerRequestInfoPage() {
  const [buyerRequest, setBuyerRequest] = useState(null);
  const { requestId } = useParams();

  const fetchBuyerRequest = async () => {
    try {
      const response = await axiosInstance.get(`/buyer-requests/${requestId}`);
      setBuyerRequest(response.data.request);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  useEffect(() => {
    fetchBuyerRequest();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ mt: 15 }}>
      {buyerRequest ? (
        <Grid container spacing={1}>
          <Grid item xs={12} sm={8}>
            <BuyerRequestInfoCard request={buyerRequest} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <SellerProfileDescription user={buyerRequest.buyerId} />
          </Grid>
        </Grid>
      ) : (
        <OverlaySpinner />
      )}
    </Container>
  );
}
