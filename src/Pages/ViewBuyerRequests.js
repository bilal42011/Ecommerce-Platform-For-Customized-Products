import { Box, List, Pagination, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import BuyerRequestListItem from "../Components/BuyerRequestListItem";

export default function ViewBuyerRequests() {
  const [page, setPage] = useState(1);
  const buyerRequests = [
    {
      buyer_avatar: "",
      buyer_full_name: "User 3849",
      buyer_id: "",
      buyer_username: "user3849",
      buyer_city: "Islamabad",
      budget: 7500,
      time: 12, //days
      description: "We are looking for a....",
      attachments: ["file1.jpg", "file2.docx"],
    },
    {
      buyer_avatar: "",
      buyer_full_name: "User 3849",
      buyer_id: "",
      buyer_username: "user3849",
      buyer_city: "Islamabad",
      budget: 7500,
      time: 12, //days
      description: "We are looking for a....",
      attachments: ["file1.jpg", "file2.docx"],
    },
    {
      buyer_avatar: "",
      buyer_full_name: "User 3849",
      buyer_id: "",
      buyer_username: "user3849",
      buyer_city: "Islamabad",
      budget: 7500,
      time: 12, //days
      description: "We are looking for a....",
      attachments: ["file1.jpg", "file2.docx"],
    },
    {
      buyer_avatar: "",
      buyer_full_name: "User 3849",
      buyer_id: "",
      buyer_username: "user3849",
      buyer_city: "Islamabad",
      budget: 7500,
      time: 12, //days
      description: "We are looking for a....",
      attachments: ["file1.jpg", "file2.docx"],
    },
    {
      buyer_avatar: "",
      buyer_full_name: "User 3849",
      buyer_id: "",
      buyer_username: "user3849",
      buyer_city: "Islamabad",
      budget: 7500,
      time: 12, //days
      description: "We are looking for a....",
      attachments: ["file1.jpg", "file2.docx"],
    },
    {
      buyer_avatar: "",
      buyer_full_name: "User 3849",
      buyer_id: "",
      buyer_username: "user3849",
      buyer_city: "Islamabad",
      budget: 7500,
      time: 12, //days
      description: "We are looking for a....",
      attachments: ["file1.jpg", "file2.docx"],
    },
  ];

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
