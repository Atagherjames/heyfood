"use client";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Box,
  Button,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import RoomIcon from "@mui/icons-material/Room";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import Sidebar from "./Sidebar";

export default function Header() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <AppBar position="fixed" className="custom-header">
        {isMobile ? (
          <>
            {/* Top Bar */}
            <Toolbar className="mobile-toolbar">
              <IconButton className="icon-btn" onClick={toggleSidebar}>
                <MenuIcon />
              </IconButton>

              <Box className="mobile-location">
                <RoomIcon fontSize="small" />
                <Typography variant="body2" className="location-text">
                  James Ademosu
                </Typography>
              </Box>

              <Button variant="contained" className="cart-btn">
                <ShoppingCartIcon className="cart-icon" />
              </Button>
            </Toolbar>

            {/* Search + Sort Row */}
            <Box className="mobile-search-sort-wrapper">
              <Box className="mobile-search-box">
                <SearchIcon className="search-icon" />
                <InputBase
                  placeholder="Search restaurants or food"
                  className="search-input"
                />
              </Box>
              <IconButton className="sort-icon-btn">
                <SwapVertIcon className="sort-icon" />
              </IconButton>
            </Box>
          </>
        ) : (
          <Toolbar className="custom-toolbar">
            {/* Desktop Layout */}
            <Box className="left-section">
              <IconButton className="icon-btn" onClick={toggleSidebar}>
                <MenuIcon />
              </IconButton>

              <img
                src="logo-circle-green.svg"
                alt="heyfood"
                className="logo-icon"
              />

              <Box className="hover-box">
                <Box className="location">
                  <RoomIcon fontSize="small" />
                  <Typography variant="body2" className="location-text">
                    James Ademosu
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box className="search-box">
              <SearchIcon className="search-icon" />
              <InputBase
                placeholder="Search restaurants or food"
                className="search-input"
              />
            </Box>

            <Box className="right-section">
              <Box className="hover-box">
                <Typography variant="body2" className="signin-text">
                  SIGN IN
                </Typography>
              </Box>
              <Button variant="contained" className="cart-btn">
                <ShoppingCartIcon className="cart-icon" />
                <span className="cart-text">CART</span>
                <span className="cart-dot">•</span>
                <span className="cart-count">0</span>
              </Button>
            </Box>
          </Toolbar>
        )}
      </AppBar>

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
    </>
  );
}
