import React, { useState } from "react";
import SearchField from "../SearchField/SearchField";
import MediaTypeDropdown from "../MediaTypeDropdown/MediaTypeDropdown";
import { makeStyles } from "@material-ui/core/styles";
import ActionButton from "../../Shared/ActionButton/ActionButton";
import AlbumsListService from "../../Albums/AlbumsList/AlbumsList.service";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "30px",
  },
}));

const SearchingSection = ({ searchResultsList, setSearchResultsList }) => {
  const [fieldValue, setFieldValue] = useState("");
  const [selectValue, setSelectValue] = useState("all");
  const [errorField, setErrorField] = useState(false);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SearchField
        fieldValue={fieldValue}
        setFieldValue={setFieldValue}
        errorField={errorField}
      ></SearchField>
      <MediaTypeDropdown
        selectValue={selectValue}
        setSelectValue={setSelectValue}
      ></MediaTypeDropdown>
      <ActionButton
        label={"Search"}
        action={() => {
          const searchdeAlbum = { artist: fieldValue, kind: selectValue };
          if (fieldValue) {
            AlbumsListService.getSearchigResultsList(
              searchdeAlbum,
              searchResultsList,
              setSearchResultsList
            );
            setErrorField(false);
          } else {
            setErrorField(true);
          }
        }}
      ></ActionButton>
    </div>
  );
};

export default SearchingSection;
