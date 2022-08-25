import { Add } from "@mui/icons-material";
import {
  Box,
  Divider,
  Fab,
  Grid,
  Paper,
  Slide,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axiosInstance, { endPoints } from "../axiosInstance";
import ChatCard from "../Components/ChatsPage/ChatCard";
import ChatsList from "../Components/ChatsPage/ChatsList";
import { uiActions } from "../Store/Slices/uiSlice";

const fabStyle = {
  position: "absolute",
  bottom: 30,
  right: 30,
};
const chats = [
  {
    to: {
      username: "receiver12",
      city: "Islamabad",
      fullname: "Mr. Receiver",
    },
    lastMessage: "Lorem Ipsum Dolor etc",
    avatar: "",
  },
  {
    to: {
      username: "receiver30",
      city: "Islamabad",
      fullname: "Miss. Receiver",
    },
    lastMessage: "Lorem Ipsum Dolor etc",
    avatar: "",
  },
  {
    to: {
      username: "receiver12",
      city: "Islamabad",
      fullname: "Mr. Receiver",
    },
    lastMessage: "Lorem Ipsum Dolor etc",
    avatar: "",
  },
  {
    to: {
      username: "receiver12",
      city: "Islamabad",
      fullname: "Mr. Receiver",
    },
    lastMessage: "Lorem Ipsum Dolor etc",
    avatar: "",
  },
  {
    to: {
      username: "receiver12",
      city: "Islamabad",
      fullname: "Mr. Receiver",
    },
    lastMessage: "Lorem Ipsum Dolor etc",
    avatar: "",
  },
  {
    to: {
      username: "receiver12",
      city: "Islamabad",
      fullname: "Mr. Receiver",
    },
    lastMessage: "Lorem Ipsum Dolor etc",
    avatar: "",
  },
  {
    to: {
      username: "receiver12",
      city: "Islamabad",
      fullname: "Mr. Receiver",
    },
    lastMessage: "Lorem Ipsum Dolor etc",
    avatar: "",
  },
  {
    to: {
      username: "receiver12",
      city: "Islamabad",
      fullname: "Mr. Receiver",
    },
    lastMessage: "Lorem Ipsum Dolor etc",
    avatar: "",
  },
  {
    to: {
      username: "receiver12",
      city: "Islamabad",
      fullname: "Mr. Receiver",
    },
    lastMessage: "Lorem Ipsum Dolor etc",
    avatar: "",
  },
  {
    to: {
      username: "receiver12",
      city: "Islamabad",
      fullname: "Mr. Receiver",
    },
    lastMessage: "Lorem Ipsum Dolor etc",
    avatar: "",
  },
];
export default function ChatsPage() {
  const [chats, setChats] = useState([]);
  const { userId } = useParams(),
    dispatch = useDispatch(),
    token = useSelector((state) => state.auth.token);
  const [activeChat, setActiveChat] = useState(null);
  const matches = useMediaQuery("(max-width: 600px)");

  const URL = `${endPoints.CHAT}/users/${userId}`;

  const fetchUserChat = async () => {
    try {
      const response = await axiosInstance.get(URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const responseChat = response.data.chat;
      setChats((old) => [responseChat, ...old]);
      setActiveChat(responseChat);
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

  const fetchChats = async () => {
    try {
      const response = await axiosInstance.get(`${endPoints.USER}/chats`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setChats(response.data.user?.chats);
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

  const afterNewMessage = () => {
    fetchChats();
  };

  useEffect(() => {
    (async () => {
      dispatch(uiActions.setLoading(true));
      if (userId) await fetchUserChat();
      else await fetchChats();
      dispatch(uiActions.setLoading(false));
    })();
  }, []);

  const desktopUI = (
    <Grid container>
      <Grid item xs={12} sm={4} position="relative">
        <ChatsList chats={chats} onChatClick={(chat) => setActiveChat(chat)} />
      </Grid>
      <Grid item xs={0} sm={8}>
        <ChatCard
          chat={activeChat}
          onClose={(_) => setActiveChat(null)}
          afterNewMessage={afterNewMessage}
        />
      </Grid>
    </Grid>
  );

  const mobileUI = (
    <Box>
      <Slide direction="right" in={!activeChat} mountOnEnter unmountOnExit>
        <Box>
          <ChatsList
            chats={chats}
            onChatClick={(chat) => setActiveChat(chat)}
          />
          <Fab color="primary" sx={fabStyle}>
            <Add />
          </Fab>
        </Box>
      </Slide>
      <Slide
        direction="left"
        in={Boolean(activeChat)}
        mountOnEnter
        unmountOnExit
      >
        <Box>
          <ChatCard
            chat={activeChat}
            onClose={(_) => setActiveChat(null)}
            afterNewMessage={afterNewMessage}
          />
        </Box>
      </Slide>
    </Box>
  );

  return (
    <Container
      maxWidth="xl"
      sx={{ mt: 15, pt: 2 }}
      component={Paper}
      variant="outlined"
    >
      <Typography variant="h4" fontWeight="bold">
        Chats
      </Typography>
      <Divider sx={{ mb: 1 }} />
      {matches ? mobileUI : desktopUI}
    </Container>
  );
}
