import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import classes from "./Circle.module.css";
import { Button } from "@material-ui/core";

export const GraphVis = () => {
  const ref = useRef();

  var i = 0,
    animDuration = 500,
    root;

  var data = {
    name: "A1",
    children: [
      {
        name: "B1",
        children: [
          {
            name: "C1",
            value: 100,
          },
          {
            name: "C2",
            value: 300,
          },
          {
            name: "C3",
            value: 200,
          },
        ],
      },
      {
        name: "B2",
        value: 200,
      },
    ],
  };
  var root = d3.hierarchy(data);

  function resetTraversal(root) {
    //d3.selectAll(".node").classed("visited",false);
    d3.selectAll(".node")
      .transition()
      .duration(animDuration)
      .style("fill", "#fff")
      .style("stroke", "steelblue");
  }

  function update(root) {
    resetTraversal(root);

    d3.select("svg g.nodes")
      .selectAll("circle.node")
      .data(root.descendants())
      .enter()
      .append("circle")
      .classed("node", true)
      .attr("cx", function (d) {
        return d.x;
      })
      .attr("cy", function (d) {
        return d.y;
      })
      .attr("r", 5)
      .attr("fill", "red");

    d3.select("svg g.links")
      .selectAll("line.link")
      .data(root.links())
      .enter()
      .append("line")
      .classed("link", true)
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
      })
      .attr("r", 5)
      .attr("style", "stroke:rgb(255,0,0);stroke-width:2");

    //Styling consideration
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
  useEffect(() => {
    var treeLayout = d3.tree();
    treeLayout.size([150, 220]);
    treeLayout(root);

    update(root);
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
        <svg width="200" height="250">
          <g transform="translate(5, 5)">
            <g class="links"></g>
            <g class="nodes"></g>
          </g>
        </svg>
      </div>
    </>
  );
};
