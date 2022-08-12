import AttachFile from "@mui/icons-material/AttachFile";
import { Button, Stack, Typography } from "@mui/material";

export default function FileChooser({ value, onChange, accept = "*" }) {
  return (
    <Stack
      direction={"row"}
      component="label"
      alignItems="center"
      htmlFor="attachments-button"
      sx={{ position: "relative" }}
    >
      <Button variant="outlined" sx={{ maxWidth: "sm" }}>
        Attach Files
        <AttachFile />
      </Button>
      {[...value].map((e, i) => (
        <Typography key={i} variant="caption" ml={1}>
          {e.name},
        </Typography>
      ))}
      <input
        accept={accept}
        id="attachments-button"
        multiple
        type="file"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0,
        }}
        onChange={(e) => onChange(e, e.target.files)}
      />
    </Stack>
  );
}
