import { createRef, MutableRefObject, RefObject, useRef } from "react"

export interface SectionProps {
  name: string,
  id: string,
  ref: RefObject<HTMLElement>,
}

const sections: ReadonlyArray<SectionProps> = [
  {
    name: "offer",
    id: "offer-section",
    ref: createRef<HTMLElement>(),
  },
  {
    name: "projects",
    id: "gallery-section",
    ref: createRef<HTMLElement>(),
  },
  {
    name: "about us",
    id: "about-us-section",
    ref: createRef<HTMLElement>(),
  },
  {
    name: "contact",
    id: "contact-section",
    ref: createRef<HTMLElement>(),
  }
]

export const sectionsSettings = {
  sections: sections,
}