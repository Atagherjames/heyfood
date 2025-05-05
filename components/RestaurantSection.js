import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import RestaurantCard from "./RestaurantCard";
import RestaurantCardSkeleton from "./RestaurantCardSkeleton";
import { useAppContext } from "@/context/appContext";
import { fetchRestaurants } from "@/api/api";

const RestaurantSection = () => {
  const { state } = useAppContext();
  const { sort = "", search = "", tag = "" } = state;
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllRestaurants = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchRestaurants({
          sort,
          search,
          tag,
        });
        setRestaurants(data);
      } catch (err) {
        setError(err);
        setRestaurants([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAllRestaurants();
  }, [sort, search, tag]);

  const skeletonArray = Array.from({ length: 6 });

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
          All Restaurants
        </Typography>
      </Box>

      {/* Content */}
      <Box sx={{ padding: "8px 0" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "32px",
          }}
        >
          {loading
            ? skeletonArray.map((_, index) => (
                <Box key={index} sx={{ width: "100%" }}>
                  <RestaurantCardSkeleton />
                </Box>
              ))
            : restaurants.map((restaurant) => (
                <Box key={restaurant._id} sx={{ width: "100%" }}>
                  <RestaurantCard {...restaurant} />
                </Box>
              ))}
        </Box>
      </Box>
    </Box>
  );
};

export default RestaurantSection;
