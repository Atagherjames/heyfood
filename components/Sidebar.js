"use client";

import {
  Drawer,
  Box,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LockIcon from "@mui/icons-material/Lock";
import Image from "next/image";
import Link from "next/link";

const Sidebar = ({ open, onClose }) => {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: isMobile ? "70vw" : 320,
          maxWidth: 500,
          padding: "0px",
          boxSizing: "border-box",
          "& .menu-item-container": {
            px: 3,
            py: 2,
            width: "100%",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.05)",
            },
          },
        },
      }}
    >
      {/* Close button at top right */}
      <Box display="flex" justifyContent="flex-end" p={3} pb={2}>
        <IconButton
          onClick={onClose}
          sx={{
            p: 1,
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.05)",
            },
          }}
        >
          <CloseIcon sx={{ fontSize: 20 }} />
        </IconButton>
      </Box>

      {/* Menu Items */}
      <Box component="nav">
        <List disablePadding>
          <ListItem disablePadding>
            <Box
              className="menu-item-container"
              sx={{
                mb: 5,
              }}
            >
              <Box display="flex" alignItems="center">
                <LockIcon
                  sx={{
                    fontSize: 20,
                    mr: 1.5,
                  }}
                />
                <Typography
                  component={Link}
                  href="/"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                >
                  Sign in
                </Typography>
              </Box>
            </Box>
          </ListItem>

          {/* Other menu items */}
          <div>
            {[
              "Add your restaurant",
              "Become a delivery rider",
              "Go to Homepage",
            ].map((text) => (
              <ListItem key={text} disablePadding>
                <Box className="menu-item-container">
                  <Typography
                    component={Link}
                    href="/"
                    sx={{
                      display: "block",
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              </ListItem>
            ))}
          </div>
        </List>
      </Box>

      {/* App Download Section with Logo */}
      <Box p={3} pt={23}>
        <Box display="flex" alignItems="center" mb={2}>
          <Image
            src="/logo-circle-green.svg"
            alt="HeyFood"
            width={24}
            height={24}
            style={{ marginRight: 12 }}
          />
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontSize: "14px",
              fontWeight: 400,
            }}
          >
            Experience the
            <br /> Heyfood mobile app
          </Typography>
        </Box>

        <Box display="flex" gap={2}>
          <Button
            variant="contained"
            startIcon={
              <Image
                src="/apple-logo.svg"
                alt="App Store"
                width={16}
                height={16}
              />
            }
            className="cart-btn sidebar-btn"
          >
            App Store
          </Button>
          <Button
            variant="contained"
            startIcon={
              <Image
                src="/google-play-logo.svg"
                alt="Play Store"
                width={16}
                height={16}
              />
            }
            className="cart-btn sidebar-btn"
          >
            Play Store
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
