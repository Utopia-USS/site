import { makeStyles } from "@material-ui/core";
import React from "react";
import {range} from "lodash";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

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
    alignItems: "center",
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
  arrow: {
    height: 35,
    width: 35,
    margin: 10,
    color: theme.palette.secondary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    '& > *': {
      display: "block",
    },
    '&:hover': {
      color: theme.palette.secondary.dark,
    },
  },
}));

const GallerySelectDots = (props: Props) => {
  const classes = useStyles();
  const {dotNumber, selected, onChecked} = props;

  return (
    <div className={classes.dotsBox}>
      <div className={`${classes.arrow}`} onClick={(_) => onChecked(selected - 1)}>
        <ArrowBackIosIcon color={'inherit'}/>
      </div>
      {
        range(dotNumber)
        .map(e => 
            e === selected 
            ? <div className={`${classes.dot} ${classes.checked}`}></div>
            : <div className={`${classes.dot} ${classes.notChecked}`} onClick={() => onChecked(e)}/>
        )
      }
      <div className={`${classes.arrow}`} onClick={(_) => onChecked(selected + 1)}>
        <ArrowForwardIosIcon color={'inherit'}/>
      </div>
    </div>
  );
};

export default GallerySelectDots;