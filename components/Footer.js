import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Button,
} from "@mui/material";
import Image from "next/image";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#fff",
        width: "100%",
        py: 8,
      }}
    >
      <Container width="lg">
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          {/* Left Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Image
                src="/logo-circle-green.svg"
                alt="HeyFood Logo"
                height={40}
                width={40}
              />
              <Typography
                variant="h4"
                sx={{ ml: 1, fontWeight: "bold", color: "#333" }}
              >
                Heyfood
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Your food delivered within minutes.
            </Typography>
            <Box sx={{ display: "flex", gap: 12, mb: 16 }}>
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
          </Grid>

          {/* Middle Sections */}
          <Grid item xs={6} md={2}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              color="text.secondary"
              gutterBottom
            >
              Get To Know Us
            </Typography>
            <Box component="ul" sx={{ listStyleType: "none", p: 0, m: 0 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  href="#"
                  color="#4CAF50"
                  underline="none"
                  sx={{ "&:hover": { textDecoration: "none" } }}
                >
                  About Us
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  href="#"
                  color="#4CAF50"
                  underline="none"
                  sx={{ "&:hover": { textDecoration: "none" } }}
                >
                  LinkedIn
                </Link>
              </Box>
              <Box component="li">
                <Link
                  href="#"
                  color="#4CAF50"
                  underline="none"
                  sx={{ "&:hover": { textDecoration: "none" } }}
                >
                  Blog
                </Link>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              color="text.secondary"
              gutterBottom
            >
              Let Us Help You
            </Typography>
            <Box component="ul" sx={{ listStyleType: "none", p: 0, m: 0 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  href="#"
                  color="#4CAF50"
                  underline="none"
                  sx={{ "&:hover": { textDecoration: "none" } }}
                >
                  Support
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  href="#"
                  color="#4CAF50"
                  underline="none"
                  sx={{ "&:hover": { textDecoration: "none" } }}
                >
                  FAQs
                </Link>
              </Box>
              <Box component="li">
                <Link
                  href="#"
                  color="#4CAF50"
                  underline="none"
                  sx={{ "&:hover": { textDecoration: "none" } }}
                >
                  Restaurants Near Me
                </Link>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              color="text.secondary"
              gutterBottom
            >
              Doing Business
            </Typography>
            <Box component="ul" sx={{ listStyleType: "none", p: 0, m: 0 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  href="#"
                  color="#4CAF50"
                  underline="none"
                  sx={{ "&:hover": { textDecoration: "none" } }}
                >
                  Become a driver
                </Link>
              </Box>
              <Box component="li">
                <Link
                  href="#"
                  color="#4CAF50"
                  underline="none"
                  sx={{ "&:hover": { textDecoration: "none" } }}
                >
                  Become a partner restaurant
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            width: "100% !important",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <IconButton color="inherit" sx={{ p: 0, mr: 1 }}>
              <Image
                src="/facebook.svg"
                alt="Facebook"
                height={30}
                width={30}
                style={{ color: "#333" }}
              />
            </IconButton>
            <IconButton color="inherit" sx={{ p: 0, mr: 1 }}>
              <Image
                src="/twitter.svg"
                alt="Twitter"
                height={30}
                width={30}
                style={{ color: "#333" }}
              />
            </IconButton>
            <IconButton color="inherit" sx={{ p: 0, mr: 1 }}>
              <Image
                src="/instagram.svg"
                alt="Instagram"
                height={30}
                width={30}
                style={{ color: "#333" }}
              />
            </IconButton>
            <IconButton color="inherit" sx={{ p: 0 }}>
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                height={30}
                width={30}
                style={{ color: "#333" }}
              />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Image
              src="/download-qr.svg"
              alt="QR Code"
              height={80}
              width={80}
            />
            <span style={{ display: "flex", gap: 12 }}>
              <Link
                href="#"
                color="#777"
                underline="none"
                sx={{
                  fontSize: "0.8em",
                  "&:hover": { color: "#4CAF50" },
                  mt: 0.5,
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                color="#777"
                underline="none"
                sx={{
                  fontSize: "0.8em",
                  "&:hover": { color: "#4CAF50" },
                  mt: 0.5,
                }}
              >
                Terms Of Service
              </Link>
            </span>
          </Box>
        </Box>

        {/* Bottom Copyright */}
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 4 }}
        >
          © 2025 Hey Technologies Limited. All rights reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
