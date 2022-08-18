import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { Button, Stack } from "@mui/material";

const UsersActions = ({ disabled }) => {
  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <Button
        variant="contained"
        size="medium"
        disableElevation
        disabled={disabled}
        sx={{
          backgroundColor: "red",
          "&:hover": {
            backgroundColor: "rgb(255, 0, 0,0.75)",
          },
        }}
        startIcon={<CancelIcon />}
      >
        Decline
      </Button>
      <Button
        variant="contained"
        disableElevation
        disabled={disabled}
        size="medium"
        sx={{
          backgroundColor: "green",
          "&:hover": {
            backgroundColor: "rgb(0, 128, 0,0.75)",
          },
        }}
        startIcon={<CheckCircleIcon />}
      >
        Accept
      </Button>
    </Stack>
  );
};

export default UsersActions;
