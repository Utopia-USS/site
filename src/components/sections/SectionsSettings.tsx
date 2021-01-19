import { createRef, RefObject } from "react"
import { Translatable } from "../miscelanous/Translate"

export interface SectionProps {
  name: Translatable,
  menuName: Translatable,
  id: string,
  ref: RefObject<HTMLElement>,
}

const sections: ReadonlyArray<SectionProps> = [
  {
    name: {
      en: "we offer",
      pl: "nasza oferta",
      de: "wir bieten",
    },
    menuName: {
      en: "offer",
      pl: "oferta",
      de: "Angebot",
    },
    id: "offer-section",
    ref: createRef<HTMLElement>(),
  },
  {
    name: {
      en: "our projects",
      pl: "nasze projekty",
      de: "unsere Projekte"
    },
    menuName: {
      en: "projects",
      pl: "projekty",
      de: "Projekte"
    },
    id: "gallery-section",
    ref: createRef<HTMLElement>(),
  },
  {
    name: {
      en: "about us",
      pl: "o nas",
      de: "über uns"
    },
    menuName: {
      en: "about us",
      pl: "o nas",
      de: "über uns"
    },
    id: "about-us-section",
    ref: createRef<HTMLElement>(),
  },
  {
    name: {
      en: "let's get in touch!",
      pl: "skontakuj się z nami",
      de: "wir freuen uns auf Deine Nachricht!"
    },
    menuName: {
      en: "contact",
      pl: "kontakt",
      de: "Kontakt",
    },
    id: "contact-section",
    ref: createRef<HTMLElement>(),
  }
]

export const sectionsSettings = {
  sections: sections,
}