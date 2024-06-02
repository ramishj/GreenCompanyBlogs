// Navbar.tsx
import React from "react";
import { useMediaQuery } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === "keydown" && ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")) {
      return;
    }
    setOpen(isOpen);
  };

  const getClassName = (isActive: boolean) => isActive ? "nav-link active" : "nav-link";

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/blogs", label: "Blogs" },
    { to: "/discussion-forum", label: "Discussion Forum" },
    { to: "/events", label: "Events" },
    { to: "/contact-us", label: "Contact Us" },
    { to: "/join-us", label: "Join Us" },
    { to: "/login", label: "Sign In" },
  ];

  if (isMobile) {
    return (
      <AppBar sx={{ position: "static", border: "2px solid #000" ,backgroundColor:"white"}}>
        <Toolbar>
          <IconButton edge="start" color="inherit" sx={{color:"black"}} aria-label="open drawer" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            <List>
              {navItems.map((item) => (
                <ListItem key={item.to} component="div">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => getClassName(isActive)}
                    onClick={toggleDrawer(false)}
                  >
                    <ListItemText primary={item.label} />
                  </NavLink>
                </ListItem>
              ))}
            </List>
            <IconButton sx={{ position: "absolute", top: "10px", right: "10px" }} onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Drawer>
        </Toolbar>
      </AppBar>
    );
  } else {
    return (
      <nav className="navbar">
        <ul className="navbar-list">
          {navItems.map((item) => (
            <li className="navbar-item" key={item.to}>
              <NavLink to={item.to} className={({ isActive }) => getClassName(isActive)}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
};

export default Navbar;
