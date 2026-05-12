import { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import GetAppRoundedIcon from "@mui/icons-material/GetAppRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import ShowChartRoundedIcon from "@mui/icons-material/ShowChartRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import logo from "/logo.png";
import "./Navbar.css";

const navItems = [
  { label: "Charts", path: "/charts", icon: <BarChartRoundedIcon /> },
  { label: "Rates", path: "/", icon: <ShowChartRoundedIcon /> },
  { label: "Markets", path: "/", icon: <StorefrontRoundedIcon /> },
  { label: "About Us", path: "/about", icon: <InfoOutlinedIcon /> },
  { label: "How To Play", path: "/how-to-play", icon: <SportsEsportsOutlinedIcon /> },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = useCallback(() => {
    setDrawerOpen((prev) => !prev);
  }, []);

  const handleNav = useCallback(
    (path) => {
      navigate(path);
      setDrawerOpen(false);
    },
    [navigate]
  );

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  // Close drawer on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* ===== DESKTOP NAVBAR ===== */}
      <nav className="navbar" id="main-navbar">
        {/* Logo */}
        <div
          className="navbar__logo"
          onClick={() => handleNav("/")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleNav("/")}
          aria-label="Go to homepage"
        >
          <img
            className="navbar__logo-icon"
            src={logo}
            alt="Laksh365 logo"
            width={'150px'}
            height={'40px'}
          />
          {/* <span className="navbar__logo-text">
            Laksh<span>365</span>
          </span> */}
        </div>

        {/* Desktop Nav Links */}
        <ul className="navbar__links">
          {navItems.map((item) => (
            <li key={item.label} style={{ listStyle: "none" }}>
              <button
                className={`navbar__link${
                  location.pathname === item.path ? " navbar__link--active" : ""
                }`}
                onClick={() => handleNav(item.path)}
                aria-label={item.label}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Download App CTA */}
        <button className="navbar__cta" aria-label="Download App">
          <GetAppRoundedIcon className="navbar__cta-icon" />
          Download App
        </button>

        {/* Hamburger (mobile) */}
        <button
          className="navbar__hamburger"
          onClick={toggleDrawer}
          aria-label="Open navigation menu"
          aria-expanded={drawerOpen}
        >
          <MenuIcon />
        </button>
      </nav>

      {/* ===== MOBILE OVERLAY ===== */}
      <div
        className={`navbar__overlay${drawerOpen ? " navbar__overlay--open" : ""}`}
        onClick={toggleDrawer}
        aria-hidden="true"
      />

      {/* ===== MOBILE DRAWER ===== */}
      <aside
        className={`navbar__drawer${drawerOpen ? " navbar__drawer--open" : ""}`}
        aria-label="Mobile navigation"
      >
        {/* Drawer Header */}
        <div className="navbar__drawer-header">
          <div className="navbar__drawer-logo">
            <img
              className="navbar__drawer-logo-icon"
              src={logo}
              alt="Laksh365 logo"
              width={'140px'}
              height={'40px'}
            />
            {/* <span className="navbar__drawer-logo-text">
              Laksh<span>365</span>
            </span> */}
          </div>
          <button
            className="navbar__drawer-close"
            onClick={toggleDrawer}
            aria-label="Close navigation menu"
          >
            <CloseIcon fontSize="small" />
          </button>
        </div>

        {/* Drawer Nav Items */}
        <ul className="navbar__drawer-nav">
          {navItems.map((item) => (
            <li key={item.label} style={{ listStyle: "none" }}>
              <button
                className="navbar__drawer-link"
                onClick={() => handleNav(item.path)}
              >
                {item.icon}
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Drawer CTA */}
        <div className="navbar__drawer-cta-wrapper">
          <button className="navbar__drawer-cta">
            <GetAppRoundedIcon />
            Download App
          </button>
        </div>
      </aside>
    </>
  );
}