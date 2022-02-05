import React, { useState } from "react";
import SearchingSection from "../Searching/SearchingSection/SearchingSection";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop:"5%"
  }
}));

const IndexPage = () => {
  const classes = useStyles();
  const [searchedAlbum, setSearchedAlbum] = useState({artist:"", type:""});
  return (
    <div className={classes.root}>
      <SearchingSection setSearchedAlbum={setSearchedAlbum}></SearchingSection>
      <div>
        {`${searchedAlbum.artist} ${searchedAlbum.type}`}
      </div>
    </div>
  );
};

export default IndexPage;
