import { Container } from "@mui/system";
import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container
        maxWidth="100%"
        sx={{ mt: 11, minHeight: "37.5rem" }}
        disableGutters
      >
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
