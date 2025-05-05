// restaurant api call
const API_BASE = "http://localhost:5000/api";

export const fetchRestaurants = async ({ search, sort, tag, group } = {}) => {
  try {
    const queryParams = new URLSearchParams();

    if (search) queryParams.append("search", search);
    if (sort) queryParams.append("sort", sort);
    if (tag) queryParams.append("tag", tag);
    if (group) queryParams.append("group", group);

    const url = `${API_BASE}/restaurants?${queryParams.toString()}`;

    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
};

export const fetchTags = async () => {
  try {
    const url = `${API_BASE}/restaurants/tags`;

    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching tags", error);
    throw error;
  }
};
