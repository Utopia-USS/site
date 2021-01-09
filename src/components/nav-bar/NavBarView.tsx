import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { appThemeInstance } from '../../AppTheme';
import { makeStyles } from '@material-ui/core/styles';
import { navBarSettings } from './NavBarSettings';
import { Box, ButtonGroup, Container } from '@material-ui/core';
import Logo from '../../assets/img/utopia_big.png';
import LogoThin from '../../assets/img/utopia_thin.png';
import LogoMobile from '../../assets/img/utopia_vertical.png';
import Paper from '@material-ui/core/Paper/Paper';
import { relative } from 'path';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Badge from '@material-ui/core/Badge/Badge';
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Grid from '@material-ui/core/Grid/Grid';
import Button from '@material-ui/core/Button/Button';
import { FullscreenExit } from '@material-ui/icons';
import NavBarMobileMenu from './NavBarMobileMenu';

interface Props {
  //children?: React.ReactElement;
  vericalTranslatePx: number;
  height: number;
  onMobileMenuIconClicked: (event: React.MouseEvent) => void;
  mobileMenuAnchorEl?: Element;
  onMobileMenuClose: () => void;
}

export default function NavBarView(props: Props) {

  const { vericalTranslatePx, height, onMobileMenuIconClicked, mobileMenuAnchorEl, onMobileMenuClose } = props;

  const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1
    },
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
    appBar: {
      transform: `translate3d(0,${vericalTranslatePx}px,0)`,
      overflowAnchor: "none",
      backgroundColor: "white",
      boxShadow: "inset 0 -1px 1px rgba(0,0,0,0.5)",
    },
    toolbar: {
      height: height,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center", /* align vertical */
      padding: "0 5vw 0 5vw",
    },
    distanceBar: {
      height: navBarSettings.maxHeightPx,
    },
    logoBox: {
      backgroundImage: `url(${height > navBarSettings.logoBreakpoint ? Logo : LogoThin})`,
      // [theme.breakpoints.down("sm")]: {
      //   backgroundImage: `url(${height > navBarSettings.logoBreakpoint ? LogoMobile : LogoThin})`,
      // },
      backgroundSize: "contain",
      backgroundRepeat: 'no-repeat',
      marginRight: theme.spacing(4),
      flexGrow: 1,
      backgroundPosition: "left center",
    },
    buttonBox: {
      alignSelf: "flex-start",
      paddingTop: navBarSettings.minHeightPx / 2 - 20,
    },
    menuItem: {
      textTransform: "uppercase",
      color: theme.palette.primary.dark,
    },
  }));

  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar color="secondary" className={ `${classes.appBar}` } elevation={0} position="fixed">
        <Toolbar className={classes.toolbar}>
          <Box className={ classes.logoBox } height={height*0.7} />
          <div className={ `${classes.sectionDesktop} ${classes.buttonBox}` }>
          <ButtonGroup variant="text" color="primary" aria-label="navigate to">
            { 
              navBarSettings.menuItems()
                .map((e) => (
                  <Button 
                  onClick={(_) => e.scrollToRef.current?.scrollIntoView()}
                  className={classes.menuItem} 
                  key={e.label}>
                    {e.label}
                  </Button>
              ))
            }
          </ButtonGroup>
          </div>
          <div className={ `${classes.sectionMobile} ${classes.buttonBox}`  }>
            <IconButton
                aria-label="show menu"
                aria-controls={navBarSettings.mobileMenuId}
                aria-haspopup="true"
                onClick={onMobileMenuIconClicked}
                color="inherit"
              >
                <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <div className={ `${classes.appBar}` }></div>
      <Toolbar className={classes.distanceBar}/>
      <NavBarMobileMenu onClose={onMobileMenuClose} mobileMenuAnchorEl={mobileMenuAnchorEl} />
    </React.Fragment>
  );
}