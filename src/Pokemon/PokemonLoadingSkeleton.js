import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const PokemonLoadingSkeleton = ({ PokemonComponent, name }) => {
  return (
    <Grid item xs={11} sm={4} md={4}>
      <Box
        component="div"
        sx={{
          p: 1,
          height: 200,
          border: "1px dashed white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(255, 108, 108)",
        }}
      >
        {PokemonComponent ? PokemonComponent : `Loading ${name}...`}
      </Box>
    </Grid>
  );
};

export default PokemonLoadingSkeleton;
