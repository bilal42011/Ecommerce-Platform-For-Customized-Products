import { Avatar, Button, CardHeader, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { apiServerUrl } from "../../assets/js/utils";
import { authActions } from "../../Store/Slices/authSlice/authSlice";

const BUYER_LINKS = [
  {
    title: "Profile",
    link: "/profile",
  },
  {
    title: "Dashboard",
    link: "/profile/dashboard",
  },
];

const SELLER_LINKS = [
  {
    title: "Profile",
    link: "/profile",
  },
  {
    title: "Dashboard",
    link: "/profile/dashboard",
  },
  {
    title: "Products",
    link: "/profile",
  },
  {
    title: "Change Category",
    link: "/profile/become-a-seller",
  },
];

export default function AvatarContextMenu({ user }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(authActions.logout());
  };

  const LINKS = user.isSeller ? SELLER_LINKS : BUYER_LINKS;

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <CardHeader
          title={user.firstName}
          sx={{ color: "white" }}
          avatar={
            <Avatar src={apiServerUrl(user.avatar)}>
              {user.firstName.charAt(0)}
            </Avatar>
          }
        />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {LINKS.map((elem, idx) => {
          return (
            <MenuItem key={idx}>
              <Link className="ghost-link" to={elem.link}>
                {elem.title}
              </Link>
            </MenuItem>
          );
        })}
        <MenuItem onClick={onLogOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
