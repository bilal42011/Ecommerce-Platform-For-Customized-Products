import { List } from "@mui/material";

import ChatMessage from "./ChatMessage";

export default function MessageList({ messages }) {
  return (
    <List>
      {messages.map((item, index) => {
        return (
          <ChatMessage message={item} primary={index % 2 === 0} key={index} />
        );
      })}
    </List>
  );
}
