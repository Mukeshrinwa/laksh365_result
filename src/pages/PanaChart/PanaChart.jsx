import { Box, Typography, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

export default function PanaChart() {

  const { name } = useParams();
  const navigate = useNavigate();

  const chartName = name?.replaceAll("-", " ").toUpperCase();

  const data = [
    {
      year: "2022",
      from: "26-Dec",
      to: "01-Jan",
      mon: ["***", "**", "***"],
      tue: ["***", "**", "***"],
      wed: ["***", "**", "***"],
      thu: ["***", "**", "***"],
      fri: ["***", "**", "***"],
      sat: ["***", "**", "***"],
      sun: ["259", "61", "678"]
    },
    {
      year: "2023",
      from: "02-Jan",
      to: "08-Jan",
      mon: ["389", "04", "356"],
      tue: ["266", "47", "359"],
      wed: ["179", "76", "349"],
      thu: ["225", "91", "560"],
      fri: ["789", "40", "370"],
      sat: ["778", "21", "146"],
      sun: ["145", "06", "466"]
    }
  ];

  const highlight = ["61", "50", "49", "159", "590"];

  const goBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (

    <Box py={{ xs: 3, md: 6 }} px={2} bgcolor="#F6F6F6" minHeight="100vh">

      {/* HEADING */}
      <Typography
        textAlign="center"
        fontWeight={700}
        color="#2e3c91"
        sx={{
          fontSize: { xs: "22px", sm: "28px", md: "32px" }
        }}
      >
        {chartName} Pana Chart | {chartName} Panel Chart
      </Typography>

      <Typography
        textAlign="center"
        color="#555"
        mt={1}
        mb={3}
        sx={{
          fontSize: { xs: "12px", sm: "14px", md: "16px" },
          px: { xs: 1, md: 0 }
        }}
      >
        {chartName} Panel Chart Patti Panna Panel Pana Single Double Triple Patta Record Old History Historical Data Results Old Chart Online Live Book
      </Typography>

      {/* BUTTON */}
      <Box textAlign="center" mb={4}>
        <Button
          onClick={goBottom}
          sx={{
            background: "#1d8ae7",
            color: "#fff",
            px: { xs: 3, md: 4 },
            py: 1,
            borderRadius: "8px",
            textTransform: "none",
            fontWeight: 600,
            fontSize: { xs: "13px", md: "15px" },
            "&:hover": { background: "#e69300" }
          }}
        >
          Go To Bottom
        </Button>
      </Box>

      {/* TABLE */}
      <Box sx={{ overflowX: "auto" }}>

        <Box
          component="table"
          sx={{
            minWidth: "900px",
            borderCollapse: "collapse",
            background: "#fff"
          }}
        >

          {/* HEADER */}
          <Box component="thead">
            <Box component="tr">
              {["Date", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(day => (

                <Box
                  component="th"
                  key={day}
                  sx={{
                    border: "1px solid #1d8ae7",
                    py: { xs: 1, md: 2 },
                    px: 1,
                    fontWeight: 600,
                    fontSize: { xs: "12px", md: "14px" }
                  }}
                >
                  {day}
                </Box>

              ))}
            </Box>
          </Box>

          {/* BODY */}
          <Box component="tbody">

            {data.map((row, i) => (

              <Box component="tr" key={i}>

                {/* DATE */}
                <Box
                  component="td"
                  sx={{
                    border: "1px solid #1d8ae7",
                    p: { xs: 1, md: 2 },
                    background: "#fff9f0",
                    width: { xs: "120px", md: "150px" }
                  }}
                >

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >

                    {/* YEAR */}
                    <Box sx={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
                      {row.year.split("").map((d, j) => (
                        <Typography key={j} sx={{ fontSize: { xs: "10px", md: "12px" } }}>
                          {d}
                        </Typography>
                      ))}
                    </Box>

                    {/* RANGE */}
                    <Box textAlign="center">
                      <Typography sx={{ fontSize: { xs: "10px", md: "12px" } }}>
                        {row.from}
                      </Typography>

                      <Typography sx={{ fontSize: "10px", color: "#777" }}>
                        to
                      </Typography>

                      <Typography sx={{ fontSize: { xs: "10px", md: "12px" } }}>
                        {row.to}
                      </Typography>
                    </Box>

                  </Box>

                </Box>

                {/* DAYS */}
                {["mon", "tue", "wed", "thu", "fri", "sat", "sun"].map(day => (

                  <Box
                    component="td"
                    key={day}
                    sx={{
                      border: "1px solid #1d8ae7",
                      textAlign: "center",
                      py: { xs: 0.5, md: 1 }
                    }}
                  >

                    {row[day].map((num, j) => (

                      <Typography
                        key={j}
                        sx={{
                          fontSize: j === 1
                            ? { xs: "16px", md: "20px" }
                            : { xs: "11px", md: "14px" },
                          fontWeight: j === 1 ? 700 : 400,
                          color: highlight.includes(num) ? "#f44336" : "#333"
                        }}
                      >
                        {num}
                      </Typography>

                    ))}

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
          gap: { xs: 2, md: 3 },
          mt: 6,
          flexWrap: "wrap"
        }}
      >

        <Button
          variant="outlined"
          onClick={() => navigate(-1)}
          sx={{
            px: { xs: 3, md: 4 },
            py: 1,
            borderRadius: "10px",
            fontSize: { xs: "13px", md: "16px" }
          }}
        >
          ← Back
        </Button>

        <Button
          onClick={goTop}
          sx={{
            px: { xs: 3, md: 4 },
            py: 1,
            borderRadius: "10px",
            background: "#1d8ae7",
            color: "#fff",
            fontSize: { xs: "13px", md: "16px" },
            "&:hover": { background: "#e69300" }
          }}
        >
          Go to Top ↑
        </Button>

      </Box>

    </Box>

  );
}