import BoChat from "../../../assets/img/bocha_ad.png";
import Sift from "../../../assets/img/sift_ad.png";
import Ercoin from "../../../assets/img/ercoin_ad.png"
import SmartVendor from "../../../assets/img/smartvendor_ad.png"
import { Translatable } from "../../miscelanous/Translate";

interface GalleryItem {
  title: string,
  description: Translatable,
  media: string,
  imageAlt: string,
}

const items: ReadonlyArray<GalleryItem> = [
  {
    title: "BoChat",
    description: {
      en: "A chat application with unique features and media support. We took over the codebase of a simple chat without any proper design, we equipped it with a lot of features, animations and a cute design and prepared it for monetization, including integration with numerous payment systems. We used Flutter, TypeScript, Firebase (including Firestore, Functions and Auth components).",
      pl: "Aplikacja czatowa posiadająca unikatowe możliwości i wsparcie dla mediów. Przejęliśmy kod prostego czatu bez designu i wyposażyliśmy go w wiele możliwości, animacje, ładny design i przygotowaliśmy aplikację do monetyzacji, włączając w to integrację z wieloma systemami płatności. Użyliśmy Fluttera, Trypescript i Firebase (m. in. komponenty Firestore, Functions i Auth).",
      de: "Eine Chat-App mit einzigartigen Funktionen und Medienunterstützung. Wir haben die Codebasis eines einfachen Chats ohne angemessenes Design übernommen, das mit vielen Funktionen, Animationen und einem hübschen Design ausgestattet ist, und sie für die Monetarisierung vorbereitet, einschließlich der Integration in zahlreiche Zahlungssysteme. Wir haben Flutter, TypeScript, Firebase (einschließlich Firestore, Functions und Auth) verwendet.",
    },
    media: BoChat,
    imageAlt: "bochat screens",
  },
  {
    title: "Sift",
    description: {
      en: "An innovative dating app combining powerful and intuitive chat with advanced matching algorithms. We’ve created the cross-platform app with amazing UI/UX as well as the server-side components from scratch. We used Flutter, Kotlin, Ktor, Neo4j, AWS.",
      pl: "Innowacyjna aplikacja randkowa łącząca wielkofunkcyjny i intuicyjny czat z zaawansowanymi algorytmami dopasowującymi. Stworzyliśmy od podstaw wieloplatformową aplikację z wspaniałym UI/UX i komponenty serwerowe. Użyliśmy Flutter, Kotlin, Ktor, Neo4j, AWS.",
      de: "Eine innovative Dating-App, die leistungsstarken und intuitiven Chat mit fortgeschritten Matching-Algorithmen kombiniert. Wir haben die plattformübergreifende App mit einer tollen Benutzeroberfläche / UX sowie die serverseitigen Komponenten von Grund auf neu erstellt. Wir haben Flutter, Kotlin, Ktor, Neo4j, AWS verwendet.",
    },
    media: Sift,
    imageAlt: "sift screens",
  },
  {
    title: "Ercoin",
    description: {
      en: "A mobile wallet application dedicated for Ercoin cryptocurrency. The Android app integrates it with external blockchain APIs. It was written in Flutter.",
      pl: "Portfel mobilny dedykowany kryptowalucie Ercoin. Aplikacja androidowa integruje się z zewnętrznym API blockchaina. Została napisana we Flutterze.",
      de: "Eine mobile Brieftaschenanwendung für die Ercoin-Kryptowährung. Die Android App integriert es in externe Blockchain APIs. Es wurde in Flutter geschrieben.",
    },
    media: Ercoin,
    imageAlt: "ercoin screens",
  },
  {
    title: "Smart Vendor",
    description: {
      en: "A comprehensive tool for organizing and optimizing merchant’s and company’s work including advanced matchmaking features. The system has 100+ active company users and is widely adopted in certain industries throughout Central and Eastern Europe. We have built it with Java, Play Framework, React, TypeScript.",
      pl: "Wszechstronne narzędzie do organizacji i optymalizacji prac firm handlowych, zawierające zaawansowane opcje dopasowywania. System ma ponad 100 aktywnych firmowych użytkowników w Europie Środkowej i Wschodniej. Stworzyliśmy go wykorzystując Javę, Play Framework, React, Typescript.",
      de: "Ein umfassendes Instrument zum Organisieren und Optimieren der Arbeit von Händlern und Unternehmen, einschließlich fortgeschritten Matchmaking-Funktionen. Das System wird von mehr als 100 Unternehmen benutzt und ist in bestimmten Branchen in Mittel- und Osteuropa weit verbreitet. Wir haben Java, Play Framework, React, Typescript verwendet.",
    },
    media: SmartVendor,
    imageAlt: "smart vendor screens",
  },
]

const gallerySettings = {
  items: items,
  minHeight: 450,
  maxWidth: 900,
  fadeTime: 300,
  borderRadius: 10,

}

export default gallerySettings;