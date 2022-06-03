import React, { Suspense } from "react";
import useSWR from "swr";
import PokemonLoadingSkeleton from "../Pokemon/PokemonLoadingSkeleton";
import Pokemon from "../Pokemon/Pokemon";
import { Grid } from "@mui/material";

const Pokedex = () => {
  const {
    data: { results },
  } = useSWR("https://pokeapi.co/api/v2/pokemon?limit=151");

  return (
    <>
      <h2>Pokedex</h2>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        padding={5}
      >
        {results.map((pokemon, index) => (
          <Suspense
            key={index}
            fallback={<PokemonLoadingSkeleton {...pokemon} />}
          >
            <PokemonLoadingSkeleton
              PokemonComponent={<Pokemon {...pokemon} />}
            />
          </Suspense>
        ))}
      </Grid>
    </>
  );
};

export default Pokedex;
