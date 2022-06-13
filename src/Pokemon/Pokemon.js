import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import useSWR from "swr";
import PokemonTypes from "./PokemonTypes";
import PropTypes from "prop-types";

const Pokemon = ({ name }) => {
  const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const { sprites, id, types } = data;
  const [image, setImage] = useState("");
  const pokemonTypes = types?.map((type) => type.type.name);
  if (error) return <h2>Error Loading Pokemon</h2>;

  return (
    <Box
      component="div"
      sx={{
        p: 1,
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${image})`,
        backgroundSize: "125%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography variant="h5" color="white">
        {name} #{id}
      </Typography>
      <PokemonTypes types={pokemonTypes} setImage={setImage} image={image} />
      <img src={sprites?.front_default} alt={name} />
    </Box>
  );
};

Pokemon.defaultProps = {
  name: "",
};

Pokemon.propTypes = {
  name: PropTypes.string,
};

export default Pokemon;
