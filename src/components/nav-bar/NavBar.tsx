import React, { useEffect, useState } from "react";
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

  const [state, setState] = useState<State>({
    previousOffset: 0,
    vericalTranslatePx: 0,
    heightPx: getWindowDimensions().height,
    maxHeight: getWindowDimensions().height,
  });

  const handleScroll = () => {
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
    const updatedState = {...state, maxHeight: getWindowDimensions().height};
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
    console.log(state);
    setState({...state, langMenuAnchorEl: undefined});
}

  const {vericalTranslatePx, heightPx, maxHeight} = state;
  return (
    <NavBarView 
    vericalTranslatePx={vericalTranslatePx} 
    height={heightPx}
    maxHeight={maxHeight}
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