import { createRef, useEffect, useState } from "react";
import _ from "lodash";
import isElementInOrAboveViewport from "../isElementInOrAboveViewport";

/**
 * Check if an element is in viewport

 * @param {number} offset - Number of pixels up to the observable element from the top
 * @param {number} throttleMilliseconds - Throttle observable listener, in ms
 */
export default function useHasBeenDisplayed<Element extends HTMLElement>(
  offset = 200,
  throttleMilliseconds = 100
): [boolean, React.RefObject<Element>] {
  const [wasVisible, setWasVisible] = useState(false);

  const currentElement = createRef<Element>();

  const onScroll = _.throttle(() => {
    if (!currentElement.current) {
      setWasVisible(false || wasVisible);
      return;
    }
    setWasVisible(
      isElementInOrAboveViewport(currentElement, offset) || wasVisible
    );
  }, throttleMilliseconds);

  // If element is in viewport on mount, make it visible
  useEffect(() => {
    setWasVisible(
      isElementInOrAboveViewport(currentElement, offset) || wasVisible
    );
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return [wasVisible, currentElement];
}