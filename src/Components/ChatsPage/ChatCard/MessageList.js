import { List } from "@mui/material";
import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage/ChatMessage";

export default function MessageList({ messages }) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.lastElementChild.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div>
      <List ref={ref}>
        {messages.map((item, index) => {
          return (
            <ChatMessage message={item} primary={index % 2 === 0} key={index} />
          );
        })}
      </List>
    </div>
  );
}
