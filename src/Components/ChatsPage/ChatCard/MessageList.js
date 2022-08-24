import { List, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";

export default function MessageList({ messages, to }) {
  const user = useSelector((state) => state.auth.user);
  if (!messages || !messages.length) {
    return (
      <Typography textAlign="center" color="GrayText">
        No Messages yet
      </Typography>
    );
  }

  return (
    <List>
      {messages.map((item, index) => {
        return (
          <ChatMessage
            sender={to}
            message={item}
            primary={item.sender !== user._id}
            key={index}
          />
        );
      })}
    </List>
  );
}
