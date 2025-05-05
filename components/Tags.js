"use client";

import Image from "next/image";
import { Box, Typography, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppContext } from "@/context/appContext";
import { fetchTags } from "@/api/api";

export default function Tags() {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setTag } = useAppContext();

  const handleTag = (tagName) => {
    setTag(tagName);
  };

  useEffect(() => {
    const getTags = async () => {
      setLoading(true);
      try {
        const data = await fetchTags();
        setTags(data);
      } catch (err) {
        setTags([]);
      } finally {
        setLoading(false);
      }
    };

    getTags();
  }, []);

  const skeletonArray = Array.from({ length: 8 });

  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "auto",
        whiteSpace: "nowrap",
        padding: "8px 16px",
        gap: 6,
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      {loading
        ? skeletonArray.map((_, i) => (
            <Box
              key={i}
              sx={{
                width: 80,
                height: 80,
                borderRadius: "16px",
                padding: "8px",
              }}
            >
              <Skeleton
                variant="circular"
                width={50}
                height={50}
                animation="wave"
              />
              <Skeleton
                width={60}
                height={14}
                sx={{ mt: 1 }}
                animation="wave"
              />
            </Box>
          ))
        : tags.map((tag) => (
            <Box
              key={tag.name}
              onClick={() => handleTag(tag.name)}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: 80,
                height: 80,
                borderRadius: "16px",
                padding: "8px",
                cursor: "pointer",
                transition: "background-color 0.2s ease",
                "&:hover": {
                  backgroundColor: "#F9F9F9",
                },
              }}
            >
              <Image
                src={tag.image}
                alt={tag.name}
                width={50}
                height={50}
                style={{ objectFit: "contain" }}
              />
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  textAlign: "center",
                  fontWeight: 600,
                  color: "#333",
                  marginTop: "6px",
                }}
              >
                {tag.name}
              </Typography>
            </Box>
          ))}
    </Box>
  );
}
