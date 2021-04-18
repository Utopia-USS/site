import axios from "axios";
import { useState } from "react";
import useHasBeenDisplayed from "../../../../utils/hooks/useHasBeenDisplayed";
import { useLang } from "../../../miscelanous/Translate";
import contactSettings, { ContactScriptFields } from "../ContactSettings";

export enum SendState {
  not_send,
  sending,
  success,
  error,
}

export default function useContactSection() {
  const [fields, setFormValues] = useState(contactSettings.form);
  const [sendState, setSendState] = useState(SendState.not_send);
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  const lang = useLang();

  // obfuscating contact info
  const [displayContactDetails, contactDetailsElement] = useHasBeenDisplayed<HTMLDivElement>(0, 0);

  const onValueChange = (
    val: any, index: number, validator: (val: any) => boolean) => {
      const field = fields[index];
      const newField = {...field, value: val, error: !field.validation(val)};
      setFormValues([
        ...fields.slice(0, index), 
        newField, 
        ...fields.slice(index + 1, fields.length)
      ]);
    }
  
  const send = () => {
    // validate form fields
    const validated = fields.map((e) => {return {...e, error: !e.validation(e.value)}});
    // if any issues, set validated form fields and return
    if(validated.filter((e) => e.error).length > 0) {
      setFormValues(validated);
    } else {
      setSendState(SendState.sending);

      const fieldVal = (fieldName: string) => 
        fields.filter((e) => e.name === fieldName)[0].value;

      const content: ContactScriptFields = {
        name: fieldVal("name"),
        surename: fieldVal("surename"),
        email: fieldVal("email"),
        message: `Telefon: ${fieldVal("phone")}\n${fieldVal("message")}`,
      }
      axios.post(contactSettings.contactScript, content)
      .then(function (response) {
        const data = response.data as string;
        if(data.includes(contactSettings.contactScriptExpectedOutput)) {
          setSendState(SendState.success);
          const clearedFields = fields.map((e) => {return {...e, value: ''}});
          setFormValues(clearedFields);
        } else {
          setSendState(SendState.error);
        }
      })
      .catch(function (error) {
        setSendState(SendState.error);
      })
      .finally(() => {
        setSnackBarOpen(true);
      });
    }
  }

  return {
    contactDetailsElement: contactDetailsElement,
    displayContactDetails: displayContactDetails,
    onValueChange: onValueChange,
    send: send,
    sendState: sendState,
    snackBarOpen: snackBarOpen,
    setSnackBarOpen: setSnackBarOpen,
    lang: lang,
    fields: fields,
  }
}