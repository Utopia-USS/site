import { Button, createStyles, makeStyles, TextField, Typography } from "@material-ui/core";
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import TelegramIcon from '@material-ui/icons/Telegram';
import axios from "axios";
import React, { useState } from "react";
import useHasBeenDisplayed from "../../../utils/hooks/useHasBeenDisplayed";
import GrowOnDisplayed from "../../miscelanous/GrowOnDisplayed";
import Translate, { useLang } from "../../miscelanous/Translate";
import SectionBox from "../SectionBox";
import contactSettings from "./ContactSettings";

interface Props {}

const ContactSection = (props: Props) => {

  const [fields, setFormValues] = useState(contactSettings.form);

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
    })
  );

  const classes = useStyles();

  const {image, imageAlt, email, phone, description} = contactSettings.contactPerson;

  const send = () => axios.post('/contact.php', {
    name: 'Fred',
    surename: 'Flintstone',
    email: 'freddyflinstone@malpa.lp',
    message: 'moja duda jest mojasza'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

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
              className={classes.button}
              endIcon={<TelegramIcon/>}
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
    </SectionBox>
  );
};

export default ContactSection;
