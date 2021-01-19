import { createStyles, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import GrowOnDisplayed from "../../miscelanous/GrowOnDisplayed";
import Translate from "../../miscelanous/Translate";
import SectionBox from "../SectionBox";
import aboutUsSectionSettings from "./AboutUsSectionSettings";

interface Props {}

const minHeight = 450;
const maxWidth = 900;

const GallerySection = (props: Props) => {

  const {image, imageAlt, description} = aboutUsSectionSettings;

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
        display: "block",
        // backgroundImage: `url("${image}")`,
        // backgroundSize: "contain",
        //backgroundSize: "background-size: auto 100%",
        backgroundRepeat: 'no-repeat',
        flexGrow: 1,
        backgroundPosition: "center",
        height: "60vmin",
        maxHeight: 400,
        margin: "auto",
        marginBottom: theme.spacing(2),
      },
      nonMediaBox: {
        flexDirection: "column",
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        minHeight: minHeight,
        padding: `0px ${theme.spacing(2)}px`,
      },
      textBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
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
              <img 
              src={image} 
              className={classes.mediaBox}
              alt={imageAlt}
              />
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.nonMediaBox}>
              <div className={classes.textBox}>
                <Typography variant="body2" color="textSecondary" align="justify" component="p">
                  <Translate trans={description}/>
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
