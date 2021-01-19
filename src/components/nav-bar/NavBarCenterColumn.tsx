import { Button, makeStyles } from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React from "react";
import hexToRGBa from "../../utils/hexToRgba";
import Translate from "../miscelanous/Translate";
import { navBarSettings } from "./NavBarSettings";

interface Props {
  height: number,
  heightMax: number,
}

const NavBarCenterColumn = (props: Props) => {
  const {height, heightMax} = props;

  const useStyles = makeStyles((theme) => ({
    root: {
      textAlign: "center",
      fontSize: "8vmin",
      fontWeight: "bold",
      opacity: 1 - Math.min(1, (heightMax - height) / navBarSettings.centerColumnFadeOutPath),
      padding: "5vw",
      backgroundColor: hexToRGBa(theme.palette.secondary.light, "0.3"),
      borderRadius: "2vw",
    },
    button: {
      fontSize: "3vmin",
      pointerEvents: "auto",
      fontWeight: "bold",
      margin: theme.spacing(3),
      "&:hover" : {
        backgroundColor: theme.palette.primary.light,
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        Your Ultimate Software Provider
      </div>
      <Button
      variant="contained"
      color="primary"
      className={classes.button}
      endIcon={<ArrowForwardIosIcon/>}
      onClick={(_) => navBarSettings
        .menuItems()
        .find((e) => e.label.en.toLowerCase() === "contact" )
        ?.scrollToRef.current
        ?.scrollIntoView()}
      disableElevation
      >
      <Translate trans={{
        en: "Contact us",
        pl: "Skontakuj się",
        de: "Kontaktiere uns",
      }}/>
      </Button>
    </div>
  )
}

export default NavBarCenterColumn;