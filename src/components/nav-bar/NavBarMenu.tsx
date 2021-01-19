import { Button, ButtonGroup, IconButton, makeStyles } from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreVert";
import React, { FC, useState } from "react";
import Translate, { useLang } from "../miscelanous/Translate";
import LangMenu from "./LangMenu";
import { navBarSettings } from "./NavBarSettings";

interface Props {
  onMobileMenuIconClicked: (event: React.MouseEvent) => void,
  onLangButtonClicked: (event: React.MouseEvent) => void,
}

const NavBarMenu = (props: Props) => {


  const useStyles = makeStyles((theme) => ({
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
    },
    buttonBox: {
      paddingTop: navBarSettings.minHeightPx / 2 - 20,
      pointerEvents: "auto",
    },
    menuItem: {
      textTransform: "uppercase",
      color: theme.palette.primary.dark,
    },
    langButt: {

    }
  }));

  const classes = useStyles();

  const lang = useLang();

  return (
    <>
      <div className={`${classes.sectionDesktop} ${classes.buttonBox}`}>
        <ButtonGroup variant="text" color="primary" aria-label="navigate to">
        <Button
          aria-label="show language menu"
          aria-controls={navBarSettings.languageMenuId}
          aria-haspopup="true"
          onClick={props.onLangButtonClicked}
          className={classes.menuItem}
        >
          {lang}
        </Button>
          {navBarSettings.menuItems()
            .map((e) => (
              <Button
                onClick={(_) => e.scrollToRef.current?.scrollIntoView()}
                className={classes.menuItem}
                key={e.label.en}>
                <Translate trans={e.label}/>
              </Button>
            ))}
        </ButtonGroup>
      </div>
      <div className={`${classes.sectionMobile} ${classes.buttonBox}`}>
        <IconButton
          aria-label="show language menu"
          aria-controls={navBarSettings.languageMenuId}
          aria-haspopup="true"
          onClick={props.onLangButtonClicked}
          className={classes.menuItem}
        >
          {lang}
        </IconButton>
        <IconButton
          aria-label="show menu"
          aria-controls={navBarSettings.mobileMenuId}
          aria-haspopup="true"
          onClick={props.onMobileMenuIconClicked}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </div>
    </>
  )
}

export default NavBarMenu;