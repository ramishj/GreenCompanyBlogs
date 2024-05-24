import React from "react";
import { useMediaQuery } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import "./navbar.css"; // Import your CSS file

const Navbar: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:768px)"); // Set mobile breakpoint as 576px
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setOpen(isOpen);
  };

  if (isMobile) {
    return (
      <AppBar sx={{position:"static",border: "2px solid #000"}}>
        <Toolbar>
          
          <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            <List>
              <ListItemButton>
                <ListItemText primary="Home" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Blogs" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Discussion Forum" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Events" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Contact Us" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Join Us" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Sign In" />
              </ListItemButton>
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
          <li className="navbar-item"><a href="#home">Home</a></li>
          <li className="navbar-item"><a href="#blogs">Blogs</a></li>
          <li className="navbar-item"><a href="#discussion-forum">Discussion Forum</a></li>
          <li className="navbar-item"><a href="#events">Events</a></li>
          <li className="navbar-item"><a href="#contact-us">Contact Us</a></li>
          <li className="navbar-item"><a href="#join-us">Join Us</a></li>
          <li className="navbar-item"><a href="#sign-in">Sign in</a></li>
        </ul>
      </nav>
    );
  }
};

export default Navbar;
