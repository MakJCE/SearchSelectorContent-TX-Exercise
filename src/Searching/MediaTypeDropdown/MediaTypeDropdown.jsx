import React from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import typesList from "./typesList";

const camelCaseToSentence = (text) => {
  var result = text.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
};

const MediaTypeDropdown = ({ selectValue, setSelectValue }) => {
  return (
    <div>
      <FormControl variant="outlined" style={{ minWidth: "120px" }}>
        <InputLabel id="demo-simple-select-outlined-label">Media </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={selectValue}
          onChange={(event) => setSelectValue(event.target.value)}
          label="Age"
          style={{ padding: "0 10px 0 0" }}
          color="primary"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {typesList.map((type, key) => {
            return (
              <MenuItem key={key} value={type}>
                {camelCaseToSentence(type)}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default MediaTypeDropdown;
