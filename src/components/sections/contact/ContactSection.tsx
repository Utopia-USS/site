import { Button, createStyles, makeStyles, Snackbar, TextField, Typography } from "@material-ui/core";
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import TelegramIcon from '@material-ui/icons/Telegram';
import axios from "axios";
import React, { useState } from "react";
import useHasBeenDisplayed from "../../../utils/hooks/useHasBeenDisplayed";
import GrowOnDisplayed from "../../miscelanous/GrowOnDisplayed";
import Translate, { useLang } from "../../miscelanous/Translate";
import SectionBox from "../SectionBox";
import contactSettings, { ContactScriptFields } from "./ContactSettings";
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface Props {}

enum SendState {
  not_send,
  sending,
  success,
  error,
}

const ContactSection = (props: Props) => {

  const [fields, setFormValues] = useState(contactSettings.form);
  const [sendState, setSendState] = useState(SendState.not_send);
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  const lang = useLang();

  // obfuscating contact info
  const [displayed, element] = useHasBeenDisplayed<HTMLDivElement>(0, 0);

  const onValueChange = (
    val: string, index: number, validator: (val: string) => boolean) => {
      const field = fields[index];
      const newField = {...field, value: String(val), error: !field.validation(val)};
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
        console.log(data);
        console.log(data.includes("Message has been sent successfully"));
        if((response.data as string).includes("Message has been sent successfully")) {
          setSendState(SendState.success);
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

  const useStyles = makeStyles((theme) =>
    createStyles({
      root: {
        margin: "auto",
        maxWidth: 600,
      },
      contactPersonBox: {
        margin: "auto",
        padding: theme.spacing(1),
      },
      imageBox: {
        float: "left",
        width: 150,
        height: 150,
        marginRight: theme.spacing(3),
        marginBottom: theme.spacing(3),
        "& > img": {
          width: 160,
          height: 160,
          borderRadius: 10,
        },
      },
      contactDetailsBox: {
        margin: theme.spacing(3),
        width: "90%",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      },
      contactInfo: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "white",
        border: `4px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main,
        borderRadius: 10,
        fontWeight: "bold",
        maxWidth: 250,
        height: theme.typography.fontSize + 20,
        textDecoration: "none",
        margin: theme.spacing(1),
        transition: "0.2s",
        "&:hover": {
          borderColor: theme.palette.primary.light,
          color: theme.palette.primary.light,
        },
        "& > *": {
          display: "block",
          height: theme.typography.fontSize,
          lineHeight: `${theme.typography.fontSize}px`,
          marginRight: theme.spacing(1)
        },
      },
      formBox: {
        marginTop: theme.spacing(5),
      },
      form: {
        margin: "auto",
        maxWidth: 500,
      },
      field: {
        margin: theme.spacing(3),
        display: "block",
        width: "100%",
        backgroundColor: "white"
      },
      button: {
        pointerEvents: "auto",
        marginLeft: theme.spacing(3),
        "&:hover" : {
          backgroundColor: theme.palette.primary.light,
        },
      },
      buttonSending: {
        backgroundColor: theme.palette.primary.light,
      },
    })
  );

  const classes = useStyles();

  const {image, imageAlt, email, phone, description} = contactSettings.contactPerson;

  return (
    <SectionBox sectionId="contact-section">
      <div className={classes.root}>
        <GrowOnDisplayed>
          <div className={classes.contactPersonBox}>
            <div className={classes.imageBox}>
              <img src={image} alt={imageAlt}/>
            </div>
            <Typography variant="body2" align="justify" color="textSecondary" component="p">
              <Translate trans={description}/>
            </Typography>
          </div>
          <div ref={element} className={classes.contactDetailsBox}>
            <a href={`mailto:${displayed ? email : "obfuscated"}`} className={classes.contactInfo}>
              <EmailIcon/>
              <span>{displayed ? email : "obfuscated"}</span>
            </a>
            <a href={`tel:${displayed ? phone : "obfuscated"}`} className={classes.contactInfo}>
              <PhoneIcon/>
              <span>{displayed ? phone : "obfuscated"}</span>
            </a>
          </div>
        </GrowOnDisplayed>
        <GrowOnDisplayed>
          <div style={{margin: 50}}>
            <form className={classes.form} noValidate autoComplete="off">
              {
                fields.map((e, i) => 
                <TextField
                fullWidth
                variant="outlined"
                id={`${e.name}`}
                required={e.required}
                label={e.label[lang]}
                value={e.value}
                autoComplete={e.autoComplete}
                onChange={(c) => onValueChange(c.target.value, i, e.validation)}
                multiline={e.multiline}
                rows={e.numOfRows}
                type={e.type}
                error={e.error}
                className={classes.field}
                key={"field" + e.name}
                />)
              }
              <Button
              variant="contained"
              color="primary"
              className={`${classes.button} ${sendState === SendState.sending ? classes.buttonSending : ''}`}
              endIcon={sendState === SendState.sending ? <HourglassEmptyIcon/> : <TelegramIcon/>}
              disableElevation
              onClick={send}
              >
                <Translate trans={{
                  en: "Send",
                  pl: "Wyślij",
                  de: "Senden",
                }}/>
              </Button>
            </form>
          </div>
        </GrowOnDisplayed>
      </div>
      <Snackbar 
      open={snackBarOpen} 
      autoHideDuration={SendState.error ? 10000: 3000} 
      onClose={() => setSnackBarOpen(false)}
      >
        <Alert 
        onClose={() => setSnackBarOpen(false)} 
        severity={SendState.error ? "error" : "success"}
        >
          {
          SendState.error 
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
    </SectionBox>
  );
};

export default ContactSection;
