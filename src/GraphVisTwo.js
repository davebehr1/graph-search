import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import classes from "./Circle.module.css";
import { Button } from "@material-ui/core";
import "./GraphVizTwo.css";

export const GraphVisTwo = () => {
  const ref = useRef();

  var i = 0,
    animDuration = 500,
    root;

  var width = 150,
    height = 150;

  var nodes = [
    { name: "A" },
    { name: "B" },
    { name: "C" },
    { name: "D" },
    { name: "E" },
  ];

  var links = [
    { source: 0, target: 1 },
    { source: 0, target: 2 },
    { source: 0, target: 3 },
    { source: 1, target: 3 },
    { source: 3, target: 2 },
    { source: 3, target: 4 },
  ];

  function resetTraversal(root) {
    //d3.selectAll(".node").classed("visited",false);
    d3.selectAll(".node")
      .transition()
      .duration(animDuration)
      .style("fill", "#fff")
      .style("stroke", "steelblue");
  }

  function updateNodes() {
    var u = d3.select(".nodes").selectAll("circle").data(nodes);

    u.enter()
      .append("circle")
      .classed("node", true)
      //   .text(function (d) {
      //     return d.name;
      //   })
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
    let u = d3.select(".links").selectAll("line").data(links);

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

  function visitElement(element, animX) {
    d3.select("svg g.nodes")
      .selectAll("circle.node")
      .filter(function (d) {
        return d.data.name == element.data.name;
      })
      .transition()
      .duration(animDuration)
      .delay(animDuration * animX)
      .style("fill", "orange")
      .style("stroke", "orange");
  }

  function dft() {
    var stack = [];
    var animX = 0;
    stack.push(root);

    while (stack.length !== 0) {
      var element = stack.pop();
      visitElement(element, animX);
      animX = animX + 1;
      if (element.children !== undefined) {
        for (var i = 0; i < element.children.length; i++) {
          stack.push(element.children[element.children.length - i - 1]);
        }
      }
    }
  }
  function ticked() {
    updateLinks();
    updateNodes();
  }
  useEffect(() => {
    d3.forceSimulation(nodes)
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("link", d3.forceLink().links(links))
      .on("tick", ticked);

    updateLinks();
    updateNodes();
  }, []);
  return (
    <>
      <Button
        onClick={() => dft()}
        style={{ background: "#f50057", width: "100%" }}
      >
        Traverse
      </Button>
      <div ref={ref} className={classes.wrapper}>
        <svg width="100%" height="100%">
          <g class="links"></g>
          <g class="nodes"></g>
        </svg>
      </div>
    </>
  );
};
