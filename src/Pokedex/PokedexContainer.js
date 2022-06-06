import { Grid, Typography } from "@mui/material";
import React, { Suspense } from "react";
import Pokedex from "./Pokedex";

const PokedexContainer = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Suspense
        fallback={
          <Typography variant="h2" component="h3" color="white">
            Loading Pokedex...
          </Typography>
        }
      >
        <Pokedex />
      </Suspense>
    </Grid>
  );
};

export default PokedexContainer;
