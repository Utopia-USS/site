import { Button, ButtonGroup, IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import { navBarSettings } from "./NavBarSettings";
import MoreIcon from "@material-ui/icons/MoreVert";

interface Props {
  onMobileMenuIconClicked: (event: React.MouseEvent) => void,
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
  }));

  const classes = useStyles();

  return (
    <>
      <div className={`${classes.sectionDesktop} ${classes.buttonBox}`}>
        <ButtonGroup variant="text" color="primary" aria-label="navigate to">
          {navBarSettings.menuItems()
            .map((e) => (
              <Button
                onClick={(_) => e.scrollToRef.current?.scrollIntoView()}
                className={classes.menuItem}
                key={e.label}>
                {e.label}
              </Button>
            ))}
        </ButtonGroup>
      </div>
      <div className={`${classes.sectionMobile} ${classes.buttonBox}`}>
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