import Grow from "@material-ui/core/Grow/Grow";
import React, { FC } from "react";
import useHasBeenDisplayed from "../../utils/hooks/useHasBeenDisplayed";

interface Props {
  offset?: number,
  delay?: number,
};

const offset = 100;
const delay = 200;

const GrowOnDisplayed : FC<Props> = (props) => {
  const [ wasVisible, currentElement ] = useHasBeenDisplayed<HTMLDivElement>(
    props.offset ?? offset, 
    props.delay ?? delay);
  
  return (
    <div ref={currentElement} style={{ height: "100%" }}>
      <Grow in={wasVisible}>
        <div style={{ height: "100%" }}>{props.children}</div>
      </Grow>
    </div> 
  );
};

export default GrowOnDisplayed;