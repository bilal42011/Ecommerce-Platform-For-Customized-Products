import { Divider, Grid, Paper, Tab, Tabs, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance, { endPoints } from "../axiosInstance";
import ActiveOrdersTable from "../Components/Dashboard/ActiveOrdersTable";
import OverlaySpinner from "../Components/OverlaySpinner";
import SellerProfileDescription from "../Components/SellerProfileDescription";

export default function Dashboard() {
  const { user, token } = useSelector((state) => state.auth);

  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [formBusy, setFormBusy] = useState(false);

  const fetchActiveOrders = async (type) => {
    try {
      const response = await axiosInstance.get(type, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(response.data.orders);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  useEffect(() => {
    fetchActiveOrders(endPoints.ORDERS_AS_BUYER);
  }, []);

  const onTabChange = async (e, newValue) => {
    setFormBusy(true);
    if (newValue === 0) {
      await fetchActiveOrders(endPoints.ORDERS_AS_BUYER);
    } else if (newValue === 1) {
      await fetchActiveOrders(endPoints.ORDERS_AS_SELLER);
    }
    setActiveTab(newValue);
    setFormBusy(false);
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 15, position: "relative" }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4}>
          <SellerProfileDescription user={user} dashboard />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper variant="outlined">
            <Typography px={2} py={1} variant="h5">
              Active Orders
            </Typography>
            <Divider />
            <Tabs value={activeTab} onChange={onTabChange}>
              <Tab label="Orders as Buyer" id="tab-1" />
              <Tab label="Orders as Seller" id="tab-2" />
            </Tabs>
            <ActiveOrdersTable orders={orders} asSeller={activeTab === 1} />
          </Paper>
        </Grid>
      </Grid>
      {formBusy && <OverlaySpinner />}
    </Container>
  );
}
