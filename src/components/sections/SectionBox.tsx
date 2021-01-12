import { makeStyles } from "@material-ui/core";
import React, { FC } from "react";
import SectionTitle from "./SectionTitle";
import { sectionsSettings } from "./SectionsSettings";

interface Props {
  sectionId: string,
}

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    width: "100%",
    border: "none",
    boxShadow: `inset 0 -2px 3px ${theme.palette.secondary.main}`,
  },
  sectionBody: {
    maxWidth: "1200px",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const GallerySection : FC<Props> = (props) => {
  const classes = useStyles();
  const section = sectionsSettings.sections.filter(
    (e) => e.id === props.sectionId,
  )[0];

  return (
    <section id={section.id} ref={section.ref} className={classes.section}>
      <SectionTitle title={section.name}/>
      <div className={classes.sectionBody}>
        {props.children}
      </div>
    </section>
  );
};

export default GallerySection;