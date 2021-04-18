import {  createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import GrowOnDisplayed from "../../miscelanous/GrowOnDisplayed";
import SectionBox from "../components/SectionBox";
import useContactSection from "./hooks/useContactSection";
import ContactSectionSnackbar from "./components/ContactSectionSnackbar";
import ContactPerson from "./components/ContactPerson";
import ContactForm from "./components/ContactForm";

interface Props {}

const ContactSection = (props: Props) => {

  const {
    contactDetailsElement, 
    displayContactDetails, 
    onValueChange, 
    send, 
    sendState, 
    snackBarOpen,
    setSnackBarOpen, 
    lang,
    fields,
  } = useContactSection();

  const useStyles = makeStyles((theme) =>
    createStyles({
      root: {
        margin: "auto",
        maxWidth: 600,
      },
    })
  );

  const classes = useStyles();

  return (
    <SectionBox sectionId="contact-section">
      <div className={classes.root}>
        <GrowOnDisplayed>
          <ContactPerson
          contactDetailsElement={contactDetailsElement}
          displayContactDetails={displayContactDetails}
          />
        </GrowOnDisplayed>
        <GrowOnDisplayed>
          <div>
            <ContactForm
            fields={fields}
            onValueChange={onValueChange}
            lang={lang}
            sendState={sendState}
            send={send}
            />
          </div>
        </GrowOnDisplayed>
      </div>
      <ContactSectionSnackbar
      snackBarOpen={snackBarOpen}
      sendState={sendState}
      setSnackBarOpen={setSnackBarOpen}
      />
    </SectionBox>
  );
};

export default ContactSection;