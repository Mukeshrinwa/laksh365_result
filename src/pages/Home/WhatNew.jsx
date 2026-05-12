import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const stats = [
  {
    value: "50K+",
    label: "Active Users",
    color: "#2563eb",
  },
  {
    value: "₹5Cr+",
    label: "Paid Out",
    color: "#ef4444",
  },
  {
    value: "4.8★",
    label: "Rating",
    color: "#16a34a",
  },
];

const features = [
  {
    icon: <ShieldOutlinedIcon />,
    title: "100% Secure Platform",
    desc: "Trusted by thousands of players across India with guaranteed safety.",
    bg: "#dcfce7",
    iconColor: "#16a34a",
  },
  {
    icon: <WorkspacePremiumOutlinedIcon />,
    title: "Licensed & Regulated",
    desc: "Trusted by thousands of players across India with guaranteed safety.",
    bg: "#fce7f3",
    iconColor: "#db2777",
  },
  {
    icon: <AccessTimeOutlinedIcon />,
    title: "24/7 Support",
    desc: "Trusted by thousands of players across India with guaranteed safety.",
    bg: "#f3e8ff",
    iconColor: "#9333ea",
  },
  {
    icon: <AccountBalanceWalletOutlinedIcon />,
    title: "Instant Payouts",
    desc: "Trusted by thousands of players across India with guaranteed safety.",
    bg: "#fef9c3",
    iconColor: "#ca8a04",
  },
];

const FeatureCard = ({ item }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: "18px",
        height: "100%",
        border: "1px solid #ececec",
        backgroundColor: "#fff",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        },
      }}
    >
      <Box
        sx={{
          width: 52,
          height: 52,
          borderRadius: "14px",
          backgroundColor: item.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: item.iconColor,
          mb: 2,
        }}
      >
        {item.icon}
      </Box>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          fontSize: "1.1rem",
          mb: 1,
          color: "#111827",
        }}
      >
        {item.title}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: "#4b5563",
          lineHeight: 1.7,
        }}
      >
        {item.desc}
      </Typography>
    </Paper>
  );
};

export default function WhatNew() {
  return (
    <Box
      sx={{
        backgroundColor: "#f4fbfb",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left Side */}
          <Grid item size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                lineHeight: 1.2,
                color: "#0f172a",
                fontSize: {
                  xs: "2rem",
                  sm: "2.5rem",
                  md: "3rem",
                },
              }}
            >
              India's Most{" "}
              <Box
                component="span"
                sx={{
                  color: "#2563eb",
                }}
              >
                Trusted
              </Box>
              <br />
              Matka Platform
            </Typography>

            <Typography
              sx={{
                mt: 4,
                color: "#4b5563",
                lineHeight: 1.9,
                fontSize: "1rem",
              }}
            >
              <strong>Laksh365</strong> has been serving players across India
              since 2019, delivering a secure, fair and transparent gaming
              platform.
            </Typography>

            <Typography
              sx={{
                mt: 3,
                color: "#4b5563",
                lineHeight: 1.9,
                fontSize: "1rem",
              }}
            >
              Best market rates, instant payouts and 24/7 customer support —
              your trust and security always come first.
            </Typography>

            {/* Stats */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: 5 }}
            >
              {stats.map((stat, index) => (
                <Paper
                  key={index}
                  elevation={0}
                  sx={{
                    flex: 1,
                    py: 2.5,
                    px: 3,
                    borderRadius: "16px",
                    textAlign: "center",
                    backgroundColor: "#fff",
                    border: "1px solid #ececec",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: "1.8rem",
                      color: stat.color,
                    }}
                  >
                    {stat.value}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 0.5,
                      fontSize: "0.9rem",
                      color: "#6b7280",
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Paper>
              ))}
            </Stack>
          </Grid>

          {/* Right Side */}
          <Grid item size={{ xs: 12, md: 6 }}>
            <Grid container spacing={3}>
              {features.map((item, index) => (
                <Grid item size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                  <FeatureCard item={item} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}