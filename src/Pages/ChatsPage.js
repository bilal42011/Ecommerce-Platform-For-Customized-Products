import {
  Box,
  Divider,
  Grid,
  Paper,
  Slide,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import ChatCard from "../Components/ChatsPage/ChatCard";
import ChatsList from "../Components/ChatsPage/ChatsList";

export default function ChatsPage() {
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

  const [activeChat, setActiveChat] = useState(null);

  const matches = useMediaQuery("(max-width: 600px)");

  const desktopUI = (
    <Grid container>
      <Grid item xs={12} sm={4}>
        <ChatsList chats={chats} onChatClick={(chat) => setActiveChat(chat)} />
      </Grid>
      <Grid item xs={0} sm={8}>
        <ChatCard chat={activeChat} onClose={(_) => setActiveChat(null)} />
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
        </Box>
      </Slide>
      <Slide
        direction="left"
        in={Boolean(activeChat)}
        mountOnEnter
        unmountOnExit
      >
        <Box>
          <ChatCard chat={activeChat} onClose={(_) => setActiveChat(null)} />
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
