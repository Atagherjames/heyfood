import { Card, CardContent, Typography, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const RestaurantCard = ({
  name,
  rating,
  ratingsCount,
  deliveryInfo,
  image,
  tags = [],
}) => (
  <Card
    sx={{
      width: "100%",
      marginRight: 3,
      borderRadius: 2,
      boxShadow: "none",
      border: "1px solid #e0e0e0",
      "&:hover": {
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      },
    }}
  >
    <Box sx={{ position: "relative" }}>
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "140px",
          objectFit: "cover",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      />
      {deliveryInfo && (
        <Box
          sx={{
            position: "absolute",
            bottom: 8,
            left: 8,
            backgroundColor: "rgba(0,0,0,0.7)",
            color: "white",
            padding: "4px 10px",
            borderRadius: 4,
            fontSize: "0.75rem",
            fontWeight: 500,
          }}
        >
          {deliveryInfo}
        </Box>
      )}
    </Box>
    <CardContent sx={{ padding: "14px" }}>
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 600,
          fontSize: "1rem",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          mb: 0.5,
        }}
      >
        {name}
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          fontSize: "0.85rem",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          mb: 1,
        }}
      >
        {tags.map((tag) => tag.name).join(", ")}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center", color: "#4CAF50" }}>
          <StarIcon sx={{ fontSize: "1rem", mr: 0.5 }} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
              fontSize: "0.85rem",
              mr: 1.5,
            }}
          >
            {rating}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "0.8rem" }}
        >
          {ratingsCount}+ Ratings
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default RestaurantCard;
