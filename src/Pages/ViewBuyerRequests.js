import { Box, List, Pagination, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import BuyerRequestListItem from "../Components/BuyerRequestListItem";
import OverlaySpinner from "../Components/OverlaySpinner";
import axiosInstance, { getToken } from "../axiosInstance";
// import buyerRequests from "../assets/buyer-requests.json";

export default function ViewBuyerRequests() {
  const [paginationInfo, setPaginationInfo] = useState({
    page: 1,
    itemsPerPage: 10,
    count: 1,
  });

  const [buyerRequests, setBuyerRequests] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/buyer-requests", {
        headers: { Authorization: `Bearer ${getToken()}` },
        params: { page: paginationInfo.page },
      });
      console.log(response);
      setBuyerRequests(response.data.buyerRequests);
      setPaginationInfo((prev) => {
        return { ...prev, count: response.data.totalPages };
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onPageChange = async (event, newPage) => {
    setPaginationInfo((prev) => {
      return { ...prev, page: newPage };
    });
    await fetchData();
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 15, position: "relative" }}>
      <Typography textAlign={"center"} variant="h4" component="h1">
        Buyers Requests
      </Typography>
      {buyerRequests ? (
        <>
          <List>
            {buyerRequests.map((item, index) => (
              <BuyerRequestListItem request={item} key={index} />
            ))}
          </List>
          <Box display="flex" justifyContent={"center"} mt={2}>
            <Pagination
              count={paginationInfo.count}
              page={paginationInfo.page}
              onChange={onPageChange}
            />
          </Box>
        </>
      ) : (
        <OverlaySpinner />
      )}
    </Container>
  );
}
