import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import { navBarSettings } from './NavBarSettings';

interface Props {
  mobileMenuAnchorEl?: Element;
  onClose: () => void;
};

const useStyles = makeStyles((theme) => ({
  menuItem: {
    textTransform: "capitalize",
  },
}));

const NavBarMobileMenu = (props: Props) => {
    const classes = useStyles();
    //https://codesandbox.io/s/material-ui-navbar-responsive-lf30l?file=/src/components/Toolbar/Toolbar.js:3359-4693
    const mobileMenuId = navBarSettings.mobileMenuId;
    const isMobileMenuOpen = Boolean(props.mobileMenuAnchorEl);

    const onItemClick = (item: HTMLElement | null) => {
      item?.scrollIntoView();
      props.onClose();
    }

    return (
      <Menu
        anchorEl={props.mobileMenuAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={props.onClose}
        elevation={1}
      >
        {
          navBarSettings.menuItems().map((e) => (
            <MenuItem 
            onClick={(_) => onItemClick(e.scrollToRef.current)}
            className={classes.menuItem} 
            key={e.label}>
              <p>{e.label}</p>
            </MenuItem>
          ))
        }
      </Menu>
    )
};

export default NavBarMobileMenu;
