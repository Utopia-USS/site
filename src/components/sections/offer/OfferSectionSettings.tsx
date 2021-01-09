import SolEx from "../../../assets/img/solutions_example.jpg";
import {ReactComponent as FlutterIco} from "../../../assets/tech_icons/flutter.svg";
import {ReactComponent as ReactIco} from "../../../assets/tech_icons/react.svg";
import {ReactComponent as AngularIco} from "../../../assets/tech_icons/angular.svg";
import {ReactComponent as AndroidIco} from "../../../assets/tech_icons/android.svg";
import {ReactComponent as TypescriptIco} from "../../../assets/tech_icons/typescript.svg";
import {ReactComponent as SpringIco} from "../../../assets/tech_icons/spring.svg";
import {ReactComponent as KtorIco} from "../../../assets/tech_icons/ktor.svg";
import {ReactComponent as DotnetIco} from "../../../assets/tech_icons/dotnet.svg";
import {ReactComponent as ExpressjsIco} from "../../../assets/tech_icons/expressjs.svg";
import {ReactComponent as DjangoIco} from "../../../assets/tech_icons/django.svg";
import { FunctionComponent, ReactComponentElement, ReactSVGElement, SVGProps } from "react";

interface Tech {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>,
  description: string,
}

const techs: ReadonlyArray<Tech> = [
  {
    icon: FlutterIco,
    description: "alala",
  },
  {
    icon: ReactIco,
    description: "alala",
  },
  {
    icon: AngularIco,
    description: "alala",
  },
  {
    icon: AndroidIco,
    description: "alala",
  },
  {
    icon: TypescriptIco,
    description: "alala",
  },
  {
    icon: SpringIco,
    description: "alala",
  },
  {
    icon: KtorIco,
    description: "alala",
  },
  {
    icon: DotnetIco,
    description: "alala",
  },
  {
    icon: ExpressjsIco,
    description: "alala",
  },
  {
    icon: DjangoIco,
    description: "alala",
  },
]

interface Offer {
  title: string,
  description: string,
  image: string,
  imageAlt: string,
}

const offers: ReadonlyArray<Offer> = [
  {
    title: "consulting",
    description: "Let us split your requirements to particles and put together perfect solutions for them.",
    image: SolEx,
    imageAlt: "kto gra ten pije szampana",
  },
  {
    title: "design",
    description: "We design complete systems according to your guidelines and the industries best practices.",
    image: SolEx,
    imageAlt: "kto gra ten pije szampana",
  },
  {
    title: "mobile",
    description: "Beautiful and user-friendly mobile apps that feel familiar right from the start.",
    image: SolEx,
    imageAlt: "kto gra ten pije szampana",
  },
  {
    title: "web",
    description: "Fast, tidy, purposeful and easy to navigate web apps.",
    image: SolEx,
    imageAlt: "kto gra ten pije szampana",
  },
  {
    title: "microservices",
    description: "Flexible, scalable and extendable microservice-based architectures.",
    image: SolEx,
    imageAlt: "kto gra ten pije szampana",
  },
  {
    title: "cloud",
    description: "Integration with the cloud will help you minimize development and operational costs.",
    image: SolEx,
    imageAlt: "kto gra ten pije szampana",
  },
];

const offerSectionSettings = {
  offers: offers,
  techs: techs,
};

export default offerSectionSettings;