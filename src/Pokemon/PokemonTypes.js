import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const PokemonTypes = ({ types }) => {
  const checkType = (type) => {
    if (type === "fire") return "orange";
    if (type === "grass") return "green";
    if (type === "water") return "#1C4CBD";
    if (type === "flying") return "#5EBDFC";
    if (type === "poison") return "purple";
    if (type === "bug") return "darkgreen";
    if (type === "dragon") return "darkblue";
    if (type === "electric") return "yellow";
    if (type === "ground") return "#EE6B2F";
    if (type === "dragon") return "darkblue";
    if (type === "fairy") return "pink";
    if (type === "fighting") return "#CE2211";
    if (type === "psychic") return "red";
    if (type === "ice") return "#16D6FB";
    if (type === "rock") return "tan";
    if (type === "dark") return "darkbrown";
    if (type === "steel") return "silver";
    if (type === "ghost") return "lightpurple";
    return "grey";
  };

  return (
    <Grid container justifyContent="center" alignItems="center" gap={1}>
      {types.map((type, index) => {
        const color = checkType(type);

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
export default PokemonTypes;
