import { Button, Card, CardContent, CardMedia, createStyles, Fade, FilledInput, FormControl, FormHelperText, Grid, Icon, Input, InputLabel, makeStyles, OutlinedInput, TextField, Typography } from "@material-ui/core";
import { min, throttle } from "lodash";
import { stringify } from "querystring";
import React, { RefObject, useEffect, useState } from "react";
import { getWindowDimensions } from "../../../utils/getWindowDimensions";
import useWindowDimensions from "../../../utils/hooks/useWindowDimensions";
import sleep from "../../../utils/sleep";
import validateEmail from "../../../utils/validateEmail";
import GrowOnDisplayed from "../../miscelanous/GrowOnDisplayed";
import SectionTitle from "../components/SectionTitle";
import offerSectionSettings from "../offer/OfferSectionSettings";
import SectionBox from "../SectionBox";
import { sectionsSettings } from "../SectionsSettings";
import contactSettings from "./ContactSettings";
import TelegramIcon from '@material-ui/icons/Telegram';
import useHasBeenDisplayed from "../../../utils/hooks/useHasBeenDisplayed";
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

interface Props {}

const ContactSection = (props: Props) => {

  const [fields, setFormValues] = useState(contactSettings.form);

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
          borderColor: theme.palette.primary.dark,
          color: theme.palette.primary.dark,
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
        marginLeft: theme.spacing(3),
        "&:hover" : {
          backgroundColor: theme.palette.primary.dark,
        },
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
            {description}
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
                label={e.label}
                value={e.value}
                autoComplete={e.autoComplete}
                onChange={(c) => onValueChange(c.target.value, i, e.validation)}
                multiline={e.multiline}
                rows={e.numOfRows}
                type={e.type}
                error={e.error}
                className={classes.field}
                />)
              }
              <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<TelegramIcon/>}
              disableElevation
              >
              Send
              </Button>
            </form>
          </div>
        </GrowOnDisplayed>
      </div>
    </SectionBox>
  );
};

export default ContactSection;
