import { List } from "@mui/material";
import ChatListItem from "./ChatListItem";

export default function ChatsList({ chats, onChatClick }) {
  return (
    <List sx={{ width: "100%", maxHeight: "75vh", overflowY: "scroll" }}>
      {chats.map((item, index) => {
        return (
          <ChatListItem
            chat={item}
            key={index}
            onClick={(_) => onChatClick(item)}
          />
        );
      })}
    </List>
  );
}
