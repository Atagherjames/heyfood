"use client";

import { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import Tags from "@/components/Tags";
import styles from "./page.module.css";
import BannerCarousel from "@/components/BannerCarousel";
import RestaurantSection from "@/components/RestaurantSection";
import { restaurantData } from "@/components/data";
import RestaurantSidebar from "@/components/RestaurantSidebar";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.page}>
      {/* Tab Header */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          backgroundColor: "white",
          width: "100%",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Box sx={{ width: "90%", margin: "0 auto", marginBottom: 4 }}>
          <Tabs
            value={activeTab}
            onChange={(e, newValue) => setActiveTab(newValue)}
            indicatorColor="transparent"
            TabIndicatorProps={{ style: { display: "none" } }}
            aria-label="home tabs"
            sx={{
              mt: 1,
              "& .MuiTabs-flexContainer": {
                display: "flex",
                alignItems: "center",
                gap: "16px",
              },
              "& .MuiTab-root": {
                textTransform: "none",
                fontSize: "1rem",
                minWidth: "auto",
                padding: "2px 16px !important",
                marginRight: "16px",
                color: "#000",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
                borderRadius: "999px",
                fontWeight: 600,
                transition: "all 0.2s ease-in-out",
                "& svg": {
                  fontSize: "28px",
                  color: "#000",
                  transition: "color 0.2s ease-in-out",
                },
              },
              "& .Mui-selected": {
                backgroundColor: "#000",
                paddingLeft: "40px !important",
                paddingRight: "40px !important",
                color: "#fff !important",
                "& svg": {
                  color: "#fff !important",
                },
              },
            }}
          >
            <Tab
              icon={<RestaurantMenuIcon fontSize="large" />}
              iconPosition="start"
              label="Restaurants"
            />
            <Tab
              icon={<BakeryDiningIcon fontSize="large" />}
              iconPosition="start"
              label="Grocery"
            />
          </Tabs>
        </Box>
      </Box>

      {/* Content Area */}
      <Box sx={{ p: 2 }}>
        {activeTab === 0 ? <RestaurantsTab /> : <GroceryTab />}
      </Box>
    </div>
  );
}

function RestaurantsTab() {
  return (
    <Box>
      <section className={styles.tagContainer}>
        <Tags />
      </section>
      <section className={styles.bannerContainer}>
        <BannerCarousel />
      </section>

      <section className={styles.restaurantContainer}>
        <div className={styles.sidebar}>
          <RestaurantSidebar />
        </div>
        <div className={styles.content}>
          <RestaurantSection />
        </div>
      </section>
    </Box>
  );
}

function GroceryTab() {
  return (
    <Box>
      <p>Grocery content will appear here</p>
    </Box>
  );
}
