import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { apiServerUrl } from "../../assets/js/utils";

export default function ChatListItem({ chat, onClick }) {
  return (
    <ListItem>
      <ListItemButton onClick={onClick}>
        <ListItemAvatar>
          <Avatar src={apiServerUrl(chat.to.avatar)}>
            {chat.to.fullName.charAt(0)}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={chat.to.fullName}
          secondary={chat.lastMessage?.text || "No messages yet"}
        />
      </ListItemButton>
    </ListItem>
  );
}
