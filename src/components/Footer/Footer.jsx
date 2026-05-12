import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        background: "#353c9a",
        color: "#fff",
        textAlign: "center",
        py: { xs: 5, md: 7 },
        px: 2
      }}
    >

      {/* LOGO TEXT */}
      <Typography
        sx={{
          fontSize: { xs: "28px", md: "40px" },
          fontWeight: 700,
          mb: 2
        }}
      >
        <span style={{ color: "#ffa726" }}>Bharat</span>{" "}
        <span style={{ color: "#00c853" }}>Matka</span>
      </Typography>

      {/* AGE TEXT */}
      <Typography
        sx={{
          fontSize: { xs: "13px", md: "15px" },
          opacity: 0.9,
          mb: 2
        }}
      >
        Players need to be 18+ in order to register. Underage gambling is prohibited.
      </Typography>

      {/* ADDRESS */}
      <Typography
        sx={{
          fontSize: { xs: "14px", md: "16px" },
          fontWeight: 600,
          mb: 3
        }}
      >
        #301, Digital Trade Zone, Douglas IM1 1AA, Isle of Man
      </Typography>

      {/* DESCRIPTION */}
      <Typography
        sx={{
          maxWidth: "900px",
          margin: "0 auto",
          fontSize: { xs: "13px", md: "15px" },
          lineHeight: 1.7,
          opacity: 0.9,
          mb: 4
        }}
      >
        Our website is operated by Bharat Interactive Ltd., a company registered under the
        laws of Isle of Man, with its principal office at #301, Digital Trade Zone,
        Douglas IM1 1AA, Isle of Man. Bharat Matka operates under a valid gaming sublicense
        issued by the Isle of Man Gaming Authority, granting full rights to run gaming
        software and services across global territories.
      </Typography>

      {/* DIVIDER */}
      <Box
        sx={{
          width: "60%",
          height: "1px",
          background: "rgba(255,255,255,0.4)",
          margin: "0 auto 20px"
        }}
      />

      {/* COPYRIGHT */}
      <Typography
        sx={{
          fontSize: { xs: "12px", md: "14px" },
          opacity: 0.9
        }}
      >
        Copyright © 2026 Bharat Matka | All rights reserved
      </Typography>

    </Box>
  );
}