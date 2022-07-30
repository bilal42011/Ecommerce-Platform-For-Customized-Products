import React from "react";
import Layout from "./Layout/Layout";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

const App = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default App;
