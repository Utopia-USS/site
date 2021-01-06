import BoChat from "../../../assets/img/bochat_ad.png";
import Sift from "../../../assets/img/sift_ad.png";
import Ercoin from "../../../assets/img/ercoin_ad.png"
import SmartVendor from "../../../assets/img/smartvendor_ad.png"

interface GalleryItem {
  title: string,
  description: string,
  media: string,
}

const items: ReadonlyArray<GalleryItem> = [
  {
    title: "BoChat",
    description: "A chat application with unique features and media support. We took over the codebase of a simple chat without any proper design, equipped with a lot of features, animations and a cute design and prepared it for monetization, including integration with numerous payment systems. We used Flutter, TypeScript, Firebase (including Firestore, Functions and Auth components).",
    media: BoChat,
  },
  {
    title: "sift",
    description: "An innovative dating app combining powerful and intuitive chat with advanced matching algorithms. We’ve created the cross-platform app with advanced UI/UX as well as the server-side components from scratch. We used Flutter, Kotlin, Ktor, Neo4j, AWS.",
    media: Sift,
  },
  {
    title: "ercoin",
    description: "A mobile wallet application dedicated for Ercoin cryptocurrency. The Android app integrates it with external blockchain APIs. It was written in Flutter.",
    media: Ercoin,
  },
  {
    title: "smart vendor",
    description: "A Comprehensive tool for organizing and optimizing merchant’s and company’s work including advanced matchmaking features. The system has 100+ active company users and is widely adopted in certain industries throughout Central and Eastern Europe. We have built it with Java, Play Framework, React, TypeScript.",
    media: SmartVendor,
  },
]

const gallerySettings = {
  items: items,
}

export default gallerySettings;