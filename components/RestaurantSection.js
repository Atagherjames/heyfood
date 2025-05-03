import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Typography, Box, IconButton } from "@mui/material";
import {
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import RestaurantCard from "./RestaurantCard";
import "swiper/css";
import "swiper/css/navigation";

const RestaurantSection = ({ title, data }) => {
  const [showAll, setShowAll] = useState(false);
  const swiperRef = useRef(null);
  const isAllRestaurants = title === "All Restaurants";

  const handleSeeAllClick = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <Box
      sx={{
        position: "relative",
        padding: "0 40px",
        marginBottom: "40px",
        maxWidth: "100%",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
          padding: "0 8px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
          }}
        >
          {title}
        </Typography>

        {!isAllRestaurants && (
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Typography
              variant="subtitle2"
              sx={{
                color: "grey",
                cursor: "pointer",
                "&:hover": { textDecoration: "none" },
              }}
              onClick={handleSeeAllClick}
            >
              {showAll ? "Show Less" : "See all"}
            </Typography>

            <IconButton
              onClick={() => swiperRef.current?.slidePrev()}
              size="small"
              sx={{
                backgroundColor: "background.paper",
                boxShadow: 1,
                "&:hover": { backgroundColor: "action.hover" },
              }}
            >
              <ArrowBackIcon fontSize="small" />
            </IconButton>
            <IconButton
              onClick={() => swiperRef.current?.slideNext()}
              size="small"
              sx={{
                backgroundColor: "background.paper",
                boxShadow: 1,
                "&:hover": { backgroundColor: "action.hover" },
              }}
            >
              <ArrowForwardIcon fontSize="small" />
            </IconButton>
          </Box>
        )}
      </Box>

      {/* Content */}
      {isAllRestaurants || showAll ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            rowGap: "32px",
          }}
        >
          {data.map((restaurant) => (
            <Box
              key={restaurant.id}
              sx={{
                flex: {
                  xs: "1 1 100%",
                  sm: "1 1 calc(50% - 16px)",
                  md: "1 1 calc(50% - 16px)",
                  lg: "1 1 calc(33.33% - 21.33px)",
                },
                maxWidth: {
                  xs: "100%",
                  sm: "calc(50% - 16px)",
                  md: "calc(50% - 16px)",
                  lg: "calc(33.33% - 21.33px)",
                },
                minWidth: "280px",
              }}
            >
              <RestaurantCard {...restaurant} />
            </Box>
          ))}
        </Box>
      ) : (
        <Box sx={{ padding: "8px 0" }}>
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={24}
            style={{ overflow: "hidden", width: "100%" }}
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              900: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
          >
            {data.map((restaurant) => (
              <SwiperSlide key={restaurant.id}>
                <Box sx={{ width: "100%" }}>
                  <RestaurantCard {...restaurant} />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      )}
    </Box>
  );
};

export default RestaurantSection;
