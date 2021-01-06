import { off } from "process";
import SolEx from "../../../assets/img/solutions_example.jpg";

interface Offer {
  title: string,
  description: string,
  image: string,
  imageAlt: string,
}

const offers: ReadonlyArray<Offer> = [
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
] 

const offerSectionSettings = {
  offers: offers,
}

export default offerSectionSettings;