import AttachFile from "@mui/icons-material/AttachFile";
import { Button, FormLabel, Stack, Typography } from "@mui/material";

export default function FileChooser({
  value,
  onChange,
  accept = "*",
  required,
}) {
  return (
    <Stack
      direction={"row"}
      component="label"
      alignItems="center"
      htmlFor="attachments-button"
      sx={{ position: "relative" }}
    >
      <Button variant="outlined" sx={{ maxWidth: "sm" }}>
        <label htmlFor="attachments-button">
          <input
            accept={accept}
            id="attachments-button"
            multiple
            name="files"
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
            required={required}
          />
          Attach Files
          <AttachFile sx={{ verticalAlign: "middle" }} />
        </label>
      </Button>
      {[...value].map((e, i) => (
        <Typography key={i} variant="caption" ml={1}>
          {e.name},
        </Typography>
      ))}
    </Stack>
  );
}
