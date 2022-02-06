import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Album from "../Album/Album";
import { Typography } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles({
  root: {
    padding: "0 10%",
  },
  results: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
    flexWrap: "wrap",
    gap: "30px",
  },
});

const AlbumsList = ({ searchResultsList }) => {
  const classes = useStyles();
  const { result, resultCount, resultLabel } = searchResultsList;
  const [page, setPage] = React.useState(1);
  return (
    <div className={classes.root}>
      <Typography
        id="result-count-label"
        className={classes.resultCount}
        color="textPrimary"
      >
        {resultCount} matches found
      </Typography>
      <section>
        {resultCount ? (
          <div>
            <Pagination
              count={Math.floor(resultCount/10)+1}
              page={page}
              onChange={(event, value) => setPage(value)}
            />
            <div className={classes.results}>
              {result
                .slice(
                  (page - 1) * 10,
                  page * 10 < resultCount ? page * 10 : resultCount
                )
                .map((track, key) => {
                  return <Album key={key} albumData={track}></Album>;
                })}
            </div>
          </div>
        ) : (
          <Typography className={classes.resultLabel} color="textPrimary">
            {resultLabel}
          </Typography>
        )}
      </section>
    </div>
  );
};

export default AlbumsList;
