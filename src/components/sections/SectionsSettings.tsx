import { createRef, MutableRefObject, RefObject, useRef } from "react"

export interface SectionProps {
  name: string,
  menuName: string,
  id: string,
  ref: RefObject<HTMLElement>,
}

const sections: ReadonlyArray<SectionProps> = [
  {
    name: "we offer",
    menuName: "offer",
    id: "offer-section",
    ref: createRef<HTMLElement>(),
  },
  {
    name: "our projects",
    menuName: "projects",
    id: "gallery-section",
    ref: createRef<HTMLElement>(),
  },
  {
    name: "about us",
    menuName: "about us",
    id: "about-us-section",
    ref: createRef<HTMLElement>(),
  },
  {
    name: "let's get in touch",
    menuName: "contact",
    id: "contact-section",
    ref: createRef<HTMLElement>(),
  }
]

export const sectionsSettings = {
  sections: sections,
}