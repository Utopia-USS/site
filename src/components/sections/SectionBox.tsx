import { makeStyles } from "@material-ui/core";
import React, { FC } from "react";
import SectionTitle from "./components/SectionTitle";
import { sectionsSettings } from "./SectionsSettings";

interface Props {
  sectionId: string,
}

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(3),
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
      {props.children}
    </section>
  );
};

export default GallerySection;