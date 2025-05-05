"use client";
import {
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
} from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import { useAppContext } from "@/context/appContext";

const sortOptions = [
  { label: "Most Popular", value: "most_popular" },
  { label: "Highest rated", value: "highest_rated" },
  { label: "Newest", value: "newest" },
  { label: "Most Rated", value: "most_rated" },
];

const RestaurantSidebar = () => {
  const { state, setSort } = useAppContext();

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

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
        <RadioGroup
          name="sort-options"
          value={state.sort}
          onChange={handleSortChange}
          style={{ gap: "6px" }}
        >
          {sortOptions.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
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
              label={option.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </aside>
  );
};

export default RestaurantSidebar;
