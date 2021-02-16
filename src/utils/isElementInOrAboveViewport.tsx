export default function isElementInOrAboveViewport(
  ref: React.RefObject<Element>, 
  offset: number = 0
  ): boolean {
  const current = ref.current;
  if(current === null) {
    return false
  } else {
    const top = current.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    return top < windowHeight - offset;// && top - offset > 0;
  }
}