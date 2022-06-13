import { Grid } from "@mui/material";
import PropTypes from "prop-types";

const PokemonSprites = ({ sprites }) => {
  return (
    <Grid container justifyContent="center" alignItems="Center" gap={1}>
      {Object.keys(sprites).map((key, index) => {
        return <img key={index} src={sprites[key]} alt={key} />;
      })}
    </Grid>
  );
};

PokemonSprites.defaultProps = {
  sprites: {},
};

PokemonSprites.propTypes = {
  sprites: PropTypes.object,
};

export default PokemonSprites;
