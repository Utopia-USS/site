import { FunctionComponent, SVGProps } from "react";
import {ReactComponent as FlutterIco} from "../../../assets/tech_icons/flutter.svg";
import {ReactComponent as ReactIco} from "../../../assets/tech_icons/react.svg";
import {ReactComponent as AngularIco} from "../../../assets/tech_icons/angular.svg";
import {ReactComponent as AndroidIco} from "../../../assets/tech_icons/android.svg";
import {ReactComponent as TypescriptIco} from "../../../assets/tech_icons/typescript.svg";
import {ReactComponent as SpringIco} from "../../../assets/tech_icons/spring.svg";
import {ReactComponent as KotlinIco} from "../../../assets/tech_icons/kotlin.svg";
import {ReactComponent as DotnetIco} from "../../../assets/tech_icons/dotnet.svg";
import {ReactComponent as NodeIco} from "../../../assets/tech_icons/nodejs.svg";
import {ReactComponent as DjangoIco} from "../../../assets/tech_icons/django.svg";
import ConsultingImg from '../../../assets/img/consulting.png';
import DesignImg from '../../../assets/img/design.png';
import MobileImg from '../../../assets/img/mobile.png';
import WebImg from '../../../assets/img/web.png';
import MicroservicesImg from '../../../assets/img/microservices.png';
import CloudImg from '../../../assets/img/cloud.png';

interface Tech {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>,
  name: string,
  description: string,
}

const techs: ReadonlyArray<Tech> = [
  {
    icon: FlutterIco,
    name: "flutter",
    description: "A cross-platform framework in Dart language allows to quickly build reusable client apps with native performance.",
  },
  {
    icon: ReactIco,
    name: "react",
    description: "React.js allows to build fast, composable web apps. React Native allows the same for mobile platforms.",
  },
  {
    icon: AngularIco,
    name: "angular",
    description: "Angular allows to build fast, composable web apps.",
  },
  {
    icon: AndroidIco,
    name: "android",
    description: "Native Android apps are best suited for long-term, heavy duty projects.",
  },
  {
    icon: TypescriptIco,
    name: "typescript",
    description: "We are using Typescript language to ensure type safety and minimize the chances for runtime errors.",
  },
  {
    icon: SpringIco,
    name: "spring",
    description: "A well-established, feature rich framework for backends in Java or Kotlin language.",
  },
  {
    icon: KotlinIco,
    name: "ktor",
    description: "A framework for building asynchronous servers and clients in connected systems using the Kotlin programming language.",
  },
  {
    icon: DotnetIco,
    name: ".net web api",
    description: "A well-established, feature rich framework for building APIs in C# language.",
  },
  {
    icon: NodeIco,
    name: "express.js",
    description: "A performant web framework for Node.js allowing a high degree of development integration with javascript frontends.",
  },
  {
    icon: DjangoIco,
    name: "django",
    description: "A framework in Python that allows quick prototyping and development of web server applications.",
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
    image: ConsultingImg,
    imageAlt: "kto gra ten pije szampana",
  },
  {
    title: "design",
    description: "We design complete systems according to your guidelines and the industries best practices.",
    image: DesignImg,
    imageAlt: "kto gra ten pije szampana",
  },
  {
    title: "mobile",
    description: "Beautiful and user-friendly mobile apps that feel familiar right from the start.",
    image: MobileImg,
    imageAlt: "kto gra ten pije szampana",
  },
  {
    title: "web",
    description: "Fast, tidy, purposeful and easy to navigate web apps.",
    image: WebImg,
    imageAlt: "kto gra ten pije szampana",
  },
  {
    title: "microservices",
    description: "Flexible, scalable and extendable microservice-based architectures.",
    image: MicroservicesImg,
    imageAlt: "kto gra ten pije szampana",
  },
  {
    title: "cloud",
    description: "Integration with the cloud will help you minimize development and operational costs.",
    image: CloudImg,
    imageAlt: "kto gra ten pije szampana",
  },
];

const offerSectionSettings = {
  offers: offers,
  techs: techs,
};

export default offerSectionSettings;