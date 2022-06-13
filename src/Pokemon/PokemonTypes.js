import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import backgroundImages from "./pokemonBackgroundImages";
import PropTypes from "prop-types";

const PokemonTypes = ({ types, setImage, image }) => {
  const typeColors = {
    fire: "orange",
    grass: "green",
    water: "#1c4cbd",
    flying: "#5ebdfc",
    poison: "purple",
    bug: "darkgreen",
    dragon: "darkblue",
    electric: "yellow",
    ground: "#ee6b2f",
    fairy: "pink",
    fighting: "#ce2211",
    psychic: "red",
    ice: "#16d6fb",
    rock: "tan",
    dark: "darkbrown",
    steel: "silver",
    ghost: "#301934",
    normal: "grey",
  };

  useEffect(() => {
    types.map((type) => image === "" && setImage(backgroundImages[type]));
  }, [image, setImage, types]);

  return (
    <Grid container justifyContent="center" alignItems="center" gap={1}>
      {types.map((type, index) => {
        const color = typeColors[type];
        return (
          <Box
            key={index}
            component="span"
            sx={{
              display: "flex",
              padding: "8px",
              borderRadius: 2,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: `${color}`,
              color: "white",
            }}
          >
            {type}
          </Box>
        );
      })}
    </Grid>
  );
};

PokemonTypes.defaultProps = {
  types: [],
  setImage: () => {},
  image: "",
};

PokemonTypes.propTypes = {
  types: PropTypes.array,
  setImage: PropTypes.func,
  image: PropTypes.string,
};

export default PokemonTypes;
