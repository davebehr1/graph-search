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
            <Typography variant="body1">
              Binary Search is searching technique which works on Divide and
              Conquer approach. It used to search any element in a sorted array.
              As compared to linear, binary search is much faster with Time
              Complexity of O(logN) whereas linear search algorithm works in
              O(N) time complexity
            </Typography>
            <br />
            <h3>Read more about linear search here</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <a
                className={classes.link}
                href="https://www.tutorialspoint.com/data_structures_algorithms/binary_search_algorithm.htm"
                target="_blank"
              >
                tutorialspoint
              </a>
              <a
                className={classes.link}
                href="https://www.geeksforgeeks.org/binary-search/"
                target="_blank"
              >
                Geeks for Geeks
              </a>
            </div>
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
