import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import { NavLink } from "react-router-dom";
import "../index.css";
export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      className="drawer-Items"
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <CancelIcon className="toggle-btn" />
      <Box>
        <NavLink to="home">Home</NavLink>
      </Box>
      <Box>
        <NavLink to="layouts">layouts</NavLink>
      </Box>
      <Box>
        <NavLink to="apps">Apps</NavLink>
      </Box>
      <Box>
        <NavLink to="customization">Customization</NavLink>
      </Box>
      <Box>
        <NavLink to="features">Features</NavLink>
      </Box>
      <Box>
        <NavLink to="doc">Document</NavLink>
      </Box>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <MenuIcon className="menu-btn" onClick={toggleDrawer(anchor, true)} />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
