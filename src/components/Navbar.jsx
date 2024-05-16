import React,{ useContext }  from "react";
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
  IconButton,
} from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DrawerItem from "./DrawerItem";

import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";

import useMediaQuery from "@mui/material/useMediaQuery";

import { useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../theme";

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
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <AppBar
      component="nav"
      position="sticky"
      sx={{
        backgroundColor: colors.grey[800],
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

              <Typography
                variant="h6"
                component="h2"
                color={colors.primary[100]}
              >
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

              <Typography
                variant="h6"
                component="h2"
                color={colors.primary[100]}
              >
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
                    color: colors.primary[100],
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: colors.redAccent[600],
                    },
                  }}
                >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            );
          })}
          <ListItem>
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>
          </ListItem>
        </ListMenu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
