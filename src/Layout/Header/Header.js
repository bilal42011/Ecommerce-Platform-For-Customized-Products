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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import styles from "../../styles/header.module.css";

const pages = [
  { name: "Browse", url: "/search" },
  { name: "Become a Seller", url: "/signup" },
  { name: "Request a Custom Product", url: "profile/1/requestcustomproduct" },
];
const nonActiveClassname = [styles.navLink, styles.nonactiveNavLink].join(" ");
const ActiveClassname = [styles.navLink, styles.activeNavLink].join(" ");
const headingStyles = { textDecoration: "none", color: "white" };

const Header = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let [anchorEl, setanchorEl] = useState(null);
  const handleMenuButtonClick = (event) => {
    setanchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setanchorEl(null);
  };

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
            <Button
              variant="outlined"
              onClick={() => navigate("login")}
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
            <Button
              variant="contained"
              onClick={() => navigate("signup")}
              sx={{
                marginLeft: 1,
                fontFamily: "Roboto, sans-serif",
                fontWeight: "bolder",
              }}
            >
              JOIN
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
