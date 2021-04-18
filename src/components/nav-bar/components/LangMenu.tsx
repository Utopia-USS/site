import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import { allLangs, changeLanguage, Lang } from '../../miscelanous/Translate';
import { navBarSettings } from '../NavBarSettings';

interface Props {
  langMenuAnchorEl?: Element;
  onClose: () => void;
  lang: Lang,
};

const useStyles = makeStyles((theme) => ({
  menuItem: {
    textTransform: "uppercase",
  },
}));

const LangMenu = (props: Props) => {
    const classes = useStyles();
    //https://codesandbox.io/s/material-ui-navbar-responsive-lf30l?file=/src/components/Toolbar/Toolbar.js:3359-4693
    const languageMenuId = navBarSettings.languageMenuId;
    const isLangMenuOpen = Boolean(props.langMenuAnchorEl);

    const onItemClick = (lang: Lang) => {
      changeLanguage(lang);
      props.onClose();
    }

    return (
      <Menu
        anchorEl={props.langMenuAnchorEl}
        id={languageMenuId}
        keepMounted
        open={isLangMenuOpen}
        onClose={props.onClose}
        elevation={1}
      >
        {
          allLangs.filter((e) => e !== props.lang)
            .map((e) => (
              <MenuItem 
              onClick={(_) => onItemClick(e)}
              className={classes.menuItem} 
              key={'language-' + e}>
                <p>{e}</p>
              </MenuItem>
            ))
        }
      </Menu>
    )
};

export default LangMenu;
