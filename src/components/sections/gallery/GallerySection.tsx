import { createStyles, Fade, Grid, makeStyles, Typography } from "@material-ui/core";
import { min } from "lodash";
import React from "react";
import GrowOnDisplayed from "../../miscelanous/GrowOnDisplayed";
import Translate from "../../miscelanous/Translate";
import SectionBox from "../components/SectionBox";
import GallerySelectDots from "./components/GallerySelectDots";
import gallerySettings from "./GallerySettings";
import useGallerySection from "./hooks/useGallerySection";

interface Props {}

const GallerySection = (props: Props) => {

  const {
    minHeight, 
    maxWidth, 
    borderRadius, 
    fadeTime,
  } = gallerySettings;

  const {
    windowDimensions, 
    fadeIn, 
    numberOfItems, 
    galleryItem, 
    item, 
    onItemChange,
  } = useGallerySection();

  const {
    title, 
    description, 
    media, 
    imageAlt,
  } = item;

  const useStyles = makeStyles((theme) =>
    createStyles({
      galleryBox: {
        textAlign: "center",
        backgroundColor: "white",
        width: "90%",
        minHeight: minHeight,
        maxWidth: maxWidth,
        height: minHeight,
        [theme.breakpoints.down("sm")]: {
          height: "auto",
        },
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: borderRadius,
        border: `1px solid ${theme.palette.secondary.main}`,
        overflow: "hidden",
      },
      title: {
        fontFamily: "gabriola",
        fontSize: "30px",
        //textTransform: "lowercase",
        verticalAlign: "middle",
      },
      mediaBox: {
        // backgroundImage: `url("${media}")`,
        // backgroundSize: "contain",
        // backgroundRepeat: 'no-repeat',
        display: "block",
        flexGrow: 1,
        backgroundPosition: "center",
        width: "100%",
        minHeight: min([
          minHeight, 
          0.9 * windowDimensions.width * minHeight / (maxWidth * 7/12)
        ]),
        borderRadius: `0 ${borderRadius}px ${borderRadius}px 0`,
        [theme.breakpoints.down("sm")]: {
          borderRadius: `0 0 ${borderRadius}px ${borderRadius}px`,
        }
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
        fontWeight: "lighter",
      },
      stepperBoxDesktop: {
        display: "flex",
        justifyContent: "center",
        margin: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
          display: "none",
        }
      },
      stepperBoxMobile: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
          display: "block",
        }
      }
    })
  );

  const classes = useStyles();

  return (
    <SectionBox sectionId="gallery-section">
      <GrowOnDisplayed>
          <Grid 
          container 
          spacing={0} 
          justify="center" 
          alignItems="stretch" 
          className={classes.galleryBox}
          >
            <Grid item xs={12} md={5}>
              <div className={classes.nonMediaBox}>
                <Fade in={fadeIn} timeout={fadeTime}>
                  <div className={classes.textBox}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                      {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      <Translate trans={description}/>
                    </Typography>
                  </div>
                </Fade>
                <div className={classes.stepperBoxMobile}>
                  <GallerySelectDots 
                  dotNumber={numberOfItems} 
                  selected={galleryItem} 
                  onChecked={onItemChange}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={7}>
              <Fade in={fadeIn} timeout={fadeTime}>
                <img src={media} className={classes.mediaBox} alt={imageAlt}/>
              </Fade>
            </Grid>
          </Grid>
          <div className={classes.stepperBoxDesktop}>
            <GallerySelectDots 
            dotNumber={numberOfItems} 
            selected={galleryItem} 
            onChecked={onItemChange}
            />
          </div>
      </GrowOnDisplayed>
    </SectionBox>
  );
};

export default GallerySection;
