import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Typography,
} from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    height: 460,
    overflowY: "auto",
    position: "relative",
  },
  media: {
    height: 140,
  },
  priceChip: {
    position: "absolute",
    right: "10px",
    top: "10px",
    border:"2px solid #FD7014",
  },
}));

const Album = ({ albumData }) => {
  const classes = useStyles();
  const defaultCoverTrack =
    "https://upload.wikimedia.org/wikipedia/commons/3/3c/No-album-art.png";
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={
              albumData.artworkUrl100 ??
              albumData.artworkUrl60 ??
              albumData.artworkUrl30 ??
              defaultCoverTrack
            }
            title="Album Cover"
          />
          <CardContent>
            <Chip label={`${albumData.collectionPrice} $`} className={classes.priceChip} color="secondary"/>
            <Typography id="track-name" gutterBottom variant="h2">
              {albumData.trackName ?? "No track name"}
            </Typography>
            <Typography id="artist-name" gutterBottom variant="h3">
              by {albumData.artistName ?? "No artist name"}
            </Typography>
            <Typography id="track-kind" variant="body2" color="textSecondary" component="p">
              {albumData.kind ?? "No track type"}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton
            disabled={!Boolean(albumData.previewUrl)}
            aria-label="download preview"
            onClick={() => {
              window.open(albumData.previewUrl);
            }}
            title="Download preview"
          >
            <GetAppIcon />
          </IconButton>
          <IconButton
            disabled={!Boolean(albumData.trackViewUrl)}
            aria-label="go to track"
            onClick={() => {
              window.open(albumData.trackViewUrl);
            }}
            title="Track details"
          >
            <ExitToAppIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Album;
