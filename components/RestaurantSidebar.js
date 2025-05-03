import {
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
} from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";

const RestaurantSidebar = () => {
  return (
    <aside
      style={{
        width: "220px",
        padding: "20px",
        backgroundColor: "#fff",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Title */}
      <Typography
        variant="subtitle1"
        style={{
          fontWeight: 700,
          fontSize: "1.1rem",
          marginBottom: "2px",
        }}
      >
        All Stores
      </Typography>

      <Typography
        variant="body2"
        style={{
          color: "#999",
          marginBottom: "20px",
        }}
      >
        (643 Stores)
      </Typography>

      {/* Sort section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontWeight: 600,
          fontSize: "1rem",
          marginBottom: "10px",
        }}
      >
        <SortIcon fontSize="small" style={{ marginRight: "6px" }} />
        <Typography variant="subtitle2" style={{ fontWeight: 600 }}>
          Sort
        </Typography>
      </div>

      {/* Radio buttons */}
      <FormControl component="fieldset">
        <RadioGroup name="sort-options" style={{ gap: "6px" }}>
          {["Most Popular", "Highest rated", "Newest", "Most Rated"].map(
            (label) => (
              <FormControlLabel
                key={label}
                value={label}
                control={
                  <Radio
                    size="small"
                    sx={{
                      color: "#000",
                      "&.Mui-checked": {
                        color: "#000",
                      },
                    }}
                  />
                }
                label={label}
              />
            )
          )}
        </RadioGroup>
      </FormControl>
    </aside>
  );
};

export default RestaurantSidebar;
