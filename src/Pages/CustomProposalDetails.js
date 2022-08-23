import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import ProposalDetails from "../Components/CustomProposalDetails/ProposalDetails";
import axiosInstance, { endPoints } from "../axiosInstance";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import OverlaySpinner from "../Components/OverlaySpinner";

const CustomProposalDetails = () => {
  const { proposalId, requestId } = useParams();
  const [proposal, setProposal] = useState(null);

  const token = useSelector((state) => state.auth.token);

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
    <Container maxWidth="xl" disableGutters sx={{ mt: 15 }}>
      {proposal ? <ProposalDetails proposal={proposal} /> : <OverlaySpinner />}
    </Container>
  );
};

export default CustomProposalDetails;
