import { Box, CircularProgress } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function OverlaySpinner({ completed }) {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        zIndex: 1,
      }}
    >
      <Box //backdrop
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          bgcolor: "white",
          opacity: "0.5",
        }}
      />
      {!completed ? <CircularProgress /> : <CheckCircleOutlineIcon />}
    </Box>
  );
}
