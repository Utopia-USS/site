import { createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { RefObject } from "react";
import { Fragment } from "react";
import Translate from "../../../miscelanous/Translate";
import contactSettings from "../ContactSettings";
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

interface Props {
  contactDetailsElement: RefObject<HTMLDivElement>,
  displayContactDetails: boolean,
}

const ContactPerson = (props: Props) => {

  const {contactDetailsElement, displayContactDetails} = props;

  const {image, imageAlt, email, phone, description} = contactSettings.contactPerson;

  const useStyles = makeStyles((theme) =>
    createStyles({
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
    })
  );

  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.contactPersonBox}>
        <div className={classes.imageBox}>
          <img src={image} alt={imageAlt}/>
        </div>
        <Typography variant="body2" align="justify" color="textSecondary" component="p">
          <Translate trans={description}/>
        </Typography>
      </div>
      <div ref={contactDetailsElement} className={classes.contactDetailsBox}>
        <a href={`mailto:${displayContactDetails ? email : "obfuscated"}`} className={classes.contactInfo}>
          <EmailIcon/>
          <span>{displayContactDetails ? email : "obfuscated"}</span>
        </a>
        <a href={`tel:${displayContactDetails ? phone : "obfuscated"}`} className={classes.contactInfo}>
          <PhoneIcon/>
          <span>{displayContactDetails ? phone : "obfuscated"}</span>
        </a>
      </div>
    </Fragment>
  )
}

export default ContactPerson;