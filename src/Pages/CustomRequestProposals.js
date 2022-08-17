import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import ProposalsDataGrid from "../Components/CustomRequestProposals/PoposalsDataGrid/ProposalsDataGrid/ProposalsDataGrid";
import { useParams } from "react-router-dom";
import axiosInstance, { endPoints, getToken } from "../axiosInstance";

const CustomRequestProposals = () => {
  const { requestId } = useParams();
  const [request, setRequest] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get(
        `${endPoints.BUYER_REQUEST}/${requestId}/${endPoints.PROPOSALS}`,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      setRequest(response.data.request);
    })();
  }, [requestId]);

  return (
    <Container maxWidth="xl" disableGutters>
      <ProposalsDataGrid request={request} />
    </Container>
  );
};

export default CustomRequestProposals;
