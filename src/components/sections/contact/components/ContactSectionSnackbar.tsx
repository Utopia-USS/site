import Snackbar from "@material-ui/core/Snackbar";
import React from "react";
import Translate from "../../../miscelanous/Translate";
import { SendState } from "../hooks/useContactSection";
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface Props {
  snackBarOpen: boolean,
  sendState: SendState,
  setSnackBarOpen: (setOpen: boolean) => void,
}

const ContactSectionSnackbar = (props: Props) => {

  const {snackBarOpen, sendState, setSnackBarOpen} = props;

  return (
    <Snackbar 
    open={snackBarOpen} 
    autoHideDuration={sendState === SendState.error ? 10000: 3000} 
    onClose={() => setSnackBarOpen(false)}
    >
      <Alert 
      onClose={() => setSnackBarOpen(false)} 
      severity={sendState === SendState.error ? "error" : "success"}
      >
        {
        sendState === SendState.error 
        ? <Translate trans={{
          en: "There was an issue with sending the message...",
          pl: "Nie udało się wysłać wiadomości.",
          de: "Beim Senden der Nachricht ist ein Problem aufgetreten...",
        }}/> 
        : <Translate trans={{
          en: "The message was sent successfully.",
          pl: "Wiadomość została wysłana.",
          de: "Die Nachricht wurde erfolgreich gesendet.",
        }}/> 
        }
      </Alert>
    </Snackbar>
  );
}

export default ContactSectionSnackbar;