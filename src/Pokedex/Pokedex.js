import React, { Suspense, useMemo, useState } from "react";
import useSWR from "swr";
import PokemonLoadingSkeleton from "../Pokemon/PokemonLoadingSkeleton";
import Pokemon from "../Pokemon/Pokemon";
import { Grid, Typography } from "@mui/material";
import SearchBar from "./SearchBar";

const Pokedex = () => {
  const {
    data: { results },
  } = useSWR("https://pokeapi.co/api/v2/pokemon?limit=151");
  const [searchValue, setSearchValue] = useState("");

  // Filters results and uses the hook useMemo to prevent rerendering
  // except when someone types in the search bar or results change.
  const filteredResults = useMemo(
    () =>
      results.filter((pokemon, index) => {
        console.log("Hello");
        return (
          (searchValue !== "" && pokemon.name.includes(searchValue)) ||
          (index + 1).toString().includes(searchValue)
        );
      }),
    [results, searchValue]
  );

  // Maps through the filtered list and loads pokemon data using Suspense fallback.
  const buildPokemonList = (filteredResults) =>
    filteredResults.map((pokemon, index) => (
      <Suspense key={index} fallback={<PokemonLoadingSkeleton {...pokemon} />}>
        <PokemonLoadingSkeleton
          PokemonComponent={<Pokemon key={pokemon.name} {...pokemon} />}
        />
      </Suspense>
    ));

  const searchBarInputs = {
    setSearchValue: setSearchValue,
    borderColor: "white",
    inputColor: "white",
    labelColor: "white",
    focusedBorderColor: "rgb(255, 108, 108)",
    focusedInputColor: "white",
    textValue: "Search Pokedex",
  };

  return (
    <>
      <Typography variant="h1" component="h2" color="white">
        Pokedex
      </Typography>
      <SearchBar {...searchBarInputs} />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        padding={5}
      >
        {buildPokemonList(filteredResults)}
      </Grid>
    </>
  );
};

export default Pokedex;
