import { Avatar, Box, CardHeader, Chip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  apiServerUrl,
  getRemainingTime,
  orderStatus,
} from "../../assets/js/utils";

export default function ActiveOrdersTable({ orders, asSeller }) {
  const [pageSize, setPageSize] = useState(10);
  const navigate = useNavigate();

  const columns = [
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
      headerName: `${asSeller ? "Buyer" : "Seller"}`,
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => {
        const user = asSeller ? params.row.buyerId : params.row.sellerId;

        return (
          <CardHeader
            avatar={
              <Avatar src={apiServerUrl(params.row.sellerId.avatar)}>
                {params.row.sellerId.fullName[0]}
              </Avatar>
            }
            title={user.fullName}
          />
        );
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
      field: "timeline",
      headerName: "Due In",
      type: "number",
      align: "center",
      headerAlign: "center",
      valueGetter: (params) => {
        return getRemainingTime(params.row.dueIn);
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
            color={orderStatus[params.row.orderStatus].color}
            variant="filled"
            label={orderStatus[params.row.orderStatus].text}
          />
        );
      },
    },
  ];

  return (
    <Box sx={{ width: "100%", margin: "auto" }}>
      <DataGrid
        autoHeight
        rowHeight={95}
        columns={columns}
        rows={orders}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        onSelectionModelChange={(ids) => {
          navigate(
            `/profile/orders/${asSeller ? "seller" : "buyer"}/${ids[0]}`
          );
        }}
        rowsPerPageOptions={[5, 10, 20]}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 6,
          bottom: params.isLastVisible ? 0 : 6,
        })}
        getRowId={(row) => row._id}
      />
    </Box>
  );
}

// OLd table replaced with data grid
// return (
//   <Table>
//     <TableHead>
//       <TableRow sx={{ textAlign: "center" }}>
//         <TableCell>{asSeller ? "Buyer" : "Seller"}</TableCell>
//         <TableCell>Price</TableCell>
//         <TableCell>Due In</TableCell>
//         <TableCell></TableCell>
//       </TableRow>
//     </TableHead>
//     <TableBody>
//       {orders.map((elem, idx) => {
//         let user = asSeller ? elem.buyerId : elem.sellerId;
//         return (
//           <TableRow key={idx}>
//             <TableCell>
//               <Stack direction="row" spacing={1} alignItems="center">
//                 <Avatar src={apiServerUrl(user.avatar)}>
//                   {user.fullName.charAt(0)}
//                 </Avatar>
//                 <Typography>{user.fullName}</Typography>
//               </Stack>
//             </TableCell>
//             <TableCell>
//               <Typography>Rs. {elem.budget} </Typography>
//             </TableCell>
//             <TableCell>
//               {!elem.isDeliverd ? (
//                 <Typography display="flex" alignItems="center">
//                   <ScheduleOutlined
//                     sx={{
//                       verticalAlign: "middle",
//                       width: 18,
//                       height: 18,
//                       mr: 1,
//                     }}
//                   />
//                   {getRemainingTime(elem.dueIn)}
//                 </Typography>
//               ) : (
//                 <Chip color="secondary" label="Delivered" />
//               )}
//             </TableCell>
//             <TableCell>
//               <Link className="ghost-link" to={`/profile/orders/${elem._id}`}>
//                 <Button>View</Button>
//               </Link>
//             </TableCell>
//           </TableRow>
//         );
//       })}
//       <TableRow>
//         <TableCell colSpan={4}>
//           <Button fullWidth>View All Orders</Button>
//         </TableCell>
//       </TableRow>
//     </TableBody>
//   </Table>
// );
