import { Container, makeStyles, Typography } from "@material-ui/core";
import { render } from "@testing-library/react";
import React from "react";

interface Props {
  title: string,
}

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    textTransform: "capitalize",
    margin: "0 auto",
    textAlign: "center",
    fontWeight: "normal",
  },
  titleContainer: {
    width: "100%",
    border: "none",
  },
}));

const SectionTitle = (props: Props) => { 
  const classes = useStyles();

  return (
    <div className={classes.titleContainer}>
      <Typography variant={"h5"} className={classes.title}>{ props.title }</Typography>
    </div>
  )
}

export default SectionTitle;