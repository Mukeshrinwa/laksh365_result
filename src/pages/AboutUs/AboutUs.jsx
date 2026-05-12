import { Box, Typography } from "@mui/material";

export default function AboutUs() {
  return (
    <Box
      sx={{
        background: "#f5f5f5",
        py: { xs: 4, md: 6 },
        px: 2
      }}
    >
      {/* HEADING */}
      <Typography
        textAlign="center"
        sx={{
          fontSize: { xs: "28px", md: "36px" },
          fontWeight: 700,
          color: "#2f3e8f",
          mb: 4,
          position: "relative"
        }}
      >
        About Us

        {/* underline */}
        <Box
          sx={{
            width: "120px",
            height: "2px",
            background: "#2f3e8f",
            margin: "8px auto 0"
          }}
        />
      </Typography>

      {/* CARD */}
      <Box
        sx={{
          maxWidth: "900px",
          margin: "auto",
          background: "#fff",
          borderRadius: "10px",
          padding: { xs: 3, md: 5 },
          textAlign: "center",
          boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
          lineHeight: 1.8
        }}
      >
        <Typography mb={3}>
          <span style={{ color: "#ff8c00", fontWeight: 600 }}>Bharat</span>{" "}
          <span style={{ color: "#1a7f37", fontWeight: 600 }}>Matka</span> is
          operated by Bharat Interactive Ltd, a company incorporated under the
          laws of Isle of Man and regulated by the Isle of Man authority as the
          regulatory body responsible holding a (Sub-license with License number
          392/JAZ Sub-License GLH- OCHCKTV0707086017 granted on 11.11.2019).
        </Typography>

        <Typography mb={3}>
          <span style={{ color: "#ff8c00", fontWeight: 600 }}>Bharat</span>{" "}
          <span style={{ color: "#1a7f37", fontWeight: 600 }}>Matka</span> is
          into existence for past 30 years with more than 1.38 lac + members.
        </Typography>

        <Typography mb={3}>
          We have proudly taken our culture from offline to online business and
          now stand as India’s most trusted betting platform. BharatMatka is an
          international betting platform and has presence in more than 18
          countries. We truly value our customers and our endeavor is to provide
          best customer service and enable our customers to play online games
          with ease.
        </Typography>

        <Typography sx={{ fontWeight: 500 }}>
          Players are requested not to contact any untrusted sources for Bharat
          Matka accounts.
        </Typography>
      </Box>
    </Box>
  );
}