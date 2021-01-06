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
      label: e.name,
      scrollToRef: e.ref,
    };
  });

export const navBarSettings = {
  maxHeightPx: 450,
  minHeightPx: 80,
  scrollToBarTranslationFactor: 1,
  delayMs: 0,
  logoBreakpoint: 200,
  mobileMenuId: "nav-bar-menu-mobile",
  menuItems: menuItems,
}