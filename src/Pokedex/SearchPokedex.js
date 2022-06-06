import { Grid, TextField } from "@mui/material";
import React from "react";

const SearchPokedex = ({ setSearchValue }) => {
  const searchBarChanged = (e) => setSearchValue(e.target.value.toLowerCase());
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={6}>
        <TextField
          label="Search Pokedex"
          variant="outlined"
          sx={{
            width: "100%",
            "& .MuiInputLabel-root": { color: "white" }, //styles the label
            "& .MuiInputLabel-root.Mui-focused": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& > fieldset": { borderColor: "white" },
            },
            "& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {
                borderColor: "rgb(255, 108, 108)",
              },
            },
            input: { color: "white" },
            label: { color: "white" },
          }}
          onChange={searchBarChanged}
        />
      </Grid>
    </Grid>
  );
};

export default SearchPokedex;
