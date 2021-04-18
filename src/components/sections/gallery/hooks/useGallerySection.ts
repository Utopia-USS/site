import { useEffect, useState } from "react";
import useWindowDimensions from "../../../../utils/hooks/useWindowDimensions";
import sleep from "../../../../utils/sleep";
import gallerySettings from "../GallerySettings";

export default function useGallerySection() {
  // Fade in / out
  const [fadeIn, setFadeIn] = useState(true);

  // Gallery item selection
  const [galleryItem, setGalleryItem] = useState(0);
  const numberOfItems = gallerySettings.items.length;
  const item = gallerySettings.items[galleryItem];
    /*   Can take negative number or greater then items length, 
  so you can change by 1 in any direction and get the 
  expected result. */
  const onItemChange: (itemNum: number) => void = (itemNum) => {
    const modulo = itemNum % numberOfItems;
    const itemIndex = modulo >= 0 ? modulo : numberOfItems + modulo;
    setFadeIn(false);
    sleep(gallerySettings.fadeTime).then((_) => {
      setGalleryItem(itemIndex);
      setFadeIn(true);
    });
  }

  // Updating window dimension info
  const windowDimensions = useWindowDimensions();

  // preload images
  useEffect(() => {
    gallerySettings.items
      .map((e) => e.media)
      .map((e) => new Image().src = e);
  }, []);

  return {
    windowDimensions: windowDimensions,
    fadeIn: fadeIn,
    numberOfItems: numberOfItems,
    galleryItem: galleryItem,
    item: item,
    onItemChange: onItemChange,
  }
}