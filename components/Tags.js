"use client";

import Image from "next/image";
import { Box, Typography } from "@mui/material";

const tags = [
  {
    name: "Rice",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fjapanese-food-rice-svgrepo-com%201.svg_1657125340797?alt=media&token=5e4c0b0b-4a87-45c5-b053-85dfd13f624e",
  },
  {
    name: "Chicken",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fchicken-christmas-food-svgrepo-com%201.svg_1657123972810?alt=media&token=6258348f-0c78-4df0-a15b-f1f1813fb042",
  },
  {
    name: "Shawarma",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fburrito-svgrepo-com%201.svg_1657123337321?alt=media&token=b0db6e73-057f-4040-b106-347f8f32a49d",
  },
  {
    name: "Juice",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fjuice-svgrepo-com%202.svg_1657125631077?alt=media&token=7c8056d4-400a-4ed2-b88e-e456458769cb",
  },
  {
    name: "Goat Meat",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fmeat-on-bone-svgrepo-com%201.svg_1657125800626?alt=media&token=ec420ff7-afe9-4a04-8dc4-d82d8e2b39fc",
  },
  {
    name: "Amala",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2F192px.svg_1666186478054?alt=media&token=f060fce9-2a2c-4164-873d-a65cf05a6f56",
  },
  {
    name: "Fast Food",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Ffast-food-burger-svgrepo-com%202.svg_1657124812917?alt=media&token=d5f00823-8f3a-4085-8edd-76c161fb9618",
  },
  {
    name: "Soup Bowl",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fsoup-svgrepo-com%201.svg_1657126696679?alt=media&token=1a7a0734-e08a-4eef-8554-03f014210b7a",
  },
  {
    name: "Sandwich",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fsandwich-svgrepo-com%201.svg_1657126527119?alt=media&token=05b985e0-9228-436a-971c-9f168289005f",
  },
  {
    name: "Ice Cream",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fice-cream-svgrepo-com%20(1)%201.svg_1657125237440?alt=media&token=2702f233-e7e5-43e1-9324-84f6d11901a7",
  },
  {
    name: "Doughnuts",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fdoughnut-svgrepo-com%201.svg_1657124741318?alt=media&token=b023bd80-983b-4bf1-8d95-3ba8a01b6e52",
  },
  {
    name: "Smothies",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fmelon-juice-svgrepo-com%201.svg_1657125840561?alt=media&token=405def54-fe46-4bfd-b599-d60017641fe5",
  },
  {
    name: "Grills",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fsausage-meat-svgrepo-com%201.svg_1657126581944?alt=media&token=1450cb6c-4ee8-4110-a9a9-396306bf87d1",
  },
];

export default function Tags() {
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
      {tags.map((tag) => (
        <Box
          key={tag.name}
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
