import { makeStyles } from "@material-ui/core";
import React from "react";
import {range} from "lodash";

interface Props {
  dotNumber: number,
  selected: number,
  onChecked: (item: number) => void,
};

const useStyles = makeStyles((theme) => ({
  dotsBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "spaceBetween",
  },
  dot: {
    height: 20,
    width: 20,
    borderRadius: "50%",
    margin: 10,
  },
  notChecked: {
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  checked: {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

const GallerySelectDots = (props: Props) => {
  const classes = useStyles();
  const {dotNumber, selected, onChecked} = props;

  return (
    <div className={classes.dotsBox}>
      {
        range(dotNumber)
        .map(e => 
            e === selected 
            ? <div className={`${classes.dot} ${classes.checked}`}></div>
            : <div className={`${classes.dot} ${classes.notChecked}`} onClick={() => onChecked(e)}/>
        )
      }
    </div>
  );
};

export default GallerySelectDots;