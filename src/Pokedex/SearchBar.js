import { Grid, TextField } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({
  setSearchValue,
  borderColor,
  inputColor,
  labelColor,
  focusedBorderColor,
  focusedInputColor,
  textValue,
}) => {
  const searchBarChanged = (e) => setSearchValue(e.target.value.toLowerCase());
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={6}>
        <TextField
          label={textValue}
          variant="outlined"
          sx={{
            width: "100%",
            "& .MuiInputLabel-root": { color: inputColor }, //styles the label
            "& .MuiInputLabel-root.Mui-focused": { color: focusedInputColor },
            "& .MuiOutlinedInput-root": {
              "& > fieldset": { borderColor: borderColor },
            },
            "& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {
                borderColor: focusedBorderColor,
              },
            },
            input: { color: inputColor },
            label: { color: labelColor },
          }}
          onChange={searchBarChanged}
        />
      </Grid>
    </Grid>
  );
};

SearchBar.defaultProps = {
  setSearchValue: () => {},
  borderColor: "",
  inputColor: "",
  labelColor: "",
  focusedBorderColor: "",
  focusedInputColor: "",
  textValue: "",
};

SearchBar.propTypes = {
  setSearchValue: PropTypes.func,
  borderColor: PropTypes.string,
  inputColor: PropTypes.string,
  labelColor: PropTypes.string,
  focusedBorderColor: PropTypes.string,
  focusedInputColor: PropTypes.string,
  textValue: PropTypes.string,
};
export default SearchBar;
