import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PropTypes from "prop-types";
import Pokemon from "./Pokemon";
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
PokemonLoadingSkeleton.defaultProps = {
  name: "",
  PokemonComponent: <Pokemon />,
};

PokemonLoadingSkeleton.propTypes = {
  name: PropTypes.string,
  PokemonComponent: PropTypes.element,
};

export default PokemonLoadingSkeleton;
