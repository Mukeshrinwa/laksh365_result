import { Box, Typography } from "@mui/material";

export default function AboutGame() {
  return (
    <Box sx={{ background: "#f5f5f5", py: 6, px: 2 }}>

      {/* MAIN HEADING */}
      <Typography
        textAlign="center"
        sx={{
          fontSize: { xs: "28px", md: "36px" },
          fontWeight: 700,
          color: "#2f3e8f",
          mb: 4
        }}
      >
        About the Game
      </Typography>

      {/* CONTENT CARD */}
      <Box
        sx={{
          maxWidth: "1100px",
          margin: "auto",
          background: "#fff",
          borderRadius: "10px",
          padding: { xs: 3, md: 5 },
          boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
          lineHeight: 1.8
        }}
      >

        <Typography mb={3}>
          Satta is a broad word to describe “betting” in India or Hindi. The Matka
          game is sometimes referred to as Indian Satta Matka because of its early
          popularity. If you are interested in betting games, you can check out the
          numbers game. The game of online satta matka is pretty simple to
          understand and play.
        </Typography>

        <Typography mb={4}>
          With very little study and effort you can become an online matka play
          king and earn huge amounts. The Kalyan matka game was the first online
          matka market introduced by Kalyanji Bhagat in 1962 and the online
          matka Worli market was introduced in the 70’s by Ratan Khatri.
        </Typography>

        {/* HOW TO PLAY */}
        <Typography
          sx={{ fontSize: "24px", fontWeight: 700, color: "#2f3e8f", mb: 2 }}
        >
          This is how you play matka on Bharat Matka:
        </Typography>

        <Box component="ol" sx={{ pl: 3, mb: 4 }}>
          <li>
            Step 1 is to pick (3) numbers from 0–9. Example: 3,5,6.
            Add them together (3+5+6) which equals 14 and keep the last digit (4).
            First draw becomes: <b>3,5,6 *4</b>.
          </li>

          <li>
            The second set of numbers is drawn the same way.
            Example: 2,6,8 = 16 → last digit 6.
            Second draw becomes: <b>2,6,8 *6</b>.
          </li>

          <li>
            Final card looks like: <b>3,5,6 *4 X 2,6,8 *6</b>.
          </li>
        </Box>

        {/* ADD MONEY */}
        <Typography
          sx={{ fontSize: "24px", fontWeight: 700, color: "#2f3e8f", mb: 2 }}
        >
          How to add money in Bharat Matka?
        </Typography>

        <Box component="ol" sx={{ pl: 3, mb: 4 }}>
          <li>Minimum Deposit is 100 Rs</li>
          <li>Minimum Withdraw is 500 Rs</li>
          <li>Maximum Withdraw is 1 Lakh per day</li>
          <li>Withdrawal request time: 11 AM – 11 PM (All 7 days)</li>
          <li>Money credited within 10–30 minutes</li>
          <li>Withdraw available on Saturday & Sunday</li>
          <li>Withdraw not available on festivals</li>
          <li>1 point = Rs.1</li>
        </Box>

        {/* GUIDE */}
        <Typography
          sx={{ fontSize: "24px", fontWeight: 700, color: "#2f3e8f", mb: 2 }}
        >
          Satta Matka Guide – How To Play & Win Money?
        </Typography>

        <Typography mb={4}>
          Satta is a broad word describing betting in India. The Matka game
          became popular because players could easily participate by selecting
          numbers. The concept is simple: select numbers and check if they match
          the winning result.
        </Typography>

        {/* WHAT IS SATTA BAZAR */}
        <Typography
          sx={{ fontSize: "22px", fontWeight: 700, color: "#2f3e8f", mb: 2 }}
        >
          What is SATTA BAZAR?
        </Typography>

        <Typography mb={4}>
          Satta bazar means betting market. Indians enjoy betting activities and
          Satta Matka became a lottery-style number game where players select
          numbers hoping they match the winning combination.
        </Typography>

        {/* MATKA SATTA */}
        <Typography
          sx={{ fontSize: "22px", fontWeight: 700, color: "#2f3e8f", mb: 2 }}
        >
          What is MATKA SATTA?
        </Typography>

        <Typography mb={4}>
          Matka satta is one of the most popular betting formats in India.
          Traditionally, slips were drawn from an earthen pot called "Matka".
          The leader of the matka gambling syndicate was known as the Matka King.
          Famous games include Kalyan and Worli.
        </Typography>

        {/* HOW TO WIN */}
        <Typography
          sx={{ fontSize: "22px", fontWeight: 700, color: "#2f3e8f", mb: 2 }}
        >
          How Do You Win At Matka?
        </Typography>

        <Typography mb={4}>
          To win at Matka Satta, payouts range from 9/1 to 999/1 depending on
          the bet type. However, it is purely a game of chance and luck plays
          the biggest role in winning.
        </Typography>

        {/* HISTORY */}
        <Typography
          sx={{ fontSize: "22px", fontWeight: 700, color: "#2f3e8f", mb: 2 }}
        >
          History of SATTA MATKA
        </Typography>

        <Typography mb={4}>
          Matka gambling began when people wagered on the daily cotton prices
          from the New York Cotton Exchange. Over time it evolved into a number
          lottery game. Ratan Khatri became famously known as the Matka King.
        </Typography>

        {/* CONCLUSION */}
        <Typography
          sx={{ fontSize: "22px", fontWeight: 700, color: "#2f3e8f", mb: 2 }}
        >
          Conclusion on SATTA MATKA
        </Typography>

        <Typography>
          Even today enthusiasts play this game remembering the days when
          celebrities used to draw numbers. While the popularity has declined,
          betting culture still exists with modern online betting platforms
          and IPL cricket betting attracting large audiences.
        </Typography>

      </Box>
    </Box>
  );
}