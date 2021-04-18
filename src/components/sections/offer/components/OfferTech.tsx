import { Grid, makeStyles, Tooltip, Typography, withStyles } from "@material-ui/core";
import React, { FC } from "react";
import GrowOnDisplayed from "../../../miscelanous/GrowOnDisplayed";
import Translate from "../../../miscelanous/Translate";
import offerSectionSettings from "../OfferSectionSettings";

interface Props {}
interface TechIconProps {}

const TechIcon : FC<TechIconProps> = (props) => { 
  const useStyles = makeStyles((theme) => ({
    root: {
      width: 70,
      height: 70,
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.palette.secondary.dark,
      transition: "0.2s",
      "& path": {
        fill: theme.palette.primary.dark,
        stroke: theme.palette.primary.dark,
        transition: "0.2s",
      },
      "& > *": {
        height: "50%",
        width: "50%",
        display: "block",
      },
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
        "& path": {
          fill: theme.palette.secondary.dark,
          stroke: theme.palette.secondary.dark,
        },
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {
        props.children
      }
    </div>
  )
}

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.primary.light,
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: `1px solid ${theme.palette.primary.dark}`,
  },
}))(Tooltip);

const OfferTech = (props: Props) => {
  const {techs} = offerSectionSettings;

  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: theme.spacing(3),
    },
    gridItem: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  return (
    <GrowOnDisplayed>
      <Grid container spacing={0} justify="center" alignItems="stretch" className={classes.root}>
            
        {
          techs.map((e) => 
            <Grid item xs={3} sm={2} md={1} className={classes.gridItem} key={e.name + "offertech"}>
              <HtmlTooltip
                enterTouchDelay={10}
                leaveTouchDelay={500}
                title={
                  <div>
                    <Typography color="inherit">
                      {e.name}
                    </Typography>
                    <Translate trans={e.description}/>
                  </div>
                }
              >
                <div>
                  <TechIcon>
                    <e.icon/>
                  </TechIcon>
                </div>
              </HtmlTooltip>
            </Grid>
          )
        }
            
      </Grid>
    </GrowOnDisplayed>
  );
};

export default OfferTech;