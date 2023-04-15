import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos} from "./";
import { ico } from "../utils/constants";



const Feed = () => {
  const [videos, setVideos] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("New");
  


  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
    <Box sx={{display:{xs:'none',sm:'none',md:'block'} , height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
    {ico.map((icons) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(icons.name)}
        style={{
          background: icons.name === selectedCategory && "#FC1503",
          color: "white",
        }}
        key={icons.name}
      >
        <span style={{ color: icons.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
          {icons.icn}
        </span>
        
      </button>
    ))}
  
   
      </Box>

      <Box p={1} sx={{ overflowY: "auto", height: "90vh", flex: 2, }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;




