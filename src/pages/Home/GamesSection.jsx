import { Box, Typography, Button, CircularProgress, Dialog } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState } from "react";

const games = [
  {
    name: "Bharat Jackpot",
    result: "**",
    charts: ["Jodi Chart"]
  },
  {
    name: "Bharat Starline",
    result: "***-***",
    charts: ["Jodi Chart", "Panna Chart"]
  },
  {
    name: "SITA MORNING",
    result: "899-6*-***",
    charts: ["Jodi Chart", "Panna Chart"]
  },
  {
    name: "KARNATAKA DAY",
    result: "200-2*-***",
    charts: ["Jodi Chart", "Panna Chart"]
  },
  {
    name: "STAR TARA MORNING",
    result: "124-7*-***",
    charts: ["Jodi Chart", "Panna Chart"]
  },
  {
    name: "MILAN MORNING",
    result: "***-**-***",
    charts: ["Jodi Chart", "Panna Chart"]
  }
];

export default function GamesSection() {
  const [downloading, setDownloading] = useState(null);
  const [progress, setProgress] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const handlePlayClick = (gameName) => {
    setSelectedGame(gameName);
    setShowDialog(true);
    setDownloading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setDownloading(false);

          setTimeout(() => {
            setShowDialog(false);
            setProgress(0);
            window.open("/app.apk", "_blank");
          }, 1000);

          return 100;
        }
        return prev + 2; 
      });
    }, 100);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
    setDownloading(null);
    setProgress(0);
  };

  return (
    <Box py={6} bgcolor="#f5f5f5">
      {/* Heading */}
      <Box textAlign="center" mb={5}>
        <Typography fontSize={32} fontWeight={700} color="#2f3e8f">
          Available Games
        </Typography>

        <Typography>
          We have multiple types of games for you
        </Typography>
      </Box>

      {/* Games Grid */}
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
        gap={3}
        px={{ xs: 2, md: 10 }}
      >
        {games.map((game, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              borderBottom: "3px solid #2f3e8f",
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
              transition: "0.3s",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
              }
            }}
          >
            {/* LEFT CONTENT */}
            <Box>
              <Typography fontWeight={600} fontSize={18}>
                {game.name}
              </Typography>

              <Typography fontSize={16} mt={0.5}>
                {game.result}
              </Typography>

              <Typography
                sx={{
                  color: "#ff7a00",
                  fontSize: 14,
                  mt: 1
                }}
              >
                {game.charts.join(" | ")}
              </Typography>
            </Box>

            {/* PLAY BUTTON */}
            <Button
              onClick={() => handlePlayClick(game.name)}
              variant="contained"
              endIcon={<PlayArrowIcon />}
              disabled={downloading === game.name}
              sx={{
                background: "#2f3e8f",
                textTransform: "none",
                borderRadius: "10px",
                px: 3,
                position: "relative",
                "&:hover": {
                  background: "#243174"
                },
                "&:disabled": {
                  background: "#95a5a6",
                  color: "#fff"
                }
              }}
            >
              {downloading === game.name ? "Downloading..." : "Play Now"}
            </Button>
          </Box>
        ))}
      </Box>

      {/* Download Progress Dialog */}
      <Dialog
        open={showDialog}
        onClose={handleCloseDialog}
        PaperProps={{
          sx: {
            borderRadius: "20px",
            padding: "30px",
            textAlign: "center",
            minWidth: "300px",
            background: "linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)"
          }
        }}
      >
        <Box sx={{ position: "relative", display: "inline-flex", mb: 3 }}>
          {/* Background Circle */}
          <CircularProgress
            variant="determinate"
            value={100}
            size={120}
            thickness={2}
            sx={{
              marginLeft: '55px',

              color: "#e0e0e0",
              position: "absolute",
              left: 0
            }}
          />

          {/* Progress Circle */}
          <CircularProgress
            variant="determinate"
            value={progress}
            size={120}
            thickness={2}
            sx={{
              marginLeft: '55px',
              color: "#2f3e8f",
              circle: {
                strokeLinecap: "round",
                transition: "stroke-dashoffset 0.1s ease"
              }
            }}
          />

          {/* Percentage Text */}
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Typography variant="h4" component="div" fontWeight={700} color="#2f3e8f">
              {Math.round(progress)}%
            </Typography>
          </Box>
        </Box>

        <Typography variant="h6" fontWeight={600} mb={1}>
          {downloading ? "Downloading..." : "Download Complete!"}
        </Typography>

        <Typography color="text.secondary" mb={3}>
          {selectedGame} {progress < 100 ? "is preparing..." : "ready to play"}
        </Typography>

        {progress === 100 && (
          <Typography sx={{ color: "#27ae60", fontWeight: 500 }}>
            ✓ Redirecting you to game...
          </Typography>
        )}
      </Dialog>

      {/* Custom styles for better look */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </Box>
  );
}