import validateEmail from "../../../utils/validateEmail";
import ContactPerson from "../../../assets/img/contact_person.jpg";

interface UtopianField {
  name: string,
  required: boolean,
  label: string,
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
    required: true,
    label: "Your Name",
    value: "",
    autoComplete: "given-name",
    validation: (val: string) => val.length > 0,
    multiline: false,
    type: "text",
  },
  {
    name: 'surename',
    required: true,
    label: "Your Surename",
    value: "",
    autoComplete: "family-name",
    validation: (val: string) => val.length > 0,
    multiline: false,
    type: "text",
  },
  {
    name: 'email',
    required: true,
    label: "Email Address",
    value: "",
    autoComplete: "email",
    validation: (val: string) => validateEmail(val),
    multiline: false,
    type: "email",
  },
  {
    name: 'phone',
    required: false,
    label: "Phone Number",
    value: "",
    autoComplete: "tel",
    validation: (val: string) => true,
    multiline: false,
    type: "tel",
  },
  {
    name: 'message',
    required: true,
    label: "Haw can we help?",
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
    description: "My name is Thomas and I'm the COO of Utopia Ultimate Software Solutions. I would love to hear about your ideas and challenges. Together with our team we can figure out how to achieve your bussiness goals and advance your companies development. To get in touch, please use my contact details or the contact form. We're waiting to hear from you!"
  }
}

export default contactSettings;