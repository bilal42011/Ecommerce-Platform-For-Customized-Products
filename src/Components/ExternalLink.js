import { Download } from "@mui/icons-material";
import { Button, Link } from "@mui/material";

export default function ExternalLink({
  baseUrl = "http://localhost:8000",
  link,
  name,
}) {
  return (
    <Link href={`${baseUrl}/${link.path}`} target="_blank">
      <Button size="small" endIcon={<Download />}>
        {name || link.filename}
      </Button>
    </Link>
  );
}
