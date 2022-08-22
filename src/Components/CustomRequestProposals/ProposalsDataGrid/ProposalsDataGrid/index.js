import React, { useState } from "react";
import { Box, Avatar, Typography, Chip } from "@mui/material";
import { DataGrid, gridClasses } from "@mui/x-data-grid";

import BuyerRequestInfoCard from "../../../BuyerRequestInfoCard";
import { useNavigate } from "react-router-dom";
import { apiServerUrl, proposalStatus } from "../../../../assets/js/utils";
import OverlaySpinner from "../../../OverlaySpinner";

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
    headerName: "Seller Name",
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
    headerName: "Timeline",
    type: "number",
    align: "center",
    headerAlign: "center",
    valueGetter: (params) => {
      return `${params.row.deliveryTime} Days`;
    },
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    headerAlign: "center",
    align: "center",
    flex: 1,
    renderCell: (params) => {
      return (
        <Chip
          color={proposalStatus[params.row.status].color}
          variant="filled"
          label={proposalStatus[params.row.status].text}
        />
      );
    },
  },
];

const ProposalsDataGrid = ({ request }) => {
  const [pageSize, setPageSize] = useState(5);
  const navigate = useNavigate();

  if (!request) return <OverlaySpinner />;

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

// let rows = [
//   {
//     _id: 1,
//     username: "bilal50081",
//     photoURL: bilal,
//     name: "Bilal Malik",
//     price: 400,
//     location: "Rawalpindi",
//     timeline: 15,
//   },
//   {
//     _id: 2,
//     username: "bilal50081",
//     photoURL: bilal,
//     name: "Bilal Malik",
//     price: 400,
//     location: "Rawalpindi",
//     timeline: 15,
//   },
//   {
//     _id: 3,
//     username: "bilal50081",
//     photoURL: bilal,
//     name: "Bilal Malik",
//     price: 400,
//     location: "Rawalpindi",
//     timeline: 15,
//   },
//   {
//     _id: 4,
//     username: "bilal50081",
//     photoURL: bilal,
//     name: "Bilal Malik",
//     price: 400,
//     location: "Rawalpindi",
//     timeline: 15,
//   },
//   {
//     _id: 5,
//     username: "bilal50081",
//     photoURL: safwan,
//     name: "Bilal Malik",
//     price: 400,
//     location: "Rawalpindi",
//     timeline: 15,
//   },
//   {
//     _id: 6,
//     username: "bilal50081",
//     photoURL: bilal,
//     name: "Bilal Malik",
//     price: 400,
//     location: "Rawalpindi",
//     timeline: 15,
//   },
//   {
//     _id: 7,
//     username: "bilal50081",
//     photoURL: safwan,
//     name: "Bilal Malik",
//     price: 400,
//     location: "Rawalpindi",
//     timeline: 15,
//   },
//   {
//     _id: 8,
//     username: "bilal50081",
//     photoURL: safwan,
//     name: "Bilal Malik",
//     price: 400,
//     location: "Rawalpindi",
//     timeline: 15,
//   },
//   {
//     _id: 9,
//     username: "bilal50081",
//     photoURL: safwan,
//     name: "Bilal Malik",
//     price: 400,
//     location: "Rawalpindi",
//     timeline: 15,
//   },
//   {
//     _id: 10,
//     username: "bilal50081",
//     photoURL: safwan,
//     name: "Bilal Malik",
//     price: 400,
//     location: "Rawalpindi",
//     timeline: 15,
//   },
// ];
