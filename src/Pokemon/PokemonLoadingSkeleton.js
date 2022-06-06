import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const PokemonLoadingSkeleton = ({ PokemonComponent, name }) => {
  return (
    <Grid item xs={11} sm={4} md={2} gridTemplateColumns="repeat(5, 1fr)">
      <Box
        component="div"
        sx={{
          p: 1,
          border: "1px dashed white",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(255, 108, 108)",
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
