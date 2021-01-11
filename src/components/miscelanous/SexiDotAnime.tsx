import { makeStyles } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import {forceCenter, forceCollide, forceManyBody, forceSimulation, forceX, forceY, scaleLinear, select, SimulationNodeDatum} from 'd3';
import { appThemeInstance } from "../../AppTheme";
import { mean, range } from "lodash";

interface Props {

}

class Node implements SimulationNodeDatum {
  constructor (public id: number, public x: number, public y: number, public r: number, public colour: string) {}
}

interface GenerateNodesParams {
  height: number,
  width: number,
  coverage: number,
  radiuses: number[],
  colours: string[],
}

const generateNodes = ({
  height,
  width,
  coverage,
  radiuses,
  colours,
}: GenerateNodesParams): Node[] => {
  const area = height * width;
  const averageDotArea = mean(radiuses.map((r) => 3.14*r*r/2));
  const nodeCount = Math.floor(area * coverage / averageDotArea);
  const randomFromRange = (n: number) => Math.floor(Math.random() * n);
  return range(nodeCount).map((i) => new Node(
    i,
    randomFromRange(width),
    randomFromRange(height),
    radiuses[randomFromRange(radiuses.length)],
    colours[randomFromRange(colours.length)],
  ));
}

const rootId = "sexiDotAnimeId";

const width = 500;
const height = 500;

const useStyles = makeStyles((theme) => ({
  root: {
    width: width,
    height: height,
    border: "solid 1px",
    backgroundColor: "white",
    //width: "100%",
    //height: "100%",
  },
}));

const config = {
  radiuses: [10, 15],
  colors: [appThemeInstance.palette.primary.light, appThemeInstance.palette.secondary.light],
  coverage: 0.1,
}

const SexiDotAnime = (props: Props) => { 
  const classes = useStyles();


  const createAnime = () => {
    const svg = select(`#${rootId}`);

    svg.on("mouseover")

    var nodes_data: Node[] =  generateNodes({
      height: height,
      width: width,
      coverage: config.coverage,
      radiuses: config.radiuses,
      colours: config.colors,
    });

    const simulation = forceSimulation()
      .nodes(nodes_data)
      .alphaTarget(0.1) // stay hot
      .velocityDecay(0.05) // low friction
      .force("x", forceX(width / 2).strength(0.01))
      .force("y", forceY(height / 2).strength(0.01))
      .force("charge", forceManyBody().strength(
        (node, index, data) => -(node as Node).r
        ))
      .force("overlapping", forceCollide());
      // .force("gravity", forceCenter())

    const singleNode = svg.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(nodes_data)
      .enter()
      .append("circle")
      .attr("r", (node) => node.r)
      .attr("fill", (node) => node.colour);

    function tickActions() {
      //update circle positions to reflect node updates on each tick of the simulation 
      singleNode
          .attr("cx", function(d) { return d.x; })
          .attr("cy", function(d) { return d.y; })
    }

    simulation.on("tick", tickActions );
  }

  useEffect(() => {
    createAnime();
  });

  return (
    <svg id={rootId} className={classes.root}/>
  )
}

export default SexiDotAnime;