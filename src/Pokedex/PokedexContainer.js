import { Grid } from "@mui/material";
import React, { Suspense } from "react";
import Pokedex from "./Pokedex";

const PokedexContainer = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Suspense fallback={<h2>Loading Pokedex...</h2>}>
        <Pokedex />
      </Suspense>
    </Grid>
  );
};

export default PokedexContainer;
