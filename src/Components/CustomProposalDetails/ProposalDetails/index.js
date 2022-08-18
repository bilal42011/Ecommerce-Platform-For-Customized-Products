import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import SellerProfileDescription from "../../SellerProfileDescription";
import avatarImage from "../../../assets/bilal.jpg";
import ProposalDescription from "./ProposalDescription";
import { useParams } from "react-router-dom";
import OverlaySpinner from "../../OverlaySpinner";
import axiosInstance, { endPoints } from "../../../axiosInstance";
import { useSelector } from "react-redux";
// const userDetail = {
//   username: "username",
//   full_name: "Muhammad Bilal Malik",
//   aggregated_rating: 5,
//   total_reviews: 125,
//   avatar: avatarImage,
//   // avatar: "",
//   city: "Islamabad",
//   description:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
// };

const ProposalDetails = () => {
  const { proposalId, requestId } = useParams();
  const [proposal, setProposal] = useState(null);

  const token = useSelector((state) => state.auth.user?.token);

  const fetchProposal = async () => {
    try {
      const response = await axiosInstance.get(
        `${endPoints.BUYER_REQUEST}/${requestId}/${endPoints.PROPOSALS}/${proposalId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProposal(response.data.proposal);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  useEffect(() => {
    fetchProposal();
  }, []);

  return (
    <Grid container justifyContent="center" columnSpacing={4}>
      <Grid
        item
        xs={12}
        md={7}
        sx={{ border: "1px solid rgba(0, 0, 0, 0.12)" }}
      >
        <ProposalDescription proposal={proposal || {}} />
      </Grid>
      <Grid item xs={12} md={3.5} sx={{ mt: { xs: 4, md: 0 } }}>
        <SellerProfileDescription user={proposal ? proposal.sellerId : {}} />
      </Grid>
      {!proposal && <OverlaySpinner />}
    </Grid>
  );
};

export default ProposalDetails;
