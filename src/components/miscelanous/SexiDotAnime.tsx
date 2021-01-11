import { makeStyles } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import {color, forceCenter, forceCollide, forceManyBody, forceSimulation, forceX, forceY, pointer, scaleLinear, select, SimulationNodeDatum} from 'd3';
import { appThemeInstance } from "../../AppTheme";
import { mean, range } from "lodash";

interface Props {

}

class Node implements SimulationNodeDatum {
  fx?: number;
  fy?: number;
  gravity?:number;
  constructor (public id: number, public x: number, public y: number, public r: number, public color: string) {}
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
  const root = useRef<HTMLCanvasElement>(null);

  const [isSimulation, setIsSimultaion] = useState(false);

  const createAnime = (width: number, height: number) => {
    const canvas = select<HTMLCanvasElement, {}>(`#${rootId}`);

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

    canvas
      .on("touchmove", event => event.preventDefault())
      .on("pointermove", pointed);

    function tickActions() {
      const context = canvas.node()?.getContext('2d');
      const canvasNode = canvas.node();
      if(context) {
        context.clearRect(0, 0, width, height);
        context.save();
        //context.translate(width / 2, height / 2);
        for (const d of nodes) {
          context.beginPath();
          context.moveTo(d.x + d.r, d.y);
          context.arc(d.x, d.y, d.r, 0, 2 * Math.PI);
          context.fillStyle = d.color;
          context.fill();
        }
      }
    }

    simulation.on("tick", tickActions );
  }

  useEffect(() => {
    const current = root.current;
    if(current) {
      const {width, height} = current.getClientRects()[0];
      current.width = width;
      current.height = height;

      if(!isSimulation) {
        createAnime(width, height);
        setIsSimultaion(true);
      }
    }
  });

  return (
    <canvas id={rootId} className={classes.root} ref={root}/>
  )
}

export default SexiDotAnime;