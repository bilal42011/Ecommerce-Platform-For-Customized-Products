import React, { useState } from "react";
import { Typography, Box, Chip } from "@mui/material";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { requestStatus } from "../../../assets/js/utils";

let columns = [
  {
    field: "_id",
    headerName: "Request ID",
    align: "center",
    headerAlign: "center",
    flex: 1,
  },
  {
    field: "description",
    headerName: "Description",
    align: "center",
    headerAlign: "center",
    flex: 1,
  },
  {
    field: "budget",
    headerName: "Budget",
    type: "number",
    align: "center",
    headerAlign: "center",
    flex: 1,
    valueFormatter: (params) => `Rs. ${params.value} /-`,
  },

  {
    field: "deliveryTime",
    headerName: "Timeline",
    align: "center",
    headerAlign: "center",
    flex: 1,
    valueFormatter: (params) => `${params.value} Day(s)`,
  },
  {
    field: "requestStatus",
    headerName: "Request Status",
    headerAlign: "center",
    align: "center",
    flex: 1,
    renderCell: (params) => {
      console.log("params", params);
      return (
        <Chip
          label={requestStatus[params.row.status].text}
          color={requestStatus[params.row.status].color}
        />
      );
    },
  },
];

let CustomRequestsDataGrid = ({ requests }) => {
  let [pageSize, setPageSize] = useState(5);
  let [selectionModel, setSelectionModel] = useState([]);
  const navigate = useNavigate();
  const rows = requests;

  return (
    <Box sx={{ paddingTop: "3rem" }}>
      <Typography
        sx={{
          width: "fit-content",
          fontSize: "2.5rem",
          margin: "auto",
          paddingBottom: "3rem",
          textAlign: "center",
          color: "#152035",
          fontFamily: "Roboto condensed, sans-serif",
          fontWeight: "bold",
        }}
        variant="h5"
      >
        Your Custom Requests
      </Typography>

      <Box sx={{ width: "100%", margin: "auto" }}>
        <DataGrid
          autoHeight
          rowHeight={95}
          {...{ columns, rows }}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          getRowSpacing={(params) => ({
            top: params.isFirstVisible ? 0 : 6,
            bottom: params.isLastVisible ? 0 : 6,
          })}
          getRowId={(row) => row._id}
          selectionModel={selectionModel}
          onSelectionModelChange={(newSelectionModel) => {
            console.log(newSelectionModel);
            setSelectionModel(newSelectionModel);
            navigate(`${newSelectionModel[0]}`);
          }}
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

export default CustomRequestsDataGrid;

// Dummy Values to Fill the Rows

// let rows = [
//   {
//     _id: 1,
//     description:
//       "We are looking for a craftsman who can build a iron frame with vast expertise in field",
//     budget: 400,
//     timeline: 3,
//     requestStatus: "Pending",
//   },
//   {
//     _id: 2,
//     description:
//       "We are looking for a craftsman who can build a iron frame with vast expertise in field",
//     budget: 400,
//     timeline: 3,
//     requestStatus: "Open",
//   },
//   {
//     _id: 3,
//     description:
//       "We are looking for a craftsman who can build a iron frame with vast expertise in field",
//     budget: 400,
//     timeline: 3,
//     requestStatus: "Pending",
//   },
//   {
//     _id: 4,
//     description:
//       "We are looking for a craftsman who can build a iron frame with vast expertise in field",
//     budget: 400,
//     timeline: 3,
//     requestStatus: "Pending",
//   },
//   {
//     _id: 5,
//     description:
//       "We are looking for a craftsman who can build a iron frame with vast expertise in field",
//     budget: 400,
//     timeline: 3,
//     requestStatus: "Pending",
//   },
//   {
//     _id: 6,
//     description:
//       "We are looking for a craftsman who can build a iron frame with vast expertise in field",
//     budget: 400,
//     timeline: 3,
//     requestStatus: "Open",
//   },
//   {
//     _id: 7,
//     description:
//       "We are looking for a craftsman who can build a iron frame with vast expertise in field",
//     budget: 400,
//     timeline: 3,
//     requestStatus: "Pending",
//   },
//   {
//     _id: 8,
//     description:
//       "We are looking for a craftsman who can build a iron frame with vast expertise in field",
//     budget: 400,
//     timeline: 3,
//     requestStatus: "Pending",
//   },
//   {
//     _id: 9,
//     description:
//       "We are looking for a craftsman who can build a iron frame with vast expertise in field",
//     budget: 400,
//     timeline: 3,
//     requestStatus: "Open",
//   },
//   {
//     _id: 10,
//     description:
//       "We are looking for a craftsman who can build a iron frame with vast expertise in field",
//     budget: 400,
//     timeline: 3,
//     requestStatus: "Pending",
//   },
// ];
