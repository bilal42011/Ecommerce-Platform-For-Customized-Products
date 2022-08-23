import { Alert, AlertTitle, Snackbar } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import OverlaySpinner from "../Components/OverlaySpinner";
import { uiActions } from "../Store/Slices/uiSlice";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  const { isLoading, alert } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <Container
        maxWidth="100%"
        sx={{ mt: 11, minHeight: "37.5rem", position: "relative" }}
        disableGutters
      >
        {children}
        {isLoading && <OverlaySpinner />}

        <Snackbar
          open={Boolean(alert)}
          autoHideDuration={5000}
          onClose={() => {
            dispatch(uiActions.setAlert(null));
          }}
        >
          {alert && (
            <Alert
              severity={alert.severity}
              variant="filled"
              onClose={() => {
                dispatch(uiActions.setAlert(null));
              }}
            >
              <AlertTitle>{alert.title}</AlertTitle>
              {alert.text}
            </Alert>
          )}
        </Snackbar>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
