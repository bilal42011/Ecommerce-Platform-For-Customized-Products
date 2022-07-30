import { Container } from "@mui/system";
import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ mt: 10 }}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
