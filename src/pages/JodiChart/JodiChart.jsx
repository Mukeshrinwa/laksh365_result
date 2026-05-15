import { Box, Typography, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

export default function JodiChart() {
  const { name } = useParams();

  const chartName = name
    ?.replaceAll("-", " ")
    .toUpperCase();
  const navigate = useNavigate();

  const tableData = [
    ["**", "**", "**", "**", "**", "**", "61"],
    ["04", "47", "76", "91", "40", "21", "06"],
    ["17", "20", "50", "81", "41", "49", "04"],
    ["91", "70", "87", "94", "82", "92", "87"],
    ["39", "13", "91", "91", "28", "39", "69"]
  ];

  const highlight = ["50", "49", "94", "61"];

  const goBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  };

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Box
      py={{ xs: 3, sm: 4, md: 6 }}
      bgcolor="#F6F6F6"
      minHeight="auto"
    >
      {/* HEADING */}
      <Typography
        variant="h3"
        mb={1}
        textAlign="center"
        fontWeight={700}
        fontSize="32px"
        color="#2e3c91"
      >
        {chartName}  Jodi Chart
      </Typography>

      <Typography
        textAlign="center"
        color="#555"
        mb={{ xs: 2, sm: 2.5, md: 3 }}
        sx={{ fontSize: { xs: '0.7rem', sm: '0.85rem', md: '1rem' } }}
      >
        {chartName} Jodi Chart Satta Matka Record Old History Historical Data Bracket Results Chart Online Live Book Digits Numbers
      </Typography>

      {/* GO TO BOTTOM BUTTON */}
      <Box textAlign="center" mb={4}>
        <Button
          onClick={goBottom}
          sx={{
            background: "#1d8ae7",
            color: "#fff",
            px: 4,
            py: 1,
            borderRadius: "8px",
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              background: "#e69300"
            }
          }}
        >
          Go To Bottom
        </Button>
      </Box>

      {/* TABLE - Horizontal Scroll on Mobile */}
      <Box
        sx={{
          maxWidth: { xs: '100%', sm: '90%', md: '900px' },
          mx: 'auto',
          overflowX: 'auto',
          px: { xs: 1, sm: 2, md: 0 }
        }}
      >
        <Box
          component="table"
          sx={{
            width: { xs: '700px', sm: '100%' },  // Fixed width for mobile scroll
            borderCollapse: "collapse",
            textAlign: "center",
            background: "#fff",
            mx: 'auto'
          }}
        >

          {/* HEADER */}
          <Box component="thead">
            <Box component="tr">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(day => (
                <Box
                  key={day}
                  component="th"
                  sx={{
                    border: "1px solid #1d8ae7",
                    py: { xs: 1.5, sm: 2 },
                    px: { xs: 1, sm: 2 },
                    fontSize: { xs: '0.9rem', sm: '1rem' }
                  }}
                >
                  {day}
                </Box>
              ))}
            </Box>
          </Box>

          {/* BODY */}
          <Box component="tbody">
            {tableData.map((row, i) => (
              <Box component="tr" key={i}>
                {row.map((cell, j) => (
                  <Box
                    component="td"
                    key={j}
                    sx={{
                      border: "1px solid #1d8ae7",
                      py: { xs: 1.5, sm: 2 },
                      px: { xs: 1, sm: 2 },
                      fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                      fontWeight: 600,
                      color: highlight.includes(cell) ? "#f44336" : cell === "**" ? "#f44336" : "#333"
                    }}
                  >
                    {cell}
                  </Box>
                ))}
              </Box>
            ))}
          </Box>

        </Box>
      </Box>

      {/* BOTTOM BUTTONS */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          mt: 6,
          flexWrap: "wrap"
        }}
      >

        {/* BACK BUTTON */}
        <Button
          variant="outlined"
          onClick={() => window.history.back()}
          sx={{
            px: 4,
            py: 1.2,
            borderRadius: "10px",
            borderColor: "#ddd",
            color: "#333",
            fontWeight: 600,
            textTransform: "none",
            fontSize: "16px",
            background: "#f5f5f5",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            "&:hover": {
              background: "#eee"
            }
          }}
        >
          ← Back
        </Button>


        {/* GO TOP BUTTON */}
        <Button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          sx={{
            px: 4,
            py: 1.2,
            borderRadius: "10px",
            background: "#1d8ae7",
            color: "#fff",
            fontWeight: 600,
            textTransform: "none",
            fontSize: "16px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            "&:hover": {
              background: "#e69300"
            }
          }}
        >
          Go to Top ↑
        </Button>

      </Box>


    </Box>
  );
}