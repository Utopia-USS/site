import { makeStyles } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import {forceCenter, forceCollide, forceManyBody, forceSimulation, forceX, forceY, pointer, scaleLinear, select, SimulationNodeDatum} from 'd3';
import { appThemeInstance } from "../../AppTheme";
import { mean, range } from "lodash";

interface Props {

}

class Node implements SimulationNodeDatum {
  fx?: number;
  fy?: number;
  gravity?:number;
  constructor (public id: number, public x: number, public y: number, public r: number, public colour: string) {}
}

interface GenerateNodesParams {
  height: number,
  width: number,
  coverage: number,
  radiuses: number[],
  colours: string[],
}

const randomFromRange = (n: number) => Math.floor(Math.random() * n);

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
    width: "100%",
    height: "100%",
    backgroundColor: "inherited",
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
  const root = useRef<SVGSVGElement>(null);

  const createAnime = (width: number, height: number) => {
    const svg = select(`#${rootId}`);

    const nodes: Node[] = generateNodes({
      height: height,
      width: width,
      coverage: config.coverage,
      radiuses: config.radiuses,
      colours: config.colors,
    });

    const bigBall = new Node(
      nodes.length,
      Math.floor(width / 2),
      Math.floor(height / 2),
      40,
      "rgba(0,0,0,0)",
    );
    bigBall.gravity = -500;

    nodes.push(bigBall);

    const simulation = forceSimulation()
      .nodes(nodes)
      .alphaTarget(0.1) // stay hot
      .velocityDecay(0.02) // low friction
      .force("x", forceX(width / 2).strength(width > height ? 0.01 : 0.02))
      .force("y", forceY(height / 2).strength(width < height ? 0.01 : 0.02))
      .force("charge", forceManyBody().strength(
        (element, _, __) => {
          const node = element as Node;
          return node.gravity 
          ? node.gravity 
          : -(node.r * node.r / 10);
        }
      ))
      .force("overlapping", forceCollide((node, _, __) => (node as Node).r))
      // .force("gravity", forceCenter())

    const pointed = (event: any) => {
      const [x, y] = pointer(event);
      const last = nodes[nodes.length - 1];
      last.fx = x;
      last.fy = y;
    }

    svg
      .on("touchmove", event => event.preventDefault())
      .on("pointermove", pointed);

    const singleNode = svg.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(nodes)
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
    const current = root.current;
    if(current) {
      current.innerHTML = '';
      const {width, height} = current.getClientRects()[0];
      createAnime(width, height);
    }
  });

  return (
    <svg id={rootId} className={classes.root} ref={root}/>
  )
}

export default SexiDotAnime;