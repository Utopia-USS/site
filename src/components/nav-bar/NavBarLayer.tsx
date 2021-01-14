import { makeStyles } from "@material-ui/core";
import { render } from "@testing-library/react";
import React, { FC } from "react";

interface Props {
  zIndex: number,
  className?: string,
}

const NavBarLayer : FC<Props> = (props) => {
  const {className, children} = props;

  const useStyles = makeStyles((theme) => ({
    layer: {
      zIndex: props.zIndex,
      position: "absolute",
    },
  }));

  const classes = useStyles();

  return (
    <div className={`${classes.layer} ${className ? className : ''}`}>
      {children}
    </div>
  )
}

export default NavBarLayer;