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
    (async (_) => await fetchBuyerRequest())();
  }, []);

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
