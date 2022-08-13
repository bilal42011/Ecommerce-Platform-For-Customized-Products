import React from "react";
import { Container } from "@mui/material";
import RequestsDataGrid from "../Components/CustomRequests/RequestsDataGrid/RequestsDataGrid";

const CustomRequests = () => {
  return (
    <Container maxWidth="100%" disableGutters>
      <RequestsDataGrid />
    </Container>
  );
};

export default CustomRequests;
