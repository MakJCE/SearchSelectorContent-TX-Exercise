import { makeStyles } from "@material-ui/core/styles";
import Album from "../Album/Album";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding:"0 10%",
  },
  results:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: "wrap",
    gap:"30px"
  }
});

const AlbumsList = ({ searchResultsList }) => {
  const classes = useStyles();
  const { result, resultCount, resultLabel } = searchResultsList;
  return (
    <div className={classes.root}>
      <Typography className={classes.resultCount} color="textPrimary">
        {resultCount} matches found
      </Typography>
      <section className={classes.results}>
        {resultCount ? (
          result.map((track, key) => {
            return <Album key={key} albumData={track}></Album>;
          })
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
