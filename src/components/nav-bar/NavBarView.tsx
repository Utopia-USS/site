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
import AccountCircle from "@material-ui/icons/AccountCircle";
import Grid from '@material-ui/core/Grid/Grid';
import Button from '@material-ui/core/Button/Button';
import { FullscreenExit } from '@material-ui/icons';
import NavBarMobileMenu from './NavBarMobileMenu';
import SexiDotAnime from '../miscelanous/sexi-dot-anime/SexiDotAnime';
import NavBarLayer from './NavBarLayer';
import NavBarMenu from './NavBarMenu';
import NavBarCenterColumn from './NavBarCenterColumn';

interface Props {
  //children?: React.ReactElement;
  vericalTranslatePx: number;
  height: number;
  maxHeight: number;
  onMobileMenuIconClicked: (event: React.MouseEvent) => void;
  mobileMenuAnchorEl?: Element;
  onMobileMenuClose: () => void;
}

export default function NavBarView(props: Props) {

  const { vericalTranslatePx, height, maxHeight, onMobileMenuIconClicked, mobileMenuAnchorEl, onMobileMenuClose } = props;

  console.log(height);

  const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1
    },
    appBar: {
      transform: `translate3d(0,${vericalTranslatePx}px,0)`,
      overflowAnchor: "none",
      backgroundColor: "white",
      boxShadow: `inset 0 -2px 3px ${theme.palette.secondary.main}`,
    },
    toolbar: {
      height: height,
      padding: 0,
      margin: 1,
    },
    distanceBar: {
      height: maxHeight,
    },
    logoBox: {
      //alignSelf: "center",
      width:  "75%",
      //maxWidth: 300,
      height: Math.min(navBarSettings.minBarLogoRatio * height, navBarSettings.logoMaxHeight(maxHeight)),
      marginLeft: theme.spacing(3),
      position: "relative",
      top: navBarSettings.minHeightPx * (1 - navBarSettings.minBarLogoRatio) / 2,
      backgroundImage: `url(${Logo})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left center",
    },
    flexLayer: {
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "row",
    },
    flexCenterLayer: {
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center", /* align vertical */
    },
    flexRightColumnLayer: {
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
    },
    noPointerEvents : {
      pointerEvents: "none",
    },
  }));

  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar color="secondary" className={ `${classes.appBar}` } elevation={0} position="fixed">
        <Toolbar className={classes.toolbar}>
          <NavBarLayer zIndex={200} className={classes.flexCenterLayer}>
            <SexiDotAnime/>
          </NavBarLayer>
          <NavBarLayer zIndex={201} className={`${classes.flexLayer} ${classes.noPointerEvents}`}>
            <div className={classes.logoBox}/>
          </NavBarLayer>
          <NavBarLayer zIndex={202} className={`${classes.flexRightColumnLayer} ${classes.noPointerEvents}`}>
            <NavBarMenu onMobileMenuIconClicked={onMobileMenuIconClicked}/>
          </NavBarLayer>
          <NavBarLayer zIndex={203} className={`${classes.flexCenterLayer} ${classes.noPointerEvents}`}>
            <NavBarCenterColumn height={height} heightMax={maxHeight}/>
          </NavBarLayer>
        </Toolbar>
      </AppBar>
      <div className={ `${classes.appBar}` }></div>
      <Toolbar className={classes.distanceBar}/>
      <NavBarMobileMenu onClose={onMobileMenuClose} mobileMenuAnchorEl={mobileMenuAnchorEl} />
    </React.Fragment>
  );
}