import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Translate, { Lang } from "../../../miscelanous/Translate";
import { UtopianField } from "../ContactSettings";
import { SendState } from "../hooks/useContactSection";
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import TelegramIcon from '@material-ui/icons/Telegram';

interface Props {
  fields: readonly UtopianField[],
  onValueChange: (val: any, index: number, validator: (val: any) => boolean) => void,
  lang: Lang,
  sendState: SendState,
  send: () => void,
}

const ContactForm = (props: Props) => {

  const {
    fields, 
    onValueChange, 
    lang, 
    sendState, 
    send,
  } = props;
  
  const useStyles = makeStyles((theme) =>
    createStyles({
      formBox: {
        marginTop: theme.spacing(5),
      },
      form: {
        margin: "auto",
        maxWidth: 500,
      },
      field: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        display: "block",
        width: "100%",
        backgroundColor: "white"
      },
      button: {
        pointerEvents: "auto",
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(3),
        "&:hover" : {
          backgroundColor: theme.palette.primary.light,
        },
      },
      buttonSending: {
        backgroundColor: theme.palette.primary.light,
      },
      checkbox: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
      checkboxError: {
        color: "red",
        borderColor: "red",
        "& *": {
          color: "red",
          borderColor: "red",
        }
      },
    })
  );

  const classes = useStyles();

  return (
    <form className={classes.form} noValidate autoComplete="off">
      {
        fields.map((e, i) => 
        e.isCheckbox
        ? <FormControlLabel
          key={"field" + e.name}
          className={`${classes.checkbox} ${e.error ? classes.checkboxError : ''}`}
          control={
            <Checkbox
              required={e.required}
              checked={e.value}
              onChange={(c) => onValueChange(c.target.checked, i, e.validation)}
              name={e.name}
              color="primary"
            />
          }
          label={
            <Typography variant="body2" align="justify" color="textSecondary" component="p">
              <Translate trans={e.label}/>{e.required ? ' *' : ''}
            </Typography>
          }
        />
        : <TextField
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
  )
}

export default ContactForm;