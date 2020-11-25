import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import classes from "./Circle.module.css";
import "./GraphVizTwo.css";

export const GraphVisTwo = () => {
  const graphRef = useRef();

  var width = 150,
    height = 150;

  var nodes = [
    { name: "A" },
    { name: "B" },
    { name: "C" },
    { name: "D" },
    { name: "E" },
    { name: "F" },
    { name: "G" },
    { name: "H" },
  ];

  var links = [
    { source: 0, target: 1 },
    { source: 0, target: 2 },
    { source: 0, target: 3 },
    { source: 1, target: 3 },
    { source: 3, target: 2 },
    { source: 3, target: 4 },
    { source: 4, target: 5 },
    { source: 5, target: 6 },
    { source: 6, target: 7 },
    { source: 3, target: 7 },
  ];

  function updateNodes() {
    var u = d3.select(".vertexes").selectAll("circle").data(nodes);

    u.enter()
      .append("circle")
      .classed("node", true)
      .merge(u)
      .attr("cx", function (d) {
        return d.x;
      })
      .attr("cy", function (d) {
        return d.y;
      })
      .attr("r", 5)
      .attr("fill", "red");

    u.exit().remove();
  }
  function updateLinks() {
    let u = d3.select(".edges").selectAll("line").data(links);

    u.enter()
      .append("line")
      .classed("link", true)
      .merge(u)
      .attr("x1", function (d) {
        return d.source.x;
      })
      .attr("y1", function (d) {
        return d.source.y;
      })
      .attr("x2", function (d) {
        return d.target.x;
      })
      .attr("y2", function (d) {
        return d.target.y;
      });

    u.exit().remove();
  }

  function ticked() {
    updateLinks();
    updateNodes();
  }
  useEffect(() => {
    d3.forceSimulation(nodes)
      .force("charge", d3.forceManyBody().strength(-100))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("link", d3.forceLink().links(links))
      .on("tick", ticked);

    updateLinks();
    updateNodes();
  }, [height, links, nodes, ticked, updateLinks, updateNodes, width]);
  return (
    <>
      <div
        ref={graphRef}
        className={classes.wrapper}
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "0px",
          marginTop: "20px",
        }}
      >
        <svg width="150px" height="150px" viewBox="0 0 200 200">
          <g className="edges"></g>
          <g className="vertexes"></g>
        </svg>
      </div>
    </>
  );
};
