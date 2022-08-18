/**
 * Render file attachments
 * @param {File} files - file object => { filename, path }
 * @returns Stack
 */

import { Stack } from "@mui/material";
import ExternalLink from "./ExternalLink";

export default function Attachments({ files }) {
  return (
    <Stack
      sx={{
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        justifyContent: "flex-end",
      }}
    >
      {files?.map((item, index) => (
        <ExternalLink key={index} link={item} />
      ))}
    </Stack>
  );
}
