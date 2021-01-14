import { RefObject } from "react";
import { sectionsSettings } from "../sections/SectionsSettings";

interface MenuItem{
  label: string,
  scrollToRef: RefObject<HTMLElement>,
}

const menuItems = () : MenuItem[] =>
  sectionsSettings
  .sections
  .map((e) => {
    return {
      label: e.menuName,
      scrollToRef: e.ref,
    };
  });

export const navBarSettings = {
  minHeightPx: 60,
  minBarLogoRatio: 0.7,
  logoMaxHeight(maxBarHeight: number) {
    return Math.min(0.2 * maxBarHeight, 400)
  },
  scrollToBarTranslationFactor: 1,
  delayMs: 0,
  logoBreakpoint: 200,
  mobileMenuId: "nav-bar-menu-mobile",
  menuItems: menuItems,
  centerColumnFadeOutPath: 200,
}