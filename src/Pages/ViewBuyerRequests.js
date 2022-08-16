import { Box, List, Pagination, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import BuyerRequestListItem from "../Components/BuyerRequestListItem";
import buyerRequests from "../assets/buyer-requests.json";

export default function ViewBuyerRequests() {
  const [page, setPage] = useState(1);

  const onPageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 15 }}>
      <Typography textAlign={"center"} variant="h4" component="h1">
        Buyers Requests
      </Typography>
      <List>
        {buyerRequests.map((item, index) => (
          <BuyerRequestListItem request={item} key={index} />
        ))}
      </List>
      <Box display="flex" justifyContent={"center"} mt={2}>
        <Pagination count={10} page={page} onChange={onPageChange} />
      </Box>
    </Container>
  );
}
