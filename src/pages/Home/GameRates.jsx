import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function GameRates() {

  const rates = [
    { name: "Single Digit", rate: "1 RS KA 9.5 Rs" },
    { name: "Jodi Digit", rate: "1 RS KA 95 Rs" },
    { name: "Red Bracket", rate: "1 RS KA 95 Rs" },
    { name: "Single Pana", rate: "1 RS KA 160 Rs" },
    { name: "Double Pana", rate: "1 RS KA 320 Rs" },
    { name: "Triple Pana", rate: "1 RS KA 1000 Rs" },
    { name: "Half Sangam", rate: "1 RS KA 1000 Rs" },
    { name: "Full Sangam", rate: "1 RS KA 10000 Rs" },
  ];

  return (
    <Box bgcolor="#f5f5f5" >

      {/* Heading */}
      <Box textAlign="center" mb={5}>
        <Typography fontSize={32} fontWeight={700} color="#2f3e8f">
          Game Rates
        </Typography>

        <Typography color="black">
          We have Best Game Rates for you
        </Typography>
      </Box>

      {/* Grid */}
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
        gap={3}
        px={{ xs: 2, md: 10 }}
      >
        {rates.map((item, index) => (

          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              padding: "18px 20px",
              borderRadius: "10px",
              borderBottom: "3px solid #2f3e8f",
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
              transition: "0.3s",
              cursor: "pointer",

              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
              }
            }}
          >

            {/* LEFT */}
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              sx={{
                transition: "0.3s",
                ".arrow": {
                  transition: "0.3s"
                },

                "&:hover .arrow": {
                  transform: "translateX(6px)"
                }
              }}
            >
              <ArrowForwardIcon className="arrow" sx={{ color: "#2f3e8f" }} />

              <Typography fontWeight={600}>
                {item.name}
              </Typography>
            </Box>

            {/* RIGHT */}
            <Typography
              fontWeight={600}
              sx={{
                color: "#ff7a00",
                transition: "0.3s"
              }}
            >
              {item.rate}
            </Typography>

          </Box>

        ))}
      </Box>

    </Box>
  );
}