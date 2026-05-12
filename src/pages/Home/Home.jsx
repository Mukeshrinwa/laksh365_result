import { Box, Button, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import ShopIcon from "@mui/icons-material/Shop";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import banner2 from "../../assets/images/banner-shot2.png";
import banner3 from "../../assets/images/banner-shot3.png";

export default function Home() {

  const slides = [banner2, banner3];

  const downloadApp = () => {
    window.open("/app.apk", "_blank");
  };

  return (
    <Box sx={{ bgcolor: "#f6f6f6", pb: 6 }}>

      {/* SLIDER */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: false
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        style={{
          width: "100%",
          paddingBottom: "40px"
        }}
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ position: "relative" }}>

              {/* IMAGE */}
              <Box
                component="img"
                src={img}
                sx={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover"
                }}
              />

              {/* DOWNLOAD BUTTON */}
              <Button
                onClick={downloadApp}
                sx={{
                  position: "absolute",
                  bottom: { xs: 15, sm: 20, md: 30 },
                  left: "50%",
                  transform: "translateX(-50%)",

                  borderRadius: "60px",

                  px: { xs: 4, sm: 8, md: 14 },
                  py: { xs: 1.5, sm: 2, md: 2.5 },

                  fontSize: { xs: "14px", sm: "18px", md: "22px" },
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  color: "#fff",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",

                  background: "linear-gradient(180deg,#ff9a00 0%,#ff6a00 100%)",

                  boxShadow: "0 6px 0 #cc5200, 0 0 25px rgba(255,140,0,0.8)",

                  border: "3px solid rgba(255,255,255,0.3)",

                  transition: "all .25s ease",

                  animation: "pulseGlow 2s infinite",

                  "&:hover": {
                    transform: "translateX(-50%) scale(1.06)",
                    boxShadow: "0 8px 0 #cc5200, 0 0 35px rgba(255,140,0,1)"
                  },

                  "@keyframes pulseGlow": {
                    "0%": {
                      boxShadow: "0 6px 0 #cc5200, 0 0 10px rgba(255,140,0,0.6)"
                    },
                    "50%": {
                      boxShadow: "0 6px 0 #cc5200, 0 0 35px rgba(255,140,0,1)"
                    },
                    "100%": {
                      boxShadow: "0 6px 0 #cc5200, 0 0 10px rgba(255,140,0,0.6)"
                    }
                  }
                }}
              >
                DOWNLOAD APP NOW
              </Button>

            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

    </Box>
  );
}