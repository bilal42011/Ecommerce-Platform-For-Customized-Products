import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";

export default function ChatListItem({ chat, onClick }) {
  return (
    <ListItem>
      <ListItemButton onClick={onClick}>
        <ListItemAvatar>
          <Avatar>{chat.to.username.charAt(0)}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={chat.to.fullname} secondary={chat.lastMessage} />
      </ListItemButton>
    </ListItem>
  );
}
