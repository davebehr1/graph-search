import React, { useState, useContext } from "react";
import classes from "./search.module.css";
import ReactPlayer from "react-player";
import { clipPaths } from "./Home";
import { ClipButton } from "./Components/ClipButton";
import { SimpleTabs } from "./Components/Tabs";
import { BinaryQuiz } from "./BinaryQuiz";
import { Typography } from "@material-ui/core";
import { ProgressContext } from "./Context";

export function BinarySearch() {
  const [arr, setArr] = useState([
    { number: 1, color: "transparent" },
    { number: 2, color: "transparent" },
    { number: 3, color: "transparent" },
    { number: 4, color: "transparent" },
    { number: 5, color: "transparent" },
    { number: 6, color: "transparent" },
    { number: 7, color: "transparent" },
    { number: 8, color: "transparent" },
    { number: 9, color: "transparent" },
  ]);

  const { unlockedQuizes, setUnlockedQuizes } = useContext(ProgressContext);

  const [problemArr, setProblemArr] = useState([
    { number: 1, color: "transparent" },
    { number: 4, color: "transparent" },
    { number: 62, color: "transparent" },
    { number: 72, color: "transparent" },
    { number: 81, color: "transparent" },
    { number: 101, color: "transparent" },
    { number: 200, color: "transparent" },
    { number: 300, color: "transparent" },
    { number: 534, color: "transparent" },
  ]);

  const [problemIndex, setProblemIndex] = useState(0);

  const [message, setMessage] = useState("");

  const [searchValue, setSearchValue] = useState(8);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const getSearchOrder = (array, searchValue) => {
    array = array.sort();
    let x = parseInt(searchValue);

    let vals = [];
    let start = 0,
      end = array.length - 1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      vals.push(array[mid].number);
      if (array[mid].number === x) {
        return vals;
      } else if (array[mid].number < x) {
        start = mid + 1;
      } else end = mid - 1;
    }
    return vals;
  };

  const search = async () => {
    let x = parseInt(searchValue);

    let start = 0,
      end = arr.length - 1;

    // Iterate while start not meets end
    while (start <= end) {
      // Find the mid index
      let mid = Math.floor((start + end) / 2);
      let tempArr = [...arr];

      tempArr.forEach((item, index) => {
        item.color = "transparent";
      });
      tempArr[mid].color = "#2F486E";

      setArr(tempArr);

      // If element is present at mid, return True
      if (arr[mid].number === x) {
        return true;
      }
      // Else look in left or right half accordingly
      else if (arr[mid].number < x) start = mid + 1;
      else end = mid - 1;
      await delay(800);
    }

    return false;
  };

  function handleSubmit(event) {
    search();
    event.preventDefault();
  }

  function handleChange(event) {
    setSearchValue(event.target.value);
  }
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.heading}>BinarySearch</h1>
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
        example={
          <div>
            <div className={classes.array}>
              {arr.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={classes.arrayItem}
                    style={{ background: item.color }}
                  >
                    {item.number}
                  </div>
                );
              })}
            </div>
            <form onSubmit={handleSubmit} className={classes.form}>
              <label>
                <input
                  type="number"
                  min="1"
                  max="9"
                  value={searchValue}
                  onChange={handleChange}
                  className={classes.input}
                />
              </label>
              <ClipButton
                className={classes.button}
                type={"submit"}
                label={"search"}
                clipPath={clipPaths[0]}
                padding="20px"
                fontSize="20px"
              />
            </form>
          </div>
        }
        problem={
          <>
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#e6d470",
              }}
            >
              Find the murderer known as 300 by clicking on each suspect until
              you have found the murderer using binary search.
            </h2>
            <div className={classes.array}>
              {problemArr.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={classes.arrayItem}
                    onClick={() => {
                      if (
                        problemIndex + 1 ===
                        getSearchOrder(problemArr, 300).length
                      ) {
                        setMessage("you have earned the binary search badge");
                        setProblemIndex(0);
                        let badges;
                        badges = JSON.parse(localStorage.getItem("badges"));
                        badges.binary = true;
                        localStorage.setItem("badges", JSON.stringify(badges));
                      }
                      if (
                        getSearchOrder(problemArr, 300)[problemIndex] ===
                        item.number
                      ) {
                        setProblemIndex((prev) => prev + 1);
                        let tempArr = [...problemArr];
                        tempArr[index].color = "blue";
                        setProblemArr(tempArr);

                        setTimeout(() => {
                          tempArr[index].color = "transparent";
                          setProblemArr(tempArr);
                        }, 800);
                      } else {
                        let tempArr = [...problemArr];
                        tempArr[index].color = "red";
                        setProblemArr(tempArr);

                        setTimeout(() => {
                          tempArr[index].color = "transparent";
                          setProblemArr(tempArr);
                        }, 800);
                        setMessage("try again");
                        setProblemIndex(0);
                      }

                      let vals = [];
                      vals = JSON.parse(localStorage.getItem("unlockedQuizes"));
                      if (vals.includes("binary-search") === false) {
                        vals.push("binary-search");
                      }
                      localStorage.setItem(
                        "unlockedQuizes",
                        JSON.stringify(vals)
                      );
                      if (unlockedQuizes) {
                        setUnlockedQuizes([...unlockedQuizes, "binary-search"]);
                      } else {
                        setUnlockedQuizes(["binary-search"]);
                      }
                    }}
                    style={{ background: item.color }}
                  >
                    {item.number}
                  </div>
                );
              })}
            </div>
            <h3 style={{ display: "flex", justifyContent: "center" }}>
              {message}
            </h3>
          </>
        }
        performance={
          <>
            <h2>
              The following list below displays the Worst-case, Best-case and
              Average performance for the complexity of linear search in Big O
              notation
            </h2>
            <ul>
              <li>Worst-case performance O(log n)</li>
              <li>Worst-case performance O(log n)</li>
              <li>Worst-case performance O(log n)</li>
            </ul>

            <h3>
              Just like linear search, the binary search algorithm best-case
              performance is O(1) however they differ in their average and worst
              cases, where binary search out performs linear search. In terms of
              iterations, no search algorithm that works only by comparing
              elements can exhibit better average and worst-case performance
              than binary search
            </h3>
          </>
        }
        quiz={<BinaryQuiz />}
      />
    </div>
  );
}
