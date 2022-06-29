import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const pages = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "Blog", path: "/blog" },
];

const NavList = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Fragment>
      {/* NavList for md */}
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <List sx={{ display: "flex" }}>
          {pages.map(({ name, path }) => (
            <ListItem key={path} disablePadding>
              <ListItemButton>
                <ListItemText>
                  <Link to={path}>{name}</Link>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* NavList for xs */}
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map(({ name, path }) => (
            <MenuItem key={path} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <Link to={path}>{name}</Link>
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Fragment>
  );
};

export default NavList;
