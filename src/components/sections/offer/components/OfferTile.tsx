import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React, { FC } from "react";
import Translate, { Translatable } from "../../../miscelanous/Translate";

interface Props {
  title: Translatable,
  description: Translatable,
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
    maxWidth: 320,
    border: `1px solid ${theme.palette.secondary.main}`,
    textAlign: "center",
    height: "100%",
    overflow: "hidden",
  },
  title: {
    fontFamily: "gabriola",
    fontSize: "30px",
   // textTransform: "lowercase",
  },
  noHover: {
    pointerEvents: "none",
  }
}));

const OfferTile : FC<Props> = (props) => {
  const {title, description, image, imageAlt} = props;
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.root}>
      <CardActionArea className={classes.noHover}>
        <CardMedia
          component="img"
          alt={imageAlt}
          image={image}
          title={imageAlt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            <Translate trans={title}/>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <Translate trans={description}/>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
/*     <div id={`offer-tile-${title}`} className={classes.mainColumn}>

    </div>  */
  );
};

export default OfferTile;