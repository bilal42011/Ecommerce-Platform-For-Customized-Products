import React, { useState, useEffect } from "react";
import {
  AppBar,
  Typography,
  Menu,
  MenuItem,
  Toolbar,
  Container,
  Box,
  IconButton,
  Button,
  CardHeader,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useLocation, Link } from "react-router-dom";
import styles from "../../styles/header.module.css";
import { useSelector } from "react-redux";
import { apiServerUrl } from "../../assets/js/utils";

const nonActiveClassname = [styles.navLink, styles.nonactiveNavLink].join(" ");
const ActiveClassname = [styles.navLink, styles.activeNavLink].join(" ");
const headingStyles = { textDecoration: "none", color: "white" };

const Header = () => {
  let location = useLocation();
  let [anchorEl, setanchorEl] = useState(null);

  const user = useSelector((state) => state.auth.user?.user);
  console.log("user", user);
  const isLoggedIn = Boolean(user);

  const pages = [
    { name: "Browse", url: "/search" },
    {
      name: "Become a Seller",
      url: `${!user ? "/login" : "/profile/become-a-seller"}`,
    },
    { name: "Request a Custom Product", url: "/profile/requestcustomproduct" },
    {
      name: "Buyer Requests",
      url: (() => {
        if (!user) return "/login";
        else if (user.isSeller) return "/profile/buyers-requests";
        else return "/profile/customrequests";
      })(),
    },
  ];

  const handleMenuButtonClick = (event) => {
    setanchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setanchorEl(null);
  };

  const onLogOut = () => {};

  useEffect(() => {
    setanchorEl(null);
  }, [location]);

  return (
    <AppBar sx={{ backgroundColor: "rgb(29, 191, 115)", height: "87px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ height: "100%", my: 1 }}>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: { xs: 1, sm: 0 },
            }}
          >
            <IconButton
              aria-label="menu button for small screen"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenuButtonClick}
            >
              <MenuIcon sx={{ fontSize: "2.5rem", color: "white" }} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              id="menu-appbar"
              open={Boolean(anchorEl)}
              onClose={handleClose}
              keepMounted
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} sx={{ display: "block" }}>
                  <NavLink
                    to={`${page.url}`}
                    style={({ isActive }) =>
                      isActive
                        ? {
                            textDecoration: "none",
                            display: "block",
                            color: "rgb(29, 191, 115)",
                            borderBottom: "2px solid rgb(29, 191, 115)",
                            fontWeight: "bold",
                          }
                        : {
                            display: "block",
                            color: "rgb(29, 191, 115)",
                            textDecoration: "none",
                            fontWeight: "bold",
                          }
                    }
                  >
                    {page.name}
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h4"
            sx={{
              display: { xs: "none", sm: "flex" },
              flexGrow: 1,
              fontWeight: "bolder",
              fontFamily: "Roboto Condensed, sans-serif",
            }}
          >
            <NavLink to="/" style={() => headingStyles} end>
              E-Workers
            </NavLink>
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <NavLink
                key={index}
                to={`${page.url}`}
                className={({ isActive }) =>
                  isActive ? ActiveClassname : nonActiveClassname
                }
              >
                <Button
                  variant="text"
                  sx={{
                    fontSize: "17px",
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: "bold",
                    textTransform: "none",
                    color: "white",
                  }}
                >
                  {page.name}
                </Button>
              </NavLink>
            ))}
          </Box>
          <Box sx={{ display: "flex" }}>
            {!isLoggedIn ? (
              <>
                <Link className="ghost-link" to="/login">
                  <Button
                    variant="outlined"
                    sx={{
                      marginLeft: 2,
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: "bolder",
                      border: "2px solid white",
                      color: "white",
                      "&:hover": {
                        border: "2px solid white",
                        backgroundColor: "white",
                        color: "black",
                        fontWeight: "bolder",
                      },
                    }}
                  >
                    LOG IN
                  </Button>
                </Link>
                <Link className="ghost-link" to="/signup">
                  <Button
                    variant="contained"
                    sx={{
                      marginLeft: 1,
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: "bolder",
                    }}
                  >
                    JOIN
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Button onClick={onLogOut} sx={{ color: "white" }}>
                  Log Out
                </Button>
                <Link className="ghost-link" to="/profile/dashboard">
                  <CardHeader
                    title={user.firstName}
                    sx={{ color: "white" }}
                    avatar={
                      <Avatar src={apiServerUrl(user.avatar)}>
                        {user.firstName.charAt(0)}
                      </Avatar>
                    }
                  />
                </Link>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
