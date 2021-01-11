import { Container, makeStyles, Typography } from "@material-ui/core";
import { render } from "@testing-library/react";
import React from "react";

interface Props {
  title: string,
}

const useStyles = makeStyles((theme) => ({
  title: {
    padding: theme.spacing(6),
    textTransform: "capitalize",
    margin: "0 auto",
    textAlign: "center",
    fontWeight: "bold",
  },
  titleContainer: {
    borderBottom: `8px dotted ${theme.palette.primary.light}`,
    marginBottom: theme.spacing(6),
  }
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