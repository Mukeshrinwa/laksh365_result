import React, { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Grid,
  Paper,
} from "@mui/material";

import CasinoIcon from "@mui/icons-material/Casino";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

const tabData = [
  {
    label: "Matka",
    icon: <CasinoIcon sx={{ fontSize: 18 }} />,
  },
  {
    label: "Starline",
    icon: <StarBorderIcon sx={{ fontSize: 18 }} />,
  },
  {
    label: "Jackpot",
    icon: <EmojiEventsOutlinedIcon sx={{ fontSize: 18 }} />,
  },
];

const rates ={
  "Matka" : [
  {
    name: "Single Digit",
    rate: "1 Ka 9.5",
    color: "#3b82f6",
    bg: "#dbeafe",
  },
  {
    name: "Jodi Digit",
    rate: "1 Ka 95",
    color: "#22c55e",
    bg: "#dcfce7",
  },
  {
    name: "Single Pana",
    rate: "1 Ka 150",
    color: "#a855f7",
    bg: "#f3e8ff",
  },
  {
    name: "Double Pana",
    rate: "1 Ka 300",
    color: "#eab308",
    bg: "#fef9c3",
  },
  {
    name: "Triple Pana",
    rate: "1 Ka 600",
    color: "#14b8a6",
    bg: "#ccfbf1",
  },
  {
    name: "Red Brackets",
    rate: "1 Ka 95",
    color: "#ef4444",
    bg: "#fee2e2",
  },
  {
    name: "Half Sangam Digits",
    rate: "1 Ka 1000",
    color: "#06b6d4",
    bg: "#cffafe",
  },
  {
    name: "Full Sangam Digits",
    rate: "1 Ka 10000",
    color: "#ec4899",
    bg: "#fce7f3",
  },
],
 "Starline" : [
  {
    name: "Single Digit",
    rate: "1 Ka 9.5",
    color: "#3b82f6",
    bg: "#dbeafe",
  },
  {
    name: "Jodi Digit",
    rate: "1 Ka 95",
    color: "#22c55e",
    bg: "#dcfce7",
  },
  {
    name: "Single Pana",
    rate: "1 Ka 150",
    color: "#a855f7",
    bg: "#f3e8ff",
  },
  {
    name: "Double Pana",
    rate: "1 Ka 300",
    color: "#eab308",
    bg: "#fef9c3",
  }
],
 "Jackpot" : [
 
  {
    name: "Jodi Digit",
    rate: "1 Ka 95",
    color: "#22c55e",
    bg: "#dcfce7",
  }
]

};

export default function GameRates() {
  const [value, setValue] = useState(0);

  return (
    <Box
      id="rates-section"
      sx={{
        background: "#edf3f3",
        py: { xs: 5, md: 8 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      {/* Heading */}
      <Box textAlign="center" mb={5}>
        <Typography
          sx={{
            fontSize: { xs: "32px", md: "48px" },
            fontWeight: 800,
            color: "#111827",
            lineHeight: 1.2,
          }}
        >
          Best Rates In The{" "}
          <Box component="span" sx={{ color: "#1d4ed8" }}>
            Market
          </Box>
        </Typography>

        <Typography
          sx={{
            mt: 1,
            color: "#64748b",
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          We offer the most competitive rates with guaranteed payouts.
        </Typography>
      </Box>

      {/* Tabs */}
      <Box
        sx={{
          background: "#1664c0",
          borderRadius: "18px 18px 0 0",
          p: 2,
          mb: 4,
          overflowX: "auto",
        }}
      >
        <Tabs
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          centered
          variant="scrollable"
          scrollButtons="auto"
          TabIndicatorProps={{
            style: {
              display: "none",
            },
          }}
          sx={{
            minHeight: "unset",

            "& .MuiTabs-flexContainer": {
              gap: 7,
              justifyContent: "center",
            },
          }}
        >
          {tabData.map((tab, index) => (
            <Tab
              key={index}
              icon={tab.icon}
              iconPosition="start"
              label={tab.label}
              sx={{
                minHeight: "46px",
                textTransform: "none",
                fontWeight: 700,
                borderRadius: "12px",
                color: "#fff",
                minWidth: "unset",
                px: 2.5,

                "&.Mui-selected": {
                  background: "#fff",
                  color: "#1664c0",
                },
              }}
            />
          ))}
        </Tabs>
      </Box>

      {/* Content */}
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "26px", md: "34px" },
            fontWeight: 800,
            color: "#111827",
          }}
        >
          Matka Rates
        </Typography>

        <Typography
          sx={{
            color: "#6b7280",
            mb: 4,
            fontSize: "14px",
          }}
        >
          Standard Market Betting Rates
        </Typography>

        {/* Cards */}
       <Grid container spacing={3}>
  {rates[tabData[value].label]?.map((item, index) => (
    <Grid
      item
      size={{ xs: 12, md: 6, lg: 6 }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          p: 2.2,
          borderRadius: "18px",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid #eef2f7",
          transition: "0.3s ease",

          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
          },
        }}
      >
        {/* Left */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: "12px",
              background: item.bg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Box
              sx={{
                width: 16,
                height: 16,
                borderRadius: "4px",
                border: `2px solid ${item.color}`,
              }}
            />
          </Box>

          <Box>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: "14px", md: "17px" },
                color: "#111827",
              }}
            >
              {item.name}
            </Typography>

            <Typography
              sx={{
                color: "#94a3b8",
                fontSize: "13px",
              }}
            >
              Rate
            </Typography>
          </Box>
        </Box>

        {/* Right */}
        <Box
          sx={{
            background: "#000",
            color: "#fff",
            px: { xs: 1.5, md: 2 },
            py: 1,
            borderRadius: "10px",
            fontWeight: 700,
            fontSize: { xs: "12px", md: "14px" },
            whiteSpace: "nowrap",
            ml: 2,
            flexShrink: 0,
          }}
        >
          {item.rate}
        </Box>
      </Paper>
    </Grid>
  ))}
</Grid>
      </Box>
    </Box>
  );
}