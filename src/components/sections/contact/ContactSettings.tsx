import validateEmail from "../../../utils/validateEmail";
import ContactPerson from "../../../assets/img/contact_person.jpg";
import { Translatable } from "../../miscelanous/Translate";

interface UtopianField {
  name: string,
  required: boolean,
  label: Translatable,
  value: any,
  autoComplete?: string,
  validation: (val: any) => boolean,
  multiline: boolean,
  numOfRows?: number,
  type: string,
  error?: boolean,
}

const form: ReadonlyArray<UtopianField> = [
  {
    name: 'name',
    required: false,
    label: {
      en: "Your Name",
      de: "Dein Vorname",
      pl: "Twoje Imię",
    },
    value: "",
    autoComplete: "given-name",
    validation: (val: string) => true,
    multiline: false,
    type: "text",
  },
  {
    name: 'surename',
    required: false,
    label: {
      en: "Your Surename",
      pl: "Twoje Nazwisko",
      de: "Dein Nachname",
    },
    value: "",
    autoComplete: "family-name",
    validation: (val: string) => true,
    multiline: false,
    type: "text",
  },
  {
    name: 'email',
    required: true,
    label: {
      en: "Email Address",
      pl: "Adres Email",
      de: "Email Adresse"
    },
    value: "",
    autoComplete: "email",
    validation: (val: string) => validateEmail(val),
    multiline: false,
    type: "email",
  },
  {
    name: 'phone',
    required: false,
    label: {
      en: "Phone Number",
      pl: "Numer Telefonu",
      de: "Telefonnumer"
    },
    value: "",
    autoComplete: "tel",
    validation: (val: string) => true,
    multiline: false,
    type: "tel",
  },
  {
    name: 'message',
    required: true,
    label: {
      en: "What can we do for you?",
      pl: "Co możemy dla Ciebie zrobić?",
      de: "Was können wir für Dich tun?",
    },
    value: "",
    validation: (val: string) => val.trim().length > 0,
    multiline: true,
    numOfRows: 4,
    type: "text",
  },
]

const contactSettings = {
  form: form,
  contactPerson: {
    image: ContactPerson,
    imageAlt: "contact person",
    // obfuscated contact details
    email: ['t', 'h', 'o', 'm', 'a', 's', '@', 'u', 't', 'o', 'p', 'i', 'a', 'u', 'l', 't', 'i', 'm', 'a', 't', 'e', '.', 'c', 'o', 'm'].join(''),
    phone: ['+', '4', '8', ' ', '7', '8', '7', ' ', '9', '7', '8', ' ', '2', '5', '1'].join(''),
    description: {
      en: "My name is Thomas and I'm the COO of Utopia Ultimate Software Solutions. I would love to hear about your ideas and challenges. Together with our team we can figure out how to achieve your business goals and advance your companies development. To get in touch, please use my contact details or the contact form. We're waiting to hear from you!",
      pl: "Nazywam się Thomas i jestem dyrektorem operacyjnym w Utopia Ultimate Software Solutions. Opowiedz mi o Twoich pomysłach i wyzwaniach. Razem z naszym zespołem opracujemy rozwiązania, które pozwolą Ci osiągnąć Twoje cele biznesowe i pomóc w rozwoju Twojej firmy. Żeby się ze mną skontaktować, użyj moich danych kontaktowych lub wypełnij formularz. Czekamy na Twój odzew!",
      de: "Ich bin Thomas, Betriebsleiter in Utopia Ultimate Software Solutions. Ich würde gerne von Deinen Ideen und Herausforderungen hören. Gemeinsam mit unserem Team können wir herausfinden, wie wir Deine Geschäftsziele erreichen und die Entwicklung Deines Unternehmens vorantreiben können. Kontaktiere mich per Email, telefonisch oder durch das Kontaktformular. Wir warten darauf, von Dir zu hören!",
    } as Translatable,
  }
}

export default contactSettings;