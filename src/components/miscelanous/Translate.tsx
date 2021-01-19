import React from "react";
import { FC, useEffect, useState } from "react";

export type Lang = 'pl' | 'en' | 'de';
export const allLangs: ReadonlyArray<Lang> = ['pl', 'en', 'de'];

const browserLang: any = (navigator.languages && navigator.languages[0] || navigator.language).split('-')[0];
let configuredLang: Lang = browserLang as Lang ?? 'en';

const subscribers = new Map<Object, (lang: Lang) => void>();

export function changeLanguage(lang: Lang) {
  configuredLang = lang;
  subscribers.forEach((f) => f(lang));
}

export interface Translatable {
  en: string,
  pl: string,
  de: string,
}

export function useLang(): Lang {
  const [componentId, setId] = useState({});
  const [lang, setTranslated] = useState(configuredLang);

  useEffect(() => {
    subscribers.set(componentId, (newLang: Lang) => setTranslated(newLang));
    return () => {subscribers.delete(componentId)};
  });

  return lang;
}

export const translate = (trans: Translatable): string => trans[configuredLang];

interface Props {
  trans: Translatable,
}

const Translate = (props: Props) => {
  const {trans} = props;
  const lang = useLang();

  return(
    <>{trans[lang]}</>
  )
}

export default Translate;