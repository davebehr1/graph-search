import React, { useContext, useRef, useEffect } from "react";

import classes from "./search.module.css";

import { SimpleTabs } from "./Components/Tabs";
import { DepthFirstSearchQuiz } from "./DepthFirstSearchQuiz";
import { Typography } from "@material-ui/core";
import { ProgressContext } from "./Context";
import * as d3 from "d3";
import "./blocks/customblocks";
import "./generator/generator";
import { Blocky } from "./Block";
import { DFS } from "./DFS";
import { CopyBlock, dracula } from "react-code-blocks";
export function DepthFirstSearch() {
  const myRef = useRef();
  const { unlockedQuiz } = useContext(ProgressContext);

  useEffect(() => {
    const svgElement = d3.select(myRef.current);
    svgElement.append("circle").attr("cx", 150).attr("cy", 70).attr("r", 50);
  }, []);

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.heading}>Depth First Search</h1>
      <SimpleTabs
        quizDisabled={unlockedQuiz === null ? true : unlockedQuiz === false}
        DepthFirstSearch={
          <>
            <Typography
              variant="body1"
              style={{ color: "#10144a", marginBottom: "10px" }}
            >
              What is Depth First Search
            </Typography>
            <Typography variant="body2">
              Depth First search (DFS) as mentioned in the background is a tree
              traversal algorithm, it can be applied to uniderected graphs (also
              known as a tree) and cyclic graphs. The only change that is made
              when applying the algorithm to a cyclic graph is to keep track of
              visited nodes so as to not visit them again. The algorithm
              explores a graph by exploring each possible branch until it cant
              go anymore then it back tracks.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#10144a", marginBottom: "10px" }}
            >
              Step by step DFS algorithm
            </Typography>
            <DFS />
            <Typography
              variant="body1"
              style={{ color: "#10144a", marginBottom: "10px" }}
            >
              DFS code in python using recursion
            </Typography>
            <CopyBlock
              text={
                "def DFSUtil(self, v, visited):\n   visited.add(v)\n   print v,\n   for neighbour in self.graph[v]:\n     if neighbour not in visited:\n      self.DFSUtil(neighbour, visited)\ndef DFS(self):\n visited = set()\n for vertex in list(self.graph):\n   if vertex not in visited:\n     self.DFSUtil(vertex, visited)\n"
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
