// to działa z mobilkami, a scroll-behavior: smooth; jakoś nie
export function smoothScroll(item: HTMLElement) {
  const elementPosition = item.offsetTop;
  window.scrollTo({
    top: elementPosition,
    behavior: "smooth"
  });
}