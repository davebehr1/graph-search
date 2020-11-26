import React, { useContext, useRef, useEffect } from "react";

import classes from "./search.module.css";
import ReactPlayer from "react-player";
import { Typography } from "@material-ui/core";
import { ProgressContext } from "./Context";
import * as d3 from "d3";
import "./blocks/customblocks";
import "./generator/generator";
import { GraphVisTwo } from "./GraphVisTwo";
export function GraphTheory() {
  const myRef = useRef();
  const { unlockedQuiz } = useContext(ProgressContext);

  useEffect(() => {
    const svgElement = d3.select(myRef.current);
    svgElement.append("circle").attr("cx", 150).attr("cy", 70).attr("r", 50);
  }, []);

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.heading}>Depth First Search</h1>

      <div className={classes.background}>
        <Typography variant="body1" style={{ color: "#10144a" }}>
          What are Graphs
        </Typography>
        <Typography variant="body2">
          Graphs are discrete mathemetical models that come in many different
          flavors, such as simple graphs, uniderected graphs and directed
          graphs. Graphs are able to model complex behaviour. They are composed
          of vertices and edges, as seen in the diagram below the blue dots are
          the vertices and the lines are the edges
        </Typography>
        <GraphVisTwo />
        <Typography variant="body1" style={{ color: "#10144a" }}>
          Why is Graph traversal
        </Typography>
        <Typography variant="body2">
          Graph traversal is the process of visiting every vertex in a graph,
          there are many traversal algorithms out their that accomplish this in
          different ways such as Breadth First Search and Depth First Search.
          This lesson will focus on Depth First Search
        </Typography>
        <Typography variant="body1" style={{ color: "#10144a" }}>
          Why are graphs important
        </Typography>
        <Typography variant="body2">
          Graphs have many different applications, because they are able to
          model complex relationships and entities. Two use cases for graphs
          would be modeling the infamous traveling salesman problem in which a
          salesman has to find the shortest route to all destinations and back
          to the start. The traveling salesman has massive implications for the
          logistics industry and there have many approximations that have
          modeled the problem using a graph. A technique called graph coloring
          has been used to schedule exams so that they do not conflict with one
          another
        </Typography>
        <br />

        <ReactPlayer
          url="https://youtu.be/Y40bRyPQQr0"
          style={{ margin: "30px" }}
        />
      </div>
    </div>
  );
}
