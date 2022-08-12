import { Box, CircularProgress } from "@mui/material";

export default function OverlaySpinner() {
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
        backgroundColor: "white",
        opacity: "0.5",
        zIndex: 1,
      }}
    >
      <CircularProgress />
    </Box>
  );
}
