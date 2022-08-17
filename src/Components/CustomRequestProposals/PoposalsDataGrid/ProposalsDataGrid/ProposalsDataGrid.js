import React, { useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  CircularProgress,
  Stack,
} from "@mui/material";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import bilal from "../../../../assets/bilal.jpg";
import UsersActions from "./UsersActions/UsersActions";
import safwan from "../../../../assets/safwan.webp";
import BuyerRequestInfoCard from "../../../BuyerRequestInfoCard";
import { useNavigate } from "react-router-dom";
import { apiServerUrl } from "../../../../assets/js/utils";

let columns = [
  {
    headerName: "ID",
    flex: 1,
    align: "center",
    headerAlign: "center",
    valueGetter: (params) => {
      return params.row._id;
    },
  },
  {
    field: "photoURL",
    headerName: "Avatar",
    flex: 1,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => {
      return (
        <Avatar
          src={apiServerUrl(params.row.sellerId.avatar)}
          sx={{ width: 51, height: 51 }}
        >
          {params.row.sellerId.fullName[0]}
        </Avatar>
      );
    },
  },
  {
    field: "name",
    headerName: "Name",
    align: "center",
    headerAlign: "center",
    flex: 1,
    valueGetter: (params) => {
      return params.row.sellerId.fullName;
    },
  },
  {
    field: "budget",
    headerName: "Budget",
    align: "center",
    headerAlign: "center",
    type: "number",
    flex: 1,
    valueGetter: (params) => {
      return `Rs. ${params.row.budget.toLocaleString()} /-`;
    },
  },
  {
    field: "location",
    headerName: "Location",
    align: "center",
    headerAlign: "center",
    flex: 1,
    valueGetter: (params) => {
      return params.row.sellerId.city;
    },
  },
  {
    field: "timeline",
    headerName: "Tiemline",
    type: "number",
    align: "center",
    headerAlign: "center",
    valueGetter: (params) => {
      return `${params.row.deliveryTime} Days`;
    },
    flex: 1,
  },
  {
    field: "actions",
    headerName: "Actions",
    headerAlign: "center",
    align: "center",
    flex: 2,
    renderCell: (params) => {
      return <UsersActions {...{ params }} />;
    },
  },
];

let ProposalsDataGrid = ({ request }) => {
  let [pageSize, setPageSize] = useState(5);
  const navigate = useNavigate();

  // const req = {
  //   id: 1,
  //   buyer: {
  //     avatar: "",
  //     full_name: "User 3849",
  //     id: "",
  //     username: "user3849",
  //     city: "Islamabad",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   },
  //   title: "Looking for an experienced Carpenter",
  //   budget: 7500,
  //   time: 12, //days
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   attachments: ["file1.jpg", "file2.docx"],
  // };

  if (!request)
    return (
      <Stack
        sx={{ height: "100%", widht: "100%" }}
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
      </Stack>
    );

  return (
    <Box sx={{ paddingTop: "3rem" }}>
      <Box mb={4}>
        <BuyerRequestInfoCard request={request} hideActions />
      </Box>
      <Typography
        sx={{
          paddingBottom: "3rem",
          width: "fit-content",
          fontSize: "2.5rem",
          color: "#152035",
          margin: "auto",
          textAlign: "center",
          fontFamily: "Roboto condensed, sans-serif",
          fontWeight: "bold",
        }}
        variant="h5"
      >
        Request Proposals
      </Typography>
      <Box sx={{ width: "100%", margin: "auto" }}>
        <DataGrid
          autoHeight
          rowHeight={95}
          columns={columns}
          rows={request.proposals}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          onSelectionModelChange={(ids) => {
            navigate(`proposals/${ids[0]}`);
          }}
          rowsPerPageOptions={[5, 10, 20]}
          getRowSpacing={(params) => ({
            top: params.isFirstVisible ? 0 : 6,
            bottom: params.isLastVisible ? 0 : 6,
          })}
          getRowId={(row) => row._id}
          sx={{
            [`& .${gridClasses.row}`]: {
              backgroundColor: "rgb(128,128,128,0.2)",
              cursor: "pointer",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default ProposalsDataGrid;

//Dummy proposal rows for filling out table

let rows = [
  {
    _id: 1,
    username: "bilal50081",
    photoURL: bilal,
    name: "Bilal Malik",
    price: 400,
    location: "Rawalpindi",
    timeline: 15,
  },
  {
    _id: 2,
    username: "bilal50081",
    photoURL: bilal,
    name: "Bilal Malik",
    price: 400,
    location: "Rawalpindi",
    timeline: 15,
  },
  {
    _id: 3,
    username: "bilal50081",
    photoURL: bilal,
    name: "Bilal Malik",
    price: 400,
    location: "Rawalpindi",
    timeline: 15,
  },
  {
    _id: 4,
    username: "bilal50081",
    photoURL: bilal,
    name: "Bilal Malik",
    price: 400,
    location: "Rawalpindi",
    timeline: 15,
  },
  {
    _id: 5,
    username: "bilal50081",
    photoURL: safwan,
    name: "Bilal Malik",
    price: 400,
    location: "Rawalpindi",
    timeline: 15,
  },
  {
    _id: 6,
    username: "bilal50081",
    photoURL: bilal,
    name: "Bilal Malik",
    price: 400,
    location: "Rawalpindi",
    timeline: 15,
  },
  {
    _id: 7,
    username: "bilal50081",
    photoURL: safwan,
    name: "Bilal Malik",
    price: 400,
    location: "Rawalpindi",
    timeline: 15,
  },
  {
    _id: 8,
    username: "bilal50081",
    photoURL: safwan,
    name: "Bilal Malik",
    price: 400,
    location: "Rawalpindi",
    timeline: 15,
  },
  {
    _id: 9,
    username: "bilal50081",
    photoURL: safwan,
    name: "Bilal Malik",
    price: 400,
    location: "Rawalpindi",
    timeline: 15,
  },
  {
    _id: 10,
    username: "bilal50081",
    photoURL: safwan,
    name: "Bilal Malik",
    price: 400,
    location: "Rawalpindi",
    timeline: 15,
  },
];
