import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import { FC } from "react";

interface Props {
  title: string,
  description: string,
  image: string,
  imageAlt: string
};

const useStyles = makeStyles((theme) => ({
  mainColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  root: {
    maxWidth: 345,
    border: "none",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    fontFamily: "gabriola",
    fontSize: "30px",
    textTransform: "lowercase",
  }
}));

const OfferTile : FC<Props> = (props) => {
  const {title, description, image, imageAlt} = props;
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.root} style={{ height: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={imageAlt}
          height="140"
          image={image}
          title={imageAlt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
/*     <div id={`offer-tile-${title}`} className={classes.mainColumn}>

    </div>  */
  );
};

export default OfferTile;