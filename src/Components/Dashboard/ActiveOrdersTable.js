import { ScheduleOutlined } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Chip,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function ActiveOrdersTable({ orders }) {
  return (
    <Table>
      <TableHead>
        <TableRow sx={{ textAlign: "center" }}>
          <TableCell>Buyer</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Due In</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {orders.map((elem, idx) => {
          return (
            <TableRow key={idx}>
              <TableCell>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Avatar>{elem.buyerUsername.charAt(0)}</Avatar>
                  <Typography>{elem.buyerUsername}</Typography>
                </Stack>
              </TableCell>
              <TableCell>
                <Typography>Rs. {elem.price} </Typography>
              </TableCell>
              <TableCell>
                {!elem.isDeliverd ? (
                  <Typography display="flex" alignItems="center">
                    <ScheduleOutlined
                      sx={{
                        verticalAlign: "middle",
                        width: 18,
                        height: 18,
                        mr: 1,
                      }}
                    />
                    {elem.timeRemaining}{" "}
                  </Typography>
                ) : (
                  <Chip color="secondary" label="Delivered" />
                )}
              </TableCell>
              <TableCell>
                <Link
                  className="ghost-link"
                  to="/profile/userId/orders/orderId"
                >
                  <Button>View</Button>
                </Link>
              </TableCell>
            </TableRow>
          );
        })}
        <TableRow>
          <TableCell colSpan={4}>
            <Button fullWidth>View All Orders</Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
