import React, { useContext, useRef, useEffect } from "react";

import classes from "./search.module.css";
import ReactPlayer from "react-player";
import { SimpleTabs } from "./Components/Tabs";
import { DepthFirstSearchQuiz } from "./DepthFirstSearchQuiz";
import { Typography } from "@material-ui/core";
import { ProgressContext } from "./Context";
import * as d3 from "d3";
import "./blocks/customblocks";
import "./generator/generator";
import { Blocky } from "./Block";
import { GraphVisTwo } from "./GraphVisTwo";
import { CopyBlock, dracula } from "react-code-blocks";
export function DepthFirstSearch() {
  const myRef = useRef();
  const { unlockedQuiz, setUnlockedQuiz } = useContext(ProgressContext);

  useEffect(() => {
    const svgElement = d3.select(myRef.current);
    svgElement.append("circle").attr("cx", 150).attr("cy", 70).attr("r", 50);
  }, []);

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.heading}>Depth First Search</h1>
      <SimpleTabs
        quizDisabled={unlockedQuiz === null ? true : unlockedQuiz === true}
        background={
          <div className={classes.background}>
            <Typography variant="body1" style={{ color: "#10144a" }}>
              What are Graphs
            </Typography>
            <Typography variant="body2">
              Graphs are discrete mathemetical models that come in many
              different flavors, such as simple graphs, uniderected graphs and
              directed graphs. Graphs are able to model complex behaviour. They
              are composed of vertices and edges, as seen in the diagram below
              the blue dots are the vertices and the lines are the edges
            </Typography>
            <GraphVisTwo />
            <Typography variant="body1" style={{ color: "#10144a" }}>
              Why is Graph traversal
            </Typography>
            <Typography variant="body2">
              Graph traversal is the process of visiting every vertex in a
              graph, there are many traversal algorithms out their that
              accomplish this in different ways such as Breadth First Search and
              Depth First Search. This lesson will focus on Depth First Search
            </Typography>
            <Typography variant="body1" style={{ color: "#10144a" }}>
              Why are graphs important
            </Typography>
            <Typography variant="body2">
              Graphs have many different applications, because they are able to
              model complex relationships and entities. Two use cases for graphs
              would be modeling the infamous traveling salesman problem in which
              a salesman has to find the shortest route to all destinations and
              back to the start. The traveling salesman has massive implications
              for the logistics industry and there have many approximations that
              have modeled the problem using a graph. A technique called graph
              coloring has been used to schedule exams so that they do not
              conflict with one another
            </Typography>
            <br />

            <ReactPlayer
              url="https://youtu.be/Y40bRyPQQr0"
              style={{ margin: "30px" }}
            />
          </div>
        }
        DepthFirstSearch={
          <>
            <Typography variant="body1">Depth First search is </Typography>
            <Typography variant="body1">
              Depth First search (DFS) as mentioned in the background is a tree
              traversal algorithm, it can be applied to uniderected graphs (also
              known as a tree) and cyclic graphs. The only change that is made
              when applying the algorithm to a cyclic graph is to keep track of
              visited nodes so as to not visit them again. The algorithm
              explores a graph by exploring each possible branch until it cant
              go anymore then it back tracks.
            </Typography>
            <Typography variant="body1">DFS algorithm </Typography>
            <CopyBlock
              text={
                "class Node:\ndef __init__(self, key):\n self.left = None\n self.right = None\n self.val = key\ndef printInorder(root):\n if root:\n  printInorder(root.left)\n  print(root.val),\n  printInorder(root.right)\nroot = Node(1)\nroot.left = Node(2)\nroot.right = Node(3)\nroot.left.left = Node(4)\nroot.left.right = Node(5)\n print 'Inorder traversal of binary tree is' printInorder(root)\n"
              }
              language={"python"}
              showLineNumbers={true}
              wrapLines
              theme={dracula}
            />
          </>
        }
        problemAndExample={<Blocky />}
        quiz={<DepthFirstSearchQuiz />}
      />
    </div>
  );
}
