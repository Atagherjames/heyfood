"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import {
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import BannerModal from "./BannerModal";
import { bannerData } from "./data";
import "swiper/css";

export default function BannerCarousel() {
  const swiperRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedBanner, setSelectedBanner] = useState(null);

  const handleBannerClick = (banner) => {
    setSelectedBanner(banner);
    setOpenModal(true);
  };

  return (
    <div
      style={{
        position: "relative",
        padding: "0 40px",
        maxWidth: "100%",
        margin: "0 auto",
      }}
    >
      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={16}
        slidesPerView="auto"
        centeredSlides={false}
        style={{ padding: "16px 0" }}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          640: { slidesPerView: 2.5 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {bannerData.map((banner) => (
          <SwiperSlide
            key={banner.id}
            style={{
              width: "auto",
              cursor: "pointer",
              transition: "transform 0.3s ease",
              ":hover": { transform: "scale(1.03)" },
            }}
            onClick={() => handleBannerClick(banner)}
          >
            <div
              style={{
                borderRadius: 12,
                overflow: "hidden",
                width: "280px",
                height: "160px",
                position: "relative",
              }}
            >
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <IconButton
        onClick={() => swiperRef.current?.slidePrev()}
        sx={{
          position: "absolute",
          left: 8,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          backgroundColor: "#f5f5f5",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          width: 32,
          height: 32,
          "&:hover": {
            backgroundColor: "#e0e0e0",
          },
        }}
      >
        <ArrowBackIcon fontSize="medium" />
      </IconButton>

      <IconButton
        onClick={() => swiperRef.current?.slideNext()}
        sx={{
          position: "absolute",
          right: 8,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          backgroundColor: "#f5f5f5",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          width: 32,
          height: 32,
          "&:hover": {
            backgroundColor: "#e0e0e0",
          },
        }}
      >
        <ArrowForwardIcon fontSize="medium" />
      </IconButton>

      {selectedBanner && (
        <BannerModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          banner={selectedBanner}
        />
      )}
    </div>
  );
}
