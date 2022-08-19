import { Close, Send } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import MessageList from "./MessageList";

export default function ChatCard({ chat, onClose }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hello!",
      time: "2: 28pm",
    },
    {
      text: "Hi!",
      time: "2: 28pm",
    },
    {
      text: "How are you?",
      time: "2: 28pm",
    },
    {
      text: "I am fine",
      time: "2: 28pm",
    },
    {
      text: "Wanna have sex?",
      time: "2: 28pm",
    },
    {
      text: "Yeah",
      time: "2: 28pm",
    },
    {
      text: "uss",
      time: "2: 28pm",
    },
    {
      text: "uss",
      time: "2: 28pm",
    },
    {
      text: "uss",
      time: "2: 28pm",
    },
    {
      text: "🥵",
      time: "2: 28pm",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      time: "2: 28pm",
    },
    {
      text: "Lora ipsum dallar",
      time: "2: 28pm",
    },
  ]);

  const onNewMessage = (e) => {
    e.preventDefault();
    const date = new Date();
    const time = `${date.getHours()} : ${date.getMinutes()}`;
    setMessages([
      ...messages,
      {
        text: message,
        time: time,
      },
    ]);
    setMessage("");
  };
  const chatRef = useRef(null);
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scroll({
        top: chatRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  });
  return (
    <Card
      variant="outlined"
      sx={{ height: "100%", maxHeight: "75vh" }}
      component={Stack}
    >
      {!chat || !messages.length ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography>{!chat ? "Select a Chat" : "No messages yet"}</Typography>
        </Box>
      ) : (
        <>
          <CardHeader
            title={<Typography variant="h6">{chat.to.fullname}</Typography>}
            subheader={chat.to.username}
            avatar={<Avatar>{chat.to.username.charAt(0)}</Avatar>}
            action={
              <IconButton onClick={onClose}>
                <Close />
              </IconButton>
            }
          />
          <Divider />
          <CardContent
            ref={chatRef}
            sx={{
              height: "100%",
              maxHeight: "100%",
              overflowY: "scroll",
              bgcolor: grey[100],
            }}
          >
            <MessageList messages={messages} />
          </CardContent>
          <CardActions>
            <form onSubmit={onNewMessage} style={{ width: "100%" }}>
              <TextField
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                fullWidth
                required
                label="Type a message..."
                InputProps={{
                  endAdornment: (
                    <IconButton type="submit" color="default">
                      <Send />
                    </IconButton>
                  ),
                }}
              />
            </form>
          </CardActions>
        </>
      )}
    </Card>
  );
}
