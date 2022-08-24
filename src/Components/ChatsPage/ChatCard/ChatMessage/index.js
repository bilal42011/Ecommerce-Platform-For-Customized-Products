import { Avatar, ListItem, ListItemAvatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { apiServerUrl, formatTime } from "../../../../assets/js/utils";
import "./ChatMessage.css";

export default function ChatMessage({ sender, message, primary }) {
  return (
    <ListItem>
      {primary && (
        <ListItemAvatar>
          <Avatar src={apiServerUrl(sender?.avatar)}>
            {sender?.fullName[0]}
          </Avatar>
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
          {formatTime(message.createdAt)}
        </Typography>
      </Box>
    </ListItem>
  );
}
