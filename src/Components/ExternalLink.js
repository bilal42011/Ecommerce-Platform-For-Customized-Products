import { Download } from "@mui/icons-material";
import { Button, Link } from "@mui/material";

export default function ExternalLink({
  baseUrl = "http://localhost:8000",
  link,
}) {
  return (
    <Link href={`${baseUrl}/${link}`} target="_blank">
      <Button size="small" endIcon={<Download />}>
        {link.split("\\").pop()}
      </Button>
    </Link>
  );
}
