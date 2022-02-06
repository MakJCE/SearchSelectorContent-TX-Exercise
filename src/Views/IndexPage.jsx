import React, { useState } from "react";
import SearchingSection from "../Searching/SearchingSection/SearchingSection";
import { makeStyles } from "@material-ui/core/styles";
import AlbumsList from "../Albums/AlbumsList/AlbumsList";

const useStyles = makeStyles((theme) => ({
  root:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop:"5%",
    gap: "40px"
  }
}));

const IndexPage = () => {
  const classes = useStyles();
  const [searchResultsList, setSearchResultsList] = useState({
    results: [],
    resultCount: 0,
    resultLabel: "",
  });
  return (
    <div className={classes.root}>
      <SearchingSection searchResultsList={searchResultsList} setSearchResultsList={setSearchResultsList}></SearchingSection>
      <AlbumsList searchResultsList={searchResultsList}></AlbumsList>
    </div>
  );
};

export default IndexPage;
