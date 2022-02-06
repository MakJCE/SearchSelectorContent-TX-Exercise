import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  field:{
    minWidth: "400px"
  }
}));

const SearchField = ({ fieldValue, setFieldValue, errorField }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TextField
        error={errorField}
        id="artists-search-field"
        label="Artist Name"
        variant="outlined"
        color="primary"
        onChange={(event) => setFieldValue(event.target.value)}
        className={classes.field}
        helperText={(errorField)?"Incorrect entry.":""}
      />
    </div>
  );
};

export default SearchField;
