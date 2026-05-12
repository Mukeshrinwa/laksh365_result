import {
  Box,
  Button,
  Typography,
  IconButton,
  Drawer
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const menuItems = ["Register", "How to Play", "Charts", "About Us"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();
  
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleMenuClick = (item, event) => {
    const button = event.currentTarget;
    button.style.animation = "jelly 0.5s ease";
    
    setTimeout(() => {
      button.style.animation = "";
    }, 500);

    setTimeout(() => {
      if (item === "Register") navigate("/register");
      if (item === "Charts") navigate("/charts");
      if (item === "How to Play") navigate("/how-to-play");
      if (item === "About Us") navigate("/about");
      setOpen(false);
    }, 200);
  };

  return (
    <>
      {/* NAVBAR */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={{ xs: 2, md: 5 }}
        py={2}
        bgcolor="#f5f5f5"
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 999,
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)"
        }}
      >
        {/* Logo */}
        <Typography
          variant="h4"
          onClick={() => navigate("/")}
          sx={{
            fontWeight: 700,
            fontSize: { xs: "22px", md: "32px" },
            cursor: "pointer",
            transition: "all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
            "&:hover": {
              transform: "scale(1.1)",
              textShadow: "0 0 15px rgba(242,140,40,0.5)"
            },
            "&:active": {
              transform: "scale(0.9)"
            }
          }}
        >
          <span style={{ color: "#f28c28" }}>Bharat</span>{" "}
          <span style={{ color: "#1a7f37" }}>Matka</span>
        </Typography>

        {/* DESKTOP MENU */}
        <Box display={{ xs: "none", md: "flex" }} gap={2}>
          {menuItems.map((item) => (
            <Button
              key={item}
              onClick={(e) => handleMenuClick(item, e)}
              sx={{
                textTransform: "none",
                borderRadius: "30px",
                padding: "8px 22px",
                background: "#fff",
                color: "#1e2a78",
                fontWeight: 600,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                transition: "all 0.2s ease",
                animation: activeButton === item ? "jelly 0.5s ease" : "none",
                "&:hover": {
                  background: "#f28c28",
                  color: "#fff",
                  transform: "translateY(-2px) scale(1.05)",
                  boxShadow: "0 8px 20px rgba(242,140,40,0.4)"
                },
                "&:active": {
                  animation: "jelly 0.3s ease",
                  background: "#f28c28",
                  color: "#fff"
                }
              }}
            >
              {item}
            </Button>
          ))}

          <IconButton
            sx={{
              background: "#25D366",
              color: "#fff",
              width: 42,
              height: 42,
              transition: "all 0.2s ease",
              "&:hover": {
                background: "#128C7E",
                transform: "rotate(10deg) scale(1.15)",
                boxShadow: "0 8px 20px rgba(37,211,102,0.4)"
              },
              "&:active": {
                animation: "jelly 0.3s ease",
                background: "#128C7E"
              }
            }}
          >
            <WhatsAppIcon />
          </IconButton>
        </Box>

        {/* MOBILE MENU ICON */}
        <IconButton
          onClick={toggleDrawer}
          sx={{ 
            display: { xs: "flex", md: "none" },
            transition: "all 0.2s ease",
            "&:hover": {
              transform: "rotate(90deg) scale(1.1)",
              background: "#f28c28",
              color: "#fff"
            },
            "&:active": {
              animation: "jelly 0.3s ease"
            }
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* TOP DRAWER MENU */}
      <Drawer
        anchor="top"
        open={open}
        onClose={toggleDrawer}
        transitionDuration={500}
        sx={{
          "& .MuiDrawer-paper": {
            height: "380px",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            padding: 1.5,
            background: "linear-gradient(145deg, #f5f5f5 0%, #ffffff 100%)",
            animation: open ? "slideDown 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)" : "none"
          }
        }}
      >
        {/* CLOSE BUTTON */}
        <Box display="flex" justifyContent="flex-end">
          <IconButton 
            onClick={toggleDrawer}
            sx={{
              transition: "all 0.2s ease",
              "&:hover": {
                transform: "rotate(90deg) scale(1.1)",
                background: "#f28c28",
                color: "#fff"
              },
              "&:active": {
                animation: "jelly 0.3s ease"
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* MENU ITEMS */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
          mt={2}
        >
          {menuItems.map((item, index) => (
            <Button
              key={item}
              onClick={(e) => handleMenuClick(item, e)}
              sx={{
                textTransform: "none",
                borderRadius: "30px",
                padding: "10px 30px",
                background: "#fff",
                color: "#1e2a78",
                fontWeight: 600,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                width: "200px",
                transition: "all 0.2s ease",
                animation: open ? `fadeInUp 0.5s ${index * 0.1}s cubic-bezier(0.68, -0.55, 0.265, 1.55) both` : "none",
                "&:hover": {
                  background: "#f28c28",
                  color: "#fff",
                  transform: "translateY(-2px) scale(1.05)",
                  boxShadow: "0 8px 20px rgba(242,140,40,0.4)"
                },
                "&:active": {
                  animation: "jelly 0.3s ease",
                  background: "#f28c28",
                  color: "#fff"
                }
              }}
            >
              {item}
            </Button>
          ))}

          <IconButton
            sx={{
              background: "#25D366",
              color: "#fff",
              width: 50,
              height: 50,
              mt: 1,
              transition: "all 0.2s ease",
              animation: open ? "fadeInUp 0.5s 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) both" : "none",
              "&:hover": {
                background: "#128C7E",
                transform: "rotate(10deg) scale(1.15)",
                boxShadow: "0 8px 20px rgba(37,211,102,0.4)"
              },
              "&:active": {
                animation: "jelly 0.3s ease",
                background: "#128C7E"
              }
            }}
          >
            <WhatsAppIcon />
          </IconButton>
        </Box>
      </Drawer>

  
    </>
  );
}