import { FunctionComponent, SVGProps } from "react";
import CloudImg from '../../../assets/img/cloud.png';
import ConsultingImg from '../../../assets/img/consulting.png';
import DesignImg from '../../../assets/img/design.png';
import MicroservicesImg from '../../../assets/img/microservices.png';
import MobileImg from '../../../assets/img/mobile.png';
import WebImg from '../../../assets/img/web.png';
import { ReactComponent as AndroidIco } from "../../../assets/tech_icons/android.svg";
import { ReactComponent as AngularIco } from "../../../assets/tech_icons/angular.svg";
import { ReactComponent as DjangoIco } from "../../../assets/tech_icons/django.svg";
import { ReactComponent as DotnetIco } from "../../../assets/tech_icons/dotnet.svg";
import { ReactComponent as FlutterIco } from "../../../assets/tech_icons/flutter.svg";
import { ReactComponent as KotlinIco } from "../../../assets/tech_icons/kotlin.svg";
import { ReactComponent as NodeIco } from "../../../assets/tech_icons/nodejs.svg";
import { ReactComponent as ReactIco } from "../../../assets/tech_icons/react.svg";
import { ReactComponent as SpringIco } from "../../../assets/tech_icons/spring.svg";
import { ReactComponent as TypescriptIco } from "../../../assets/tech_icons/typescript.svg";
import { Translatable } from "../../miscelanous/Translate";

interface Tech {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>,
  name: string,
  description: Translatable,
}

const techs: ReadonlyArray<Tech> = [
  {
    icon: FlutterIco,
    name: "flutter",
    description: {
      en: "A cross-platform framework in Dart language allows to quickly build reusable client apps with native performance.",
      pl: "Wieloplatformowy framework w języku Dart, pozwalający na szybki rozwój aplikacji klienckich o natywnej wydajności.",
      de: "Ein plattformübergreifendes Framework in Dart ermöglicht die schnelle Erstellung wiederverwendbarer Client-Apps mit nativer Leistung."
    },
  },
  {
    icon: ReactIco,
    name: "react",
    description: {
      en: "React.js allows to build fast, composable web apps. React Native allows the same for mobile platforms.",
      pl: "React.js pozwala na budowanie szybkich, komponowalnych aplikacji webowych. React Native pozwala na to samo dla platform mobilnych.",
      de: "Mit React.js können schnelle, zusammensetzbare Web-Apps erstellt werden. React Native ermöglicht dasselbe für mobile Plattformen.",
    },
  },
  {
    icon: AngularIco,
    name: "angular",
    description: {
      en: "Angular allows to build fast, composable web apps.",
      pl: "Angular pozwala na tworzenie wydajnych, komponowalnych aplikacji webowych.",
      de: "Mit React.js können schnelle, zusammensetzbare Web-Apps erstellt werden.",
    },
  },
  {
    icon: AndroidIco,
    name: "android",
    description: {
      en: "Native Android apps are best suited for long-term, heavy duty projects.",
      pl: "Natywne androidowe aplikacje dla długoterminowych i wymagających projektów.",
      de: "Native Android-Apps eignen sich am besten für langfristige und anspruchsvolle Projekte."
    },
  },
  {
    icon: TypescriptIco,
    name: "typescript",
    description: {
      en: "We are using Typescript language to ensure type safety and minimize the risk of runtime errors.",
      pl: "Używamy języka Typescript, żeby zapewnić bezpieczeństwo typologiczne i zminimalizować ryzyko błędów.",
      de: "Wir verwenden die Typescript-Sprache, um die Typensicherheit zu gewährleisten und das Risiko von Laufzeitfehlern zu minimieren."
    },
  },
  {
    icon: SpringIco,
    name: "spring",
    description: {
      en: "A well-established, feature rich framework for backends in Java or Kotlin language.",
      pl: "Dojrzały i funkcjonalny framework dla backendów w języku Java lub Kotlin.",
      de: "Ein etabliertes, funktionsreiches Framework für Backends in Java- oder Kotlin-Sprache.",
    },
  },
  {
    icon: KotlinIco,
    name: "ktor",
    description: {
      en: "A framework for building asynchronous servers and clients in connected systems using the Kotlin programming language.",
      pl: "Framework do tworzenia asynchronicznych aplikacji serwerowych i klienckich w języku Kotlin",
      de: "Ein Framework zum Erstellen von asynchronen Servern und Client-Apps mithilfe der Kotlin-Sprache."
    },
  },
  {
    icon: DotnetIco,
    name: ".net web api",
    description: {
      en: "A well-established, feature rich framework for building APIs in C# language.",
      pl: "Dojrzały i funkcjonalny framework dla backendów w języku C#.",
      de: "Ein etabliertes, funktionsreiches Framework für Backends in C#.",
    },
  },
  {
    icon: NodeIco,
    name: "express.js",
    description: {
      en: "A performant web framework for Node.js allowing a high degree of development integration with javascript frontends.",
      pl: "Wydajny framework dla aplikacji serwerowych Node.js, pozwalający na ścisłą integrację developmentu z javascriptowymi klientami.",
      de: "Ein performantes Webframework für Node.js, das einen hohen Grad an Entwicklungsintegration mit Javascript-Frontends ermöglicht.",
    },
  },
  {
    icon: DjangoIco,
    name: "django",
    description: {
      en: "A framework in Python that allows quick prototyping and development of web server applications.",
      pl: "Framework w języku Python pozwalajacy na szybkie prototypowanie i rozwój webowych aplikacji serwerowych.",
      de: "Ein Framework in Python, das schnelles Prototyping und die Entwicklung von Webserveranwendungen ermöglicht.",
    },
  },
]

