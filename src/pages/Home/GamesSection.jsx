"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  IconButton,
  Stack,
} from "@mui/material";

import BarChartIcon from "@mui/icons-material/BarChart";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DownloadIcon from "@mui/icons-material/Download";
import CloseIcon from "@mui/icons-material/Close";

const games = [
  {
    name: "LAXMI MORNING",
    status: "Closed",
    statusColor: "#ff4d4f",
    result: "255-25-339",
    openTime: "09:05 AM",
    closeTime: "10:05 AM",
    openResult: "09:05 AM",
    closeResult: "10:10 AM",
  },
  {
    name: "LAKSH MORNING",
    status: "Closed",
    statusColor: "#ff4d4f",
    result: "348-57-179",
    openTime: "09:30 AM",
    closeTime: "10:30 AM",
    openResult: "09:30 AM",
    closeResult: "10:35 AM",
  },
  {
    name: "SANDHYA MORNING",
    status: "Closed",
    statusColor: "#ff4d4f",
    result: "250-75-113",
    openTime: "10:00 AM",
    closeTime: "11:00 AM",
    openResult: "10:00 AM",
    closeResult: "11:05 AM",
  },
  {
    name: "SRIDEVI",
    status: "Open",
    statusColor: "#22c55e",
    result: "***-**-***",
    openTime: "11:35 AM",
    closeTime: "12:35 PM",
    openResult: "11:35 AM",
    closeResult: "12:40 PM",
  },
];

export default function MarketResults() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const handleOpenModal = (game) => {
    setSelectedGame(game);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box
      sx={{
        background: "#eef6f6",
        py: { xs: 5, md: 8 },
        px: { xs: 2, md: 4 },
      }}
    >
      {/* Heading */}
      <Box textAlign="center" mb={5}>
        <Typography
          sx={{
            fontSize: { xs: "34px", md: "54px" },
            fontWeight: 800,
            color: "#111827",
            lineHeight: 1.1,
          }}
        >
          Today's Market Results
        </Typography>

        <Typography
          sx={{
            mt: 1,
            color: "#475569",
            fontSize: { xs: "14px", md: "18px" },
            maxWidth: "850px",
            mx: "auto",
          }}
        >
          Real-Time Results From All Major Markets. Click On Any
          Market To View Charts Or Download Our App To Play.
        </Typography>
      </Box>

      {/* Cards */}
      <Stack spacing={3}>
        {games.map((game, index) => (
          <Box
            key={index}
            sx={{
              background: "#fff",
              borderRadius: "18px",
              p: { xs: 2, md: 3 },
              border: "1px solid #e7ecef",
              display: "flex",
              flexDirection: {
                xs: "column",
                lg: "row",
              },
              alignItems: {
                xs: "flex-start",
                lg: "center",
              },
              justifyContent: "space-between",
              gap: 3,
              transition: "0.3s ease",

              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
              },
            }}
          >
            {/* Left */}
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "18px", md: "20px" },
                    fontWeight: 600,
                    color: "#0f172a",
                  }}
                >
                  {game.name}
                </Typography>

                <Box
                  sx={{
                    background: `${game.statusColor}20`,
                    color: game.statusColor,
                    px: 1.2,
                    py: 0.4,
                    borderRadius: "30px",
                    fontSize: "12px",
                    fontWeight: 700,
                  }}
                >
                  {game.status}
                </Box>
              </Box>

              <Typography
                sx={{
                  mt: 1,
                  color: "#475569",
                  fontSize: { xs: "13px", md: "15px" },
                }}
              >
                Open: {game.openTime} &nbsp; • &nbsp;
                Close: {game.closeTime}
              </Typography>
            </Box>

            {/* Result */}
            <Typography
              sx={{
                fontSize: { xs: "26px", md: "30px" },
                fontWeight: 700,
                color: "#1d66c2",
                letterSpacing: 1,
              }}
            >
              {game.result}
            </Typography>

            {/* Buttons */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1.5,
                width: { xs: "100%", lg: "auto" },
              }}
            >
              {/* Jodi */}
              <Button
                startIcon={<BarChartIcon />}
                sx={{
                  background: "#b8f1e6",
                  color: "#0f766e",
                  borderRadius: "10px",
                  textTransform: "none",
                  fontWeight: 700,
                  px: 2,
                  minWidth: "fit-content",

                  "&:hover": {
                    background: "#99e8d9",
                  },
                }}
              >
                Jodi Chart
              </Button>

              {/* Pana */}
              <Button
                startIcon={<BarChartIcon />}
                sx={{
                  background: "#f2f4f7",
                  color: "#111827",
                  borderRadius: "10px",
                  textTransform: "none",
                  fontWeight: 700,
                  px: 2,
                  minWidth: "fit-content",

                  "&:hover": {
                    background: "#e7eaee",
                  },
                }}
              >
                Pana Chart
              </Button>

              {/* Play */}
              <Button
                startIcon={<DownloadIcon />}
                sx={{
                  background: "#07a6a6",
                  color: "#fff",
                  borderRadius: "10px",
                  textTransform: "none",
                  fontWeight: 700,
                  px: 2.5,

                  "&:hover": {
                    background: "#089191",
                  },
                }}
              >
                Play
              </Button>

              {/* Info */}
              <Button
                startIcon={<InfoOutlinedIcon />}
                onClick={() => handleOpenModal(game)}
                sx={{
                  background: "#1d66c2",
                  color: "#fff",
                  borderRadius: "10px",
                  textTransform: "none",
                  fontWeight: 700,
                  px: 2.5,

                  "&:hover": {
                    background: "#1555a8",
                  },
                }}
              >
                Info
              </Button>
            </Box>
          </Box>
        ))}
      </Stack>

      {/* Modal */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        PaperProps={{
          sx: {
            width: "100%",
            maxWidth: "340px",
            borderRadius: "14px",
            overflow: "hidden",
          },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            background: "#1d66c2",
            color: "#fff",
            px: 2.5,
            py: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 800,
            }}
          >
            {selectedGame?.name}
          </Typography>

          <IconButton
            onClick={handleCloseModal}
            sx={{ color: "#fff" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Body */}
        <Box px={2.5} py={2}>
          {[
            {
              label: "Open Bid Time",
              value: selectedGame?.openTime,
            },
            {
              label: "Close Bid Time",
              value: selectedGame?.closeTime,
            },
            {
              label: "Open Result Time",
              value: selectedGame?.openResult,
            },
            {
              label: "Close Result Time",
              value: selectedGame?.closeResult,
            },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                py: 2,
                borderBottom:
                  index !== 3
                    ? "1px solid #e5e7eb"
                    : "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  color: "#334155",
                  fontSize: "14px",
                }}
              >
                {item.label}
              </Typography>

              <Typography
                sx={{
                  color: "#111827",
                  fontWeight: 700,
                  fontSize: "15px",
                }}
              >
                {item.value}
              </Typography>
            </Box>
          ))}

          {/* OK Button */}
          <Button
            fullWidth
            onClick={handleCloseModal}
            sx={{
              mt: 3,
              background: "#1d66c2",
              color: "#fff",
              borderRadius: "10px",
              py: 1.3,
              fontWeight: 700,
              textTransform: "none",

              "&:hover": {
                background: "#1555a8",
              },
            }}
          >
            OK
          </Button>
        </Box>
      </Dialog>
    </Box>
  );
}