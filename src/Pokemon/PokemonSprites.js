import { Grid } from "@mui/material";

const PokemonSprites = ({ sprites }) => {
  return (
    <Grid container justifyContent="center" alignItems="Center" gap={1}>
      {Object.keys(sprites).map((key, index) => {
        return <img key={index} src={sprites[key]} alt={key} />;
      })}
    </Grid>
  );
};

export default PokemonSprites;
