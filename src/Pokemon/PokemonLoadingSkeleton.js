import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const PokemonLoadingSkeleton = ({ PokemonComponent, name }) => {
  return (
    <Grid item xs={11} sm={4} md={2} gridTemplateColumns="repeat(5, 1fr)">
      <Box
        component="div"
        sx={{
          overflow: "hidden",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(255, 108, 108)",
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        {PokemonComponent ? PokemonComponent : `Loading ${name}...`}
      </Box>
    </Grid>
  );
};

export default PokemonLoadingSkeleton;
