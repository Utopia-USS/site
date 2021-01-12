import { Card, CardContent, CardMedia, createStyles, Fade, Grid, makeStyles, Typography } from "@material-ui/core";
import { min } from "lodash";
import React, { useEffect, useState } from "react";
import { getWindowDimensions } from "../../../utils/getWindowDimensions";
import useWindowDimensions from "../../../utils/hooks/useWindowDimensions";
import sleep from "../../../utils/sleep";
import GrowOnDisplayed from "../../miscelanous/GrowOnDisplayed";
import SectionTitle from "../SectionTitle";
import offerSectionSettings from "../offer/OfferSectionSettings";
import SectionBox from "../SectionBox";
import { sectionsSettings } from "../SectionsSettings";
import aboutUsSectionSettings from "./AboutUsSectionSettings";

interface Props {}

const minHeight = 450;
const maxWidth = 900;

const GallerySection = (props: Props) => {

  const {image, description} = aboutUsSectionSettings;

  // Updating window dimension info
  const windowDimensions = useWindowDimensions();

  const useStyles = makeStyles((theme) =>
    createStyles({
      galleryBox: {
        textAlign: "center",
        width: "90%",
        maxWidth: maxWidth,
        minHeight: minHeight,
        marginLeft: "auto",
        marginRight: "auto",
      },
      title: {
        fontFamily: "gabriola",
        fontSize: "30px",
        textTransform: "lowercase",
        verticalAlign: "middle",
      },
      mediaBox: {
        backgroundImage: `url("${image}")`,
        backgroundSize: "contain",
        //backgroundSize: "background-size: auto 100%",
        backgroundRepeat: 'no-repeat',
        flexGrow: 1,
        backgroundPosition: "center",
        width: "100%",
        minHeight: min([minHeight, 0.9 * windowDimensions.width * minHeight / (maxWidth * 0.5)]),
      },
      nonMediaBox: {
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: minHeight,
        padding: theme.spacing(3),
      },
      textBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        flexGrow: 1,
      },
    })
  );

  const classes = useStyles();

  return (
    <SectionBox sectionId="about-us-section">
      <GrowOnDisplayed>
        <Grid container spacing={0} justify="center" alignItems="stretch" className={classes.galleryBox}>
          <Grid item xs={12} md={6}>
            <div className={classes.mediaBox}/>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.nonMediaBox}>
              <div className={classes.textBox}>
                <Typography variant="body2" color="textSecondary" component="p">
                  {description}
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </GrowOnDisplayed>
    </SectionBox>
  );
};

export default GallerySection;