interface Offer {
  title: Translatable,
  description: Translatable,
  image: string,
  imageAlt: string,
}

const offers: ReadonlyArray<Offer> = [
  {
    title: {
      en: "consulting",
      pl: "doradztwo",
      de: "Beratung",
    },
    description: {
      en: "Let us split your requirements to particles and put together perfect solutions for them.",
      pl: "Rozbijmy Twoje potrzeby na części pierwsze i złóżmy dla nich idealne rozwiązania.",
      de: "Lass uns Deine Anforderungen in Partikel aufteilen und die perfekte Lösungen für sie zusammenstellen."
    },
    image: ConsultingImg,
    imageAlt: "consulting",
  },
  {
    title: {
      en: "design",
      pl: "design",
      de: "Design",
    },
    description: {
      en: "We design complete systems according to your guidelines and the industries best practices.",
      pl: "Projektujemy kompletne systemy według Twoich wytycznych i najlepszych praktyk.",
      de: "Wir entwerfen komplette Systeme gemäß Deinen Richtlinien und den besten Vorgehensweisen.",
    },
    image: DesignImg,
    imageAlt: "design",
  },
  {
    title: {
      en: "mobile",
      pl: "aplikacje mobilne",
      de: "Mobile-Apps",
    },
    description: {
      en: "Beautiful and user-friendly mobile apps that feel familiar right from the start.",
      pl: "Piękne i przyjazne dla użytkownika aplikacje mobilne, które od razu wydają się znajome.",
      de: "Schöne und benutzerfreundliche Mobile-Apps, die sich von Anfang an vertraut anfühlen.",
    },
    image: MobileImg,
    imageAlt: "mobile apps",
  },
  {
    title: {
      en: "web",
      pl: "aplikacje webowe",
      de: "Web-Apps"
    },
    description: {
      en: "Fast, tidy, purposeful and easy to navigate web apps.",
      pl: "Szybkie, uporządkowane, celowe i łatwe w nawigowaniu aplikacje webowe.",
      de: "Schnelle, ordentliche, zielgerichtete und einfach zu navigierende Webanwendungen.",
    },
    image: WebImg,
    imageAlt: "web apps",
  },
  {
    title: {
      en: "microservices",
      pl: "mikroserwisy",
      de: "Microservices",
    },
    description: {
      en: "Flexible, scalable and extendable microservice-based architectures.",
      pl: "Elastyczne, skalowalne i rozszerzalne architektury mikroserwisowe.",
      de: "Flexible, skalierbare und erweiterbare Microservice-basierte Architekturen."
    },
    image: MicroservicesImg,
    imageAlt: "microservices",
  },
  {
    title: {
      en: "cloud",
      pl: "cloud",
      de: "Cloud",
    },
    description: {
      en: "Integration with the cloud will help you minimize development and operational costs.",
      pl: "Integracja z chmurą pomoże Ci zminimalizować koszty rozwoju i koszty operacyjne projektu.",
      de: "Durch die Integration in die Rechnerwolke kannst Du die Entwicklungs- und Betriebskosten minimieren.",
    },
    image: CloudImg,
    imageAlt: "cloud",
  },
];

const offerSectionSettings = {
  offers: offers,
  techs: techs,
};

export default offerSectionSettings;