import { Divider, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import ChatCard from "../Components/ChatsPage/ChatCard/ChatCard";
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
      <Grid container>
        <Grid item xs={12} sm={4}>
          <ChatsList
            chats={chats}
            onChatClick={(chat) => setActiveChat(chat)}
          />
        </Grid>
        <Grid item xs={0} sm={8}>
          <ChatCard chat={activeChat} onClose={(_) => setActiveChat(null)} />
        </Grid>
      </Grid>
    </Container>
  );
}
