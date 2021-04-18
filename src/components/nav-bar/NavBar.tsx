import React from "react";
import { isMobile } from "react-device-detect";
import { navBarSettings } from "./NavBarSettings";
import NavBarView from "./components/NavBarView";
import useNavBar from "./hooks/useNavBar";

interface Props {}

export function NavBar(props: Props) {

  const {
    state, 
    lang, 
    onMobileMenuIconClicked, 
    onMobileMenuClosed, 
    onLangButtonClicked, 
    onLangMenuClosed
  } = useNavBar();

  const {vericalTranslatePx, heightPx, maxHeight} = state;
  return (
    <NavBarView 
    vericalTranslatePx={isMobile ? 0 : vericalTranslatePx} 
    height={isMobile ? navBarSettings.mobileHeight : heightPx}
    maxHeight={maxHeight}
    distanceBarHeight={isMobile ? navBarSettings.mobileHeight : maxHeight}
    onMobileMenuIconClicked={onMobileMenuIconClicked}
    mobileMenuAnchorEl={state.mobileMenuAnchorEl}
    onMobileMenuClose={onMobileMenuClosed}
    onLangButtonClicked={onLangButtonClicked}
    langMenuAnchorEl={state.langMenuAnchorEl}
    onLangMenuClose={onLangMenuClosed}
    lang={lang}
    />
  );
  
}