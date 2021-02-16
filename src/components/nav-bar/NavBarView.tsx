import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import Logo from '../../assets/img/utopia_big.png';
import SexiDotAnime from '../miscelanous/sexi-dot-anime/SexiDotAnime';
import { Lang } from '../miscelanous/Translate';
import LangMenu from './LangMenu';
import NavBarCenterColumn from './NavBarCenterColumn';
import NavBarLayer from './NavBarLayer';
import NavBarMenu from './NavBarMenu';
import NavBarMobileMenu from './NavBarMobileMenu';
import { navBarSettings } from './NavBarSettings';

interface Props {
  //children?: React.ReactElement;
  vericalTranslatePx: number;
  height: number;
  maxHeight: number;
  onMobileMenuIconClicked: (event: React.MouseEvent) => void;
  mobileMenuAnchorEl?: Element;
  onMobileMenuClose: () => void;
  onLangButtonClicked: (event: React.MouseEvent) => void;
  langMenuAnchorEl?: Element;
  onLangMenuClose: () => void;
  lang: Lang;
  distanceBarHeight: number;
}

export default function NavBarView(props: Props) {

  const { 
    vericalTranslatePx, 
    height, 
    maxHeight, 
    onMobileMenuIconClicked, 
    mobileMenuAnchorEl, 
    onMobileMenuClose,
    onLangButtonClicked,
    langMenuAnchorEl,
    onLangMenuClose,
    lang,
    distanceBarHeight,
   } = props;

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
      minHeight: height,
      height: height,
      padding: 0,
      margin:0,
    },
    distanceBar: {
      height: distanceBarHeight,
    },
    logoBox: {
      //alignSelf: "center",
      width:  "75%",
      //maxWidth: 300,
      height: Math.min(navBarSettings.minBarLogoRatio * height, navBarSettings.logoMaxHeight(maxHeight)),
      marginLeft: theme.spacing(3),
      marginRight: 120,
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
      overflow: "hidden",
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
            <NavBarMenu 
            onMobileMenuIconClicked={onMobileMenuIconClicked} 
            onLangButtonClicked={onLangButtonClicked}
            />
          </NavBarLayer>
          <NavBarLayer zIndex={203} className={`${classes.flexCenterLayer} ${classes.noPointerEvents}`}>
            <NavBarCenterColumn height={height} heightMax={maxHeight}/>
          </NavBarLayer>
        </Toolbar>
      </AppBar>
      <div className={ `${classes.appBar}` }></div>
      <Toolbar className={classes.distanceBar}/>
      <NavBarMobileMenu onClose={onMobileMenuClose} mobileMenuAnchorEl={mobileMenuAnchorEl} />
      <LangMenu 
      onClose={onLangMenuClose} 
      langMenuAnchorEl={langMenuAnchorEl} 
      lang={lang}
      />
    </React.Fragment>
  );
}