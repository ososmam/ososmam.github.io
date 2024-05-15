import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  Typography,
  styled,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import DrawerItem from "./DrawerItem";

import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";

import useMediaQuery from "@mui/material/useMediaQuery";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const ListMenu = styled(List)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const itemList = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "About",
    to: "/about",
  },
  {
    text: "Contact",
    to: "/contact",
  },
];

const Navbar = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <AppBar
      component="nav"
      position="sticky"
      sx={{
        backgroundColor: "#414141",
      }}
      elevation={0}
    >
      <StyledToolbar>
        {isNonMobile && (
          <>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src={logoImg}
                alt=""
                style={{
                  width: "64px",
                  marginRight: "10px",
                }}
              />

              <Typography variant="h6" component="h2">
                Taslia Studio
              </Typography>
            </Box>
          </>
        )}
        {!isNonMobile && (
          <>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src={logoImg}
                alt=""
                style={{
                  width: "32px",
                  marginRight: "10px",
                }}
              />

              <Typography variant="h6" component="h2">
                Taslia Studio
              </Typography>
            </Box>
          </>
        )}
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <DrawerItem />
        </Box>
        <ListMenu>
          {itemList.map((item) => {
            const { text } = item;
            return (
              <ListItem key={text}>
                <ListItemButton
                  component={Link}
                  to={item.to}
                  sx={{
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#1e2a5a",
                    },
                  }}
                >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </ListMenu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
