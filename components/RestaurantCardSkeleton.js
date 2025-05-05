import { Card, CardContent, Skeleton, Box } from "@mui/material";

const RestaurantCardSkeleton = () => (
  <Card
    sx={{
      width: "100%",
      marginRight: 3,
      borderRadius: 2,
      boxShadow: "none",
      border: "1px solid #e0e0e0",
    }}
  >
    <Box sx={{ position: "relative" }}>
      <Skeleton
        variant="rectangular"
        width="100%"
        height={140}
        sx={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
      />
      <Skeleton
        variant="rounded"
        width={80}
        height={24}
        sx={{
          position: "absolute",
          bottom: 8,
          left: 8,
          bgcolor: "rgba(0,0,0,0.3)",
        }}
      />
    </Box>
    <CardContent sx={{ padding: "14px" }}>
      <Skeleton variant="text" height={24} width="60%" />
      <Skeleton variant="text" height={20} width="80%" sx={{ mb: 1 }} />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Skeleton variant="circular" width={16} height={16} sx={{ mr: 1 }} />
        <Skeleton variant="text" width={30} height={20} sx={{ mr: 2 }} />
        <Skeleton variant="text" width={60} height={16} />
      </Box>
    </CardContent>
  </Card>
);

export default RestaurantCardSkeleton;
