import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "Charts", href: "#" },
    { label: "Rates", href: "#" },
    { label: "Markets", href: "#" },
    { label: "About Us", href: "#" },
  ];

  const supportLinks = [
    { label: "Help Center", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "WhatsApp Support", href: "#" },
  ];

  const legalLinks = [
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #1a1f3a 0%, #2d3561 100%)",
        color: "#fff",
        pt: { xs: 6, md: 8 },
        px: { xs: 2,sm:2, md: 8 },
        pb: 3,
        position: "relative",
      }}
    >
      <Container maxWidth="100%" sx={{width: "100%"}}>
        {/* Main Footer Content */}
        <Grid container spacing={4} sx={{ mb: 4, maxWidth: "100%" }}>
          {/* Brand Section */}
          <Grid item xs={12} sm={12} md={3}>
            <Box sx={{ mb: 3 }}>
              {/* Logo */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    background: "linear-gradient(135deg, #00d4ff 0%, #0099ff 100%)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "20px",
                  }}
                >
                  L
                </Box>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: 700,
                  }}
                >
                  Laksh<span style={{ color: "#00d4ff" }}>365</span>
                </Typography>
              </Box>

              {/* Description */}
              <Typography
                sx={{
                  fontSize: "14px",
                  lineHeight: 1.8,
                  opacity: 0.8,
                  maxWidth: "350px",
                }}
              >
                India's Most Trusted Platform For Online Matka. Play Responsibly With Secure
                Transactions And 24/7 Support.
              </Typography>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} sm={4} md={3}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                mb: 2,
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {quickLinks.map((link, index) => (
                <Typography
                  key={index}
                  component="a"
                  href={link.href}
                  sx={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    transition: "all 0.3s",
                    "&:hover": {
                      color: "#00d4ff",
                      paddingLeft: "5px",
                    },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Support */}
          <Grid item xs={6} sm={4} md={3}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                mb: 2,
              }}
            >
              Support
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {supportLinks.map((link, index) => (
                <Typography
                  key={index}
                  component="a"
                  href={link.href}
                  sx={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    transition: "all 0.3s",
                    "&:hover": {
                      color: "#00d4ff",
                      paddingLeft: "5px",
                    },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Legal */}
          <Grid item xs={12} sm={4} md={3}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                mb: 2,
              }}
            >
              Legal
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {legalLinks.map((link, index) => (
                <Typography
                  key={index}
                  component="a"
                  href={link.href}
                  sx={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    transition: "all 0.3s",
                    "&:hover": {
                      color: "#00d4ff",
                      paddingLeft: "5px",
                    },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box
          sx={{
            height: "1px",
            background: "rgba(255,255,255,0.1)",
            my: 3,
          }}
        />

        {/* Bottom Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          {/* Copyright */}
          <Typography
            sx={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.6)",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            © 2025 LAKSH365 | All Rights Reserved
          </Typography>

          {/* Bottom Right Links */}
          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Typography
              component="a"
              href="#"
              sx={{
                fontSize: "14px",
                color: "#ffd700",
                textDecoration: "none",
                fontWeight: 500,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              component="a"
              href="#"
              sx={{
                fontSize: "14px",
                color: "#ffd700",
                textDecoration: "none",
                fontWeight: 500,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Connect With Us
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Scroll to Top Button */}
      <IconButton
        onClick={scrollToTop}
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          width: 45,
          height: 45,
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
          color: "#fff",
          "&:hover": {
            background: "#00d4ff",
          },
        }}
      >
        <FaArrowUp />
      </IconButton>
    </Box>
  );
}