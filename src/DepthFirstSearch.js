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

export function DepthFirstSearch() {
  const myRef = useRef();
  const { unlockedQuizes, setUnlockedQuizes } = useContext(ProgressContext);

  useEffect(() => {
    const svgElement = d3.select(myRef.current);
    svgElement.append("circle").attr("cx", 150).attr("cy", 70).attr("r", 50);
  }, []);

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.heading}>Depth First Search</h1>
      <SimpleTabs
        quizDisabled={
          unlockedQuizes === null
            ? true
            : !unlockedQuizes.includes("binary-search")
        }
        background={
          <div className={classes.background}>
            <Typography variant="body1">What are Graphs</Typography>
            <Typography variant="body1">Why are they important</Typography>
            <Typography variant="body1">What is Graph Traversal</Typography>
            <br />

            <ReactPlayer
              url="https://www.youtube.com/watch?v=T2sFYY-fT5o"
              style={{ margin: "30px" }}
            />
          </div>
        }
        prosAndCons={
          <>
            <h1>Pros</h1>
            <ul>
              <li>
                Binary search is an optimal searching algorithm Binary search is
                easy to implement
              </li>
            </ul>
            <h1>Cons</h1>
            <ul>
              <li>
                Binary search is an optimal searching algorithm Binary search is
                easy to implement
              </li>
            </ul>
          </>
        }
        problem={<Blocky />}
        example={<></>}
        performance={<></>}
        quiz={<DepthFirstSearchQuiz />}
      />
    </div>
  );
}
