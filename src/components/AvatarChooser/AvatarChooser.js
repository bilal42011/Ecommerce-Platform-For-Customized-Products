import { Avatar, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import "./AvatarChooser.css";

export default function AvatarChooser({ value, onChange }) {
  const [image, setImage] = useState("");

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
      onChange(event.target.files[0]);
    }
  };

  return (
    <Box position={"relative"} width="fit-content" margin="auto">
      <IconButton sx={{ cursor: "pointer" }}>
        <Avatar src={image} sx={{ width: 100, height: 100, margin: "auto" }}>
          OP
        </Avatar>
        <input
          className="avatarChooser"
          type="file"
          name="avatar"
          accept="image/png, image/jpeg"
          onChange={onImageChange}
        />
      </IconButton>
    </Box>
  );
}
