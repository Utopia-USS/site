import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { getWindowDimensions } from "../../../utils/getWindowDimensions";
import sleep from "../../../utils/sleep";
import { useLang } from "../../miscelanous/Translate";
import { navBarSettings } from "../NavBarSettings";

interface NavBarState {
  previousOffset: number;
  vericalTranslatePx: number;
  heightPx: number;
  mobileMenuAnchorEl?: Element;
  langMenuAnchorEl?: Element;
  maxHeight: number;
};

export default function useNavBar() {
  const getMaxHeight = () => getWindowDimensions().height;

  const [state, setState] = useState<NavBarState>({
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

  const onLangMenuClosed = () =>
    setState({...state, langMenuAnchorEl: undefined});

  return {
    state: state,
    lang: lang,
    onMobileMenuIconClicked: onMobileMenuIconClicked,
    onMobileMenuClosed: onMobileMenuClosed,
    onLangButtonClicked: onLangButtonClicked,
    onLangMenuClosed: onLangMenuClosed,
  }
}

function onScrollOffset(offset: number, oldState: NavBarState): NavBarState {
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