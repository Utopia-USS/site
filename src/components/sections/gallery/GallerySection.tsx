import { Card, CardContent, CardMedia, createStyles, Fade, Grid, makeStyles, Typography } from "@material-ui/core";
import { min } from "lodash";
import React, { useEffect, useState } from "react";
import sleep from "../../../utils/sleep";
import GrowOnDisplayed from "../../miscelanous/GrowOnDisplayed";
import SectionTitle from "../components/SectionTitle";
import offerSectionSettings from "../offer/OfferSectionSettings";
import SectionBox from "../SectionBox";
import { sectionsSettings } from "../SectionsSettings";
import GallerySelectDots from "./GallerySelectDots";
import gallerySettings from "./GallerySettings";

interface Props {}

const minHeight = 450;
const maxWidth = 900;
const fadeTime = 300;
const borderRadius = 10;
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const GallerySection = (props: Props) => {
    // Fade in / out
    const [fadeIn, setFadeIn] = useState(true);

  // Gallery item selection
  const [galleryItem, setGalleryItem] = useState(0);
  const numberOfItems = gallerySettings.items.length;
  const item = gallerySettings.items[galleryItem];
  const {title, description, media} = item;
    /*   Can take negative number or greater then items length, 
  so you can change by 1 in any direction and get the 
  expected result. */
  const onItemChange: (itemNum: number) => void = (itemNum) => {
    const modulo = itemNum % numberOfItems;
    const itemIndex = modulo >= 0 ? modulo : numberOfItems - modulo;
    setFadeIn(false);
    sleep(fadeTime).then((_) => {
      setGalleryItem(itemIndex);
      setFadeIn(true);
    });
  }


  // Updating window dimension info
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log(min([minHeight, 0.9 * windowDimensions.width * minHeight / (maxWidth * 7/12)]));
  const useStyles = makeStyles((theme) =>
    createStyles({
      galleryBox: {
        textAlign: "center",
        backgroundColor: "white",
        width: "90%",
        maxWidth: maxWidth,
        minHeight: minHeight,
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: borderRadius,
      },
      title: {
        fontFamily: "gabriola",
        fontSize: "30px",
        textTransform: "lowercase",
        verticalAlign: "middle",
      },
      mediaBox: {
        backgroundImage: `url("${media}")`,
        backgroundSize: "contain",
        backgroundRepeat: 'no-repeat',
        flexGrow: 1,
        backgroundPosition: "center",
        width: "100%",
        minHeight: min([minHeight, 0.9 * windowDimensions.width * minHeight / (maxWidth * 7/12)]),
        borderRadius: `0 ${borderRadius}px ${borderRadius}px 0`,
        [theme.breakpoints.down("md")]: {
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
      },
    })
  );

  const classes = useStyles();

  return (
    <SectionBox sectionId="gallery-section">
      <GrowOnDisplayed>
        
          <Grid container spacing={0} justify="center" alignItems="stretch" className={classes.galleryBox}>
            <Grid item xs={12} md={5}>
              <div className={classes.nonMediaBox}>
                <Fade in={fadeIn} timeout={fadeTime}>
                  <div className={classes.textBox}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                      {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {description}
                    </Typography>
                  </div>
                </Fade>
                <div className="stepperBox">
                  <GallerySelectDots dotNumber={numberOfItems} selected={galleryItem} onChecked={onItemChange}/>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={7}>
              <Fade in={fadeIn} timeout={fadeTime}>
                <div className={classes.mediaBox}/>
              </Fade>
            </Grid>
          </Grid>
      </GrowOnDisplayed>
    </SectionBox>
  );
};

export default GallerySection;
