import { Avatar, ListItem, ListItemAvatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./ChatMessage.css";

export default function ChatMessage({ message, primary }) {
  return (
    <ListItem>
      {primary && (
        <ListItemAvatar>
          <Avatar>r</Avatar>
        </ListItemAvatar>
      )}
      <Box
        maxWidth="75%"
        width="fit-content"
        className={`chat-message ${
          primary ? "message-primary" : "message-secondary"
        }`}
      >
        <Typography>{message.text}</Typography>
        <Typography
          variant="caption"
          textAlign="right"
          width="100%"
          display={"inline-block"}
        >
          {message.time}
        </Typography>
      </Box>
    </ListItem>
  );
}
