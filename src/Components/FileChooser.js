import AttachFile from "@mui/icons-material/AttachFile";
import { Button, Stack, Typography } from "@mui/material";
import ExternalLink from "./ExternalLink";

export default function FileChooser({
  value,
  onChange,
  accept = "*",
  required,
  name = "files",
}) {
  return (
    <Stack
      direction={"row"}
      component="label"
      alignItems="center"
      htmlFor="attachments-button"
      sx={{ position: "relative" }}
      title="Uploading new files will replace existing files"
    >
      <Button variant="outlined" sx={{ maxWidth: "sm" }}>
        <label htmlFor="attachments-button">
          <input
            accept={accept}
            id="attachments-button"
            multiple
            name={name}
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
      {[...value].map((e, i) => {
        return e.name ? (
          <Typography key={i} variant="caption" ml={1}>
            {e.name},
          </Typography>
        ) : (
          <ExternalLink link={e} name={`File-${i}`} />
        );
      })}
    </Stack>
  );
}
