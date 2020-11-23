import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { appThemeInstance } from '../../AppTheme';
import { makeStyles } from '@material-ui/core/styles';
import { navBarSettings } from './NavBarSettings';
import { Box, ButtonGroup, Container } from '@material-ui/core';
import Logo from '../../assets/logo.svg';
import NavBarBack from '../../assets/navbar_back.jpg';
import NavBarMesh from '../../assets/nav_back_mesh.svg';
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
import NavBarMobileMenu from '../mobile-menu/NavBarMobileMenu';
import { isNullOrUndefined } from 'util';

interface Props {
  //children?: React.ReactElement;
  vericalTranslatePx: number;
  height: number;
  onMobileMenuIconClicked: (event: React.MouseEvent) => void;
}

export default function NavBarView(props: Props) {

  const { vericalTranslatePx, height } = props;

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
    backGoundLayerTop: {
      background: `url(${NavBarMesh}) repeat`,
    },
    backGoundLayerBottom: {
      background: `url(${NavBarBack}) no-repeat`,
      backgroundSize: "cover",
      height: height,
      width: "100%",
      position: "fixed",
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
    },
    appBar: {
      transform: `translate3d(0,${vericalTranslatePx}px,0)`,
      overflowAnchor: "none",
    },
    toolbar: {
      height: height,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
    },
    distanceBar: {
      height: navBarSettings.maxHeightPx,
    },
    logoBox: {
      backgroundImage: `url(${Logo})`,
      backgroundSize: "cover",
      backgroundRepeat: 'no-repeat',
      position: "relative",
      marginRight: theme.spacing(4),
    },
    logoAndNameRow: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      alignItems: "center",
    },
    buttonBox: {
      alignSelf: "flex-start",
      paddingTop: navBarSettings.minHeightPx / 2 - 20,
    },
    minorName: {
      color: theme.palette.secondary.light,
    },
    bigNameColumn: {
      flexDirection: "column",
    },
  }));

  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar color="secondary" className={ `${classes.appBar} ${classes.backGoundLayerTop}` } elevation={0} position="fixed">
        <Toolbar className={classes.toolbar}>
          <div>
            <div className={ classes.logoAndNameRow }>
              <Box className={ classes.logoBox } height={height*0.8} width={height*0.8} />
              <div className={ `${classes.sectionDesktop} ${classes.bigNameColumn}`}>
                <Typography variant="h5">UTOPIA</Typography>
                <Typography variant="subtitle1" className={ classes.minorName } >ULTIMATE SOFTWARE SOLUTIONS</Typography>
              </div>
              <Typography variant="h5" className={ classes.sectionMobile }>UTOPIA</Typography>
            </div>
          </div>
          <div className={ `${classes.sectionDesktop} ${classes.buttonBox}` }>
          <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          </div>
          <div className={ `${classes.sectionMobile} ${classes.buttonBox}`  }>
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
        </Toolbar>
      </AppBar>
      <div className={ `${classes.appBar} ${classes.backGoundLayerBottom}` }></div>
      <Toolbar className={classes.distanceBar}/>
      <NavBarMobileMenu>

      </NavBarMobileMenu>
    </React.Fragment>
  );
}