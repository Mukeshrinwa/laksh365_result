import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const pannaCharts = [
  "STAR TARA DAY","NTR BAZAR","MILAN DAY","RAJDHANI DAY","ANDHRA DAY",
  "KALYAN","MAHADEVI","NTR DAY","SITA NIGHT","SRIDEVI NIGHT",
  "STAR TARA NIGHT","MAHADEVI NIGHT","MADHUR NIGHT","SUPREME NIGHT","ANDHRA NIGHT",
  "NTR NIGHT","MILAN NIGHT","KALYAN NIGHT","RAJDHANI NIGHT","MAIN BAZAR",
  "MANGAL BAZAR","NTR MORNING","SITA MORNING","KARNATAKA DAY","STAR TARA MORNING",
  "MILAN MORNING","MAYA BAZAR","ANDHRA MORNING","SRIDEVI","MAHADEVI MORNING",
  "TIME BAZAR","MADHUR DAY","SITA DAY"
];

export default function ChartsPage() {

  const navigate = useNavigate();

  const ChartButton = ({ text, onClick }) => (

    <Box
      onClick={onClick}
      sx={{
        border: "2px solid #2f3e8f",
        borderRadius: "12px",
        padding: "10px",
        textAlign: "center",
        fontSize: "14px",
        fontWeight: 600,
        cursor: "pointer",
        background: "#fff",
        transition: "all .3s ease",
        position: "relative",
        overflow: "hidden",

        "&:hover": {
          transform: "translateY(-4px) scale(1.03)",
          boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
          background: "#2f3e8f",
          color: "#fff"
        },

        "&:active": {
          transform: "scale(.95)"
        }
      }}
    >
      {text}
    </Box>

  );

  const SectionHeader = ({ title }) => (

    <Box
      sx={{
        background: "#2f3e8f",
        color: "#fff",
        textAlign: "center",
        padding: "10px",
        fontWeight: 700,
        letterSpacing: 1,
        fontSize: "15px"
      }}
    >
      {title}
    </Box>

  );

  return (

    <Box sx={{ background: "#f5f5f5", pb: 6 }}>

      {/* STARLINE */}
      <SectionHeader title="STARLINE CHARTS" />

      <Box sx={{ p:2 }}>
        <ChartButton
          text="BHARAT STARLINE PANNA CHART"
          onClick={() => navigate("/bharat-starline-pana")}
        />
      </Box>

      {/* JACKPOT */}
      <SectionHeader title="JACKPOT CHARTS" />

      <Box sx={{ p: 2 }}>
        <ChartButton
          text="BHARAT JACKPOT CHART"
          onClick={() => navigate("/bharat-jackpot")}
        />
      </Box>

      {/* PANNA */}
      <SectionHeader title="PANNA CHARTS" />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr 1fr",
            sm: "repeat(3,1fr)",
            md: "repeat(5,1fr)"
          },
          gap: 2,
          p: 2
        }}
      >

        {pannaCharts.map((item, i) => (

          <ChartButton
            key={i}
            text={item}
            onClick={() =>
              navigate(`/pana-chart/${item.toLowerCase().replace(/\s+/g,"-")}`)
            }
          />

        ))}

      </Box>

      {/* JODI */}
      <SectionHeader title="JODI CHARTS" />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr 1fr",
            sm: "repeat(3,1fr)",
            md: "repeat(5,1fr)"
          },
          gap: 2,
          p: 2
        }}
      >

        {pannaCharts.map((item, i) => (

          <ChartButton
            key={i}
            text={item}
            onClick={() =>
              navigate(`/jodi-chart/${item.toLowerCase().replace(/\s+/g,"-")}`)
            }
          />

        ))}

      </Box>

    </Box>

  );
}