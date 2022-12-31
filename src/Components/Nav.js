import React from "react";
// import StickyHeadTable from "./StickyHeadTable";
import Sidebar from "../Components/Sidebar";
import logo from "../assests/logo.png";
import figma from "../assests/figma.svg";
import mui from "../assests/mui.svg";
import nextjs from "../assests/nextjs.svg";
import js from "../assests/js.svg";
import ts from "../assests/ts.svg";
import img from "../assests/img.png";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

function Nav() {
  const theme = useTheme();
  const isMatches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div className="wrapper">
      <div className="container">
        <Box>
          <img src={logo} alt="loog" className="logo" />
        </Box>
        {isMatches ? (
          <Box className="Nav-items">
            <NavLink to="home">Home</NavLink>
            <NavLink to="layouts">layouts</NavLink>
            <NavLink to="apps">Apps</NavLink>
            <NavLink to="customization">Customization</NavLink>
            <NavLink to="features">Features</NavLink>
            <NavLink to="doc">Document</NavLink>
          </Box>
        ) : (
          <Sidebar />
        )}
      </div>
      <Box className="hero">
        <Box className="left-item">
          <Typography variant="h2">
            Start a new project with Crema MUI
          </Typography>
          <Typography paragraph sx={{ pt: 2 }}>
            Our creatively crafted products keep you moving faster in this
            digital space.
          </Typography>
          <Box className="logo-images">
            <img src={figma} alt="figma" />
            <img src={mui} alt="figma" />
            <img src={nextjs} alt="figma" />
            <img src={js} alt="figma" />
            <img src={ts} alt="figma" />
          </Box>
          <Box>
            <Button
              sx={{
                backgroundColor: "red",
                mr: 3,
                p: 1,
              }}
              startIcon={<FlashOnIcon />}
              disableRipple
              variant="contained"
            >
              Live Preview
            </Button>
            <Button
              sx={{
                p: 1,
                color: "white",
                borderColor: "white",
              }}
              variant="outlined"
              disableRipple
            >
              Docs
            </Button>
          </Box>
        </Box>
        <Box className="hero-img">
          <img src={img} alt="menuImg" width="700px" />
        </Box>
      </Box>
      {/* <StickyHeadTable /> */}
    </div>
  );
}

export default Nav;
