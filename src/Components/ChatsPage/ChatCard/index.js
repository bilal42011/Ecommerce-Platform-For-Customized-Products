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
import { useDispatch, useSelector } from "react-redux";
import { apiServerUrl, formatTime } from "../../../assets/js/utils";
import axiosInstance, { endPoints } from "../../../axiosInstance";
import { uiActions } from "../../../Store/Slices/uiSlice";
import MessageList from "./MessageList";

export default function ChatCard({ chat, onClose, afterNewMessage }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const dispatch = useDispatch(),
    token = useSelector((state) => state.auth.token);

  const URL = `${endPoints.CHAT}/${chat ? chat._id : ""}`;
  const fetchMessages = async () => {
    try {
      const response = await axiosInstance.get(URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessages(response.data.messages);
    } catch (error) {
      console.log(error);
      dispatch(
        uiActions.setAlert({
          severity: "error",
          text: "ERROR: " + error.response.data.message || error.message,
        })
      );
    }
  };

  useEffect(() => {
    if (chat) fetchMessages();
  }, [chat]);

  const onNewMessage = async (e) => {
    e.preventDefault();
    try {
      const messageBody = {
        message: { text: message },
      };
      const response = await axiosInstance.post(URL, messageBody, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const msg = response.data.message;
      setMessages((old) => [...old, msg]);
      setMessage("");
      afterNewMessage && afterNewMessage(msg);
    } catch (error) {
      console.log(error);
      dispatch(
        uiActions.setAlert({
          severity: "error",
          text: "ERROR: " + error.response.data.message || error.message,
        })
      );
    }
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
      {!chat ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography>{"Select a Chat"}</Typography>
        </Box>
      ) : (
        <>
          <CardHeader
            title={<Typography variant="h6">{chat.to.fullName}</Typography>}
            subheader={chat.to.city}
            avatar={
              <Avatar src={apiServerUrl(chat.to.avatar)}>
                {chat.to.fullName.charAt(0)}
              </Avatar>
            }
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
            <MessageList to={chat?.to} messages={messages} />
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
