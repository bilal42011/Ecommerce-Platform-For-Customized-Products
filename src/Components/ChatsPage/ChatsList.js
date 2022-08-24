import { Add } from "@mui/icons-material";
import { Fab, List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ChatListItem from "./ChatListItem";

const boxStyles = {
  height: "100%",
  minHeight: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function ChatsList({ chats, onChatClick }) {
  return (
    <List
      sx={{
        width: "100%",
        maxHeight: "75vh",
        minHeight: "75vh",
        overflowY: "scroll",
        position: "relative",
      }}
    >
      {chats.length === 0 && (
        <Box sx={boxStyles}>
          <Typography color="GrayText" sx={{ height: "100%" }}>
            No Chats Yet
          </Typography>
        </Box>
      )}
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
