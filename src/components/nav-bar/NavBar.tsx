import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { getWindowDimensions } from "../../utils/getWindowDimensions";
import sleep from "../../utils/sleep";
import { useLang } from "../miscelanous/Translate";
import { navBarSettings } from "./NavBarSettings";
import NavBarView from "./NavBarView";

interface Props {}

interface State {
  previousOffset: number;
  vericalTranslatePx: number;
  heightPx: number;
  mobileMenuAnchorEl?: Element;
  langMenuAnchorEl?: Element;
  maxHeight: number;
};

export function NavBar(props: Props) {

  const getMaxHeight = () => getWindowDimensions().height;

  const [state, setState] = useState<State>({
    previousOffset: 0,
    vericalTranslatePx: 0,
    heightPx: getMaxHeight(),
    maxHeight: getMaxHeight(),
  });

  const handleScroll = () => {
    if(isMobile) return;
    const offset = document.documentElement.scrollTop;
    const newState = onScrollOffset(offset, state);
    const setstate = (): void => setState(newState);
    const {delayMs} = navBarSettings;
    delayMs === 0 ? setstate() : delay(delayMs, setstate);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleResize = () => {
    const updatedState = {...state, maxHeight: getMaxHeight()};
    const recalculatedState = onScrollOffset(updatedState.previousOffset, updatedState);
    setState(recalculatedState);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const lang = useLang();

  const onMobileMenuIconClicked = (event: React.MouseEvent) => 
    setState({...state, mobileMenuAnchorEl: event.target as Element});

  const onMobileMenuClosed = () =>
    setState({...state, mobileMenuAnchorEl: undefined});

  const onLangButtonClicked = (event: React.MouseEvent) => 
    setState({...state, langMenuAnchorEl: event.target as Element});

  const onLangMenuClosed = () =>{
    setState({...state, langMenuAnchorEl: undefined});
}

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

function onScrollOffset(offset: number, oldState: State): State {
  // Shrinking phase
  if(offset < shrinkingPhaseOffset(oldState.maxHeight)) 
  {
    return {
      ...oldState,
      heightPx: oldState.maxHeight - offset / navBarSettings.scrollToBarTranslationFactor,
      previousOffset: offset,
      vericalTranslatePx: 0,
    };
  } 
  else 
  {
    const oldTranslate = oldState.vericalTranslatePx;
    const oldScrollOffset = oldState.previousOffset;
    return {
      ...oldState,
      heightPx: navBarSettings.minHeightPx,
      previousOffset: offset,
      vericalTranslatePx: Math.max(
        - navBarSettings.minHeightPx, 
        Math.min(0, oldTranslate + (oldScrollOffset - offset) / navBarSettings.scrollToBarTranslationFactor)),
    }
  }
}

function shrinkingPhaseOffset(maxHeight: number): number {
  return (maxHeight - navBarSettings.minHeightPx)
      * navBarSettings.scrollToBarTranslationFactor;
}

async function delay(millisec: number, executee: () => void) {
  await sleep(millisec);
  executee();
}