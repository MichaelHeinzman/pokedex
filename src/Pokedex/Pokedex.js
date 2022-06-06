import React, { Suspense, useState } from "react";
import useSWR from "swr";
import PokemonLoadingSkeleton from "../Pokemon/PokemonLoadingSkeleton";
import Pokemon from "../Pokemon/Pokemon";
import { Grid, Typography } from "@mui/material";
import SearchPokedex from "./SearchPokedex";

const Pokedex = () => {
  let {
    data: { results },
  } = useSWR("https://pokeapi.co/api/v2/pokemon?limit=151");

  const [searchValue, setSearchValue] = useState("");
  if (searchValue !== "")
    results = results.filter(
      (pokemon, index) =>
        pokemon.name.includes(searchValue) ||
        (index + 1).toString().includes(searchValue)
    );

  return (
    <>
      <Typography variant="h1" component="h2" color="white">
        Pokedex
      </Typography>

      <SearchPokedex setSearchValue={setSearchValue} />

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 2, md: 4 }}
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
