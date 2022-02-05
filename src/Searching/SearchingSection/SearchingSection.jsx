import React, { useState } from "react";
import SearchField from "../SearchField/SearchField";
import MediaTypeDropdown from "../MediaTypeDropdown/MediaTypeDropdown";
import { makeStyles } from "@material-ui/core/styles";
import ActionButton from "../../Shared/ActionButton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
  },
}));

const SearchingSection = ({ setSearchedAlbum }) => {
  const [fieldValue, setFieldValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SearchField
        fieldValue={fieldValue}
        setFieldValue={setFieldValue}
      ></SearchField>
      <MediaTypeDropdown
        selectValue={selectValue}
        setSelectValue={setSelectValue}
      ></MediaTypeDropdown>
      <ActionButton
        label={"Search"}
        action={() => {
          setSearchedAlbum({ artist: fieldValue, type: selectValue });
        }}
      ></ActionButton>
    </div>
  );
};

export default SearchingSection;
