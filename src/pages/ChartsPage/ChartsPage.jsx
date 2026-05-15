import React from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Button,
  Grid,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const pannaCharts = [
  "LAXMI MORNING",
  "LAKSH MORNING",
  "SANDHYA MORNING",
  "SRIDEVI",
  "TIME BAZAR",
  "MADHUR DAY",
  "LAXMI DAY",
  "MILAN DAY",
  "KALYAN NIGHT",
  "RAJDHANI NIGHT",
  "MAIN BAZAR",
];

const starlineCharts = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
];

const jackpotCharts = [
  "10:30 AM",
  "11:30 AM",
  "12:30 PM",
  "01:30 PM",
  "02:30 PM",
];

export default function ChartsPage() {
  const navigate = useNavigate();

  const chartBtnStyle = {
    minWidth: "58px",
    height: "34px",
    borderRadius: "12px",
    background: "#000",
    color: "#fff",
    textTransform: "none",
    fontSize: "13px",
    fontWeight: 700,
    boxShadow: "none",

    "&:hover": {
      background: "#111",
      boxShadow: "none",
    },
  };

  const ChartRow = ({ title }) => (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 1.5, sm: 2 },
        borderRadius: "14px",
        border: "1px solid #d9d9d9",
        background: "#ffffff",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: {
              xs: "13px",
              sm: "15px",
            },
            color: "#111827",
          }}
        >
          {title}
        </Typography>

        <Stack direction="row" spacing={1}>
          <Button
            sx={chartBtnStyle}
            onClick={() =>
              navigate(`/pana-chart/${title.toLowerCase().replace(/\s+/g, "-")}`)
            }
          >
            Pana
          </Button>

          <Button
            sx={chartBtnStyle}
            onClick={() =>
              navigate(`/jodi-chart/${title.toLowerCase().replace(/\s+/g, "-")}`)
            }
          >
            Jodi
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );

  const TimeChartCard = ({ title, subtitle, data, route }) => (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        borderRadius: "18px",
        border: "1px solid #dbe4e6",
        background: "#eef7f8",
        height: "100%",
      }}
    >
      <Typography
        sx={{
          fontWeight: 800,
          fontSize: {
            xs: "24px",
            sm: "28px",
          },
          color: "#111827",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontSize: "12px",
          color: "#6b7280",
          mb: 3,
          mt: 0.5,
        }}
      >
        OPEN - CLOSE
      </Typography>

      <Typography
        sx={{
          fontWeight: 800,
          color: "#005f73",
          mb: 2,
          fontSize: {
            xs: "20px",
            sm: "24px",
          },
        }}
      >
        {subtitle}
      </Typography>

      <Stack spacing={1.8}>
        {data.map((time, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              p: 1.5,
              borderRadius: "14px",
              border: "1px solid #d9d9d9",
              background: "#ffffff",
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: {
                    xs: "14px",
                    sm: "16px",
                  },
                }}
              >
                {time}
              </Typography>

              <Button
                sx={chartBtnStyle}
                onClick={() => navigate(route)}
              >
                View
              </Button>
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Paper>
  );

  return (
    <Box
      sx={{
        background: "#eef7f8",
        minHeight: "100vh",
        py: { xs: 3, md: 5 },
      }}
    >
      <Container maxWidth="lg">
        {/* Main Chart Section */}
        <Paper
          elevation={0}
          sx={{
            p: {
              xs: 2,
              sm: 3,
            },
            borderRadius: "20px",
            border: "1px solid #dbe4e6",
            background: "#eef7f8",
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: {
                xs: "24px",
                sm: "30px",
              },
              mb: 3,
              color: "#111827",
            }}
          >
            Chart
          </Typography>

          <Stack spacing={2}>
            {pannaCharts.map((item, index) => (
              <ChartRow key={index} title={item} />
            ))}
          </Stack>
        </Paper>

        {/* Bottom Cards */}
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid item size={{xs:12 , sm:6}}>
            <TimeChartCard
              title="Starline Chart"
              subtitle="ALL STARLINE CHART"
              data={starlineCharts}
              route="/starline-pana"
            />
          </Grid>

          <Grid item size={{xs:12 , sm:6}}>
            <TimeChartCard
              title="Jackpot Chart"
              subtitle="ALL JACKPOT CHART"
              data={jackpotCharts}
              route="/jackpot"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}