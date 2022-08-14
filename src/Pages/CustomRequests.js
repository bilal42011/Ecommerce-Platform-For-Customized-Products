import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import RequestsDataGrid from "../Components/CustomRequests/RequestsDataGrid/RequestsDataGrid";
import axiosInstance, { endPoints, getToken } from "../axiosInstance";

const CustomRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get(
        endPoints.CUSTOM_REQUESTS_HISTORY,
        {
          headers: {
            Authorization: "Bearer " + getToken(),
          },
        }
      );
      setRequests(response.data.buyerRequests);
    })();
  }, []);

  return (
    <Container maxWidth="xl" disableGutters>
      <RequestsDataGrid requests={requests} />
    </Container>
  );
};

export default CustomRequests;
