import React, { useState, useContext } from "react";
import classes from "./search.module.css";
import ReactPlayer from "react-player";
import { clipPaths } from "./Home";
import { ClipButton } from "./Components/ClipButton";
import { SimpleTabs } from "./Components/Tabs";
import { LinearQuiz } from "./LinearQuiz";
import { ProgressContext } from "./Context";

export function LinearSearch() {
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
    { number: 101, color: "transparent" },
    { number: 200, color: "transparent" },
    { number: 300, color: "transparent" },
    { number: 4, color: "transparent" },
    { number: 534, color: "transparent" },
    { number: 62, color: "transparent" },
    { number: 72, color: "transparent" },
    { number: 81, color: "transparent" },
    { number: 1, color: "transparent" },
  ]);

  const [problemIndex, setProblemIndex] = useState(0);

  const [message, setMessage] = useState("");

  const [searchValue, setSearchValue] = useState(8);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const getSearchOrder = (array) => {
    let vals = [];
    for (var i = 0; i < array.length; i++) {
      let tempArr = [...array];

      vals.push(tempArr[i].number);

      if (array[i].number === parseInt(72)) return vals;
    }
    return vals;
  };
  const search = async () => {
    for (var i = 0; i < arr.length; i++) {
      let tempArr = [...arr];

      tempArr.forEach((item, index) => {
        item.color = "transparent";
      });
      tempArr[i].color = "#2F486E";

      setArr(tempArr);

      if (arr[i].number === parseInt(searchValue)) return true;
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
      <h1 className={classes.heading}>Linear Search</h1>
      <SimpleTabs
        quizDisabled={
          unlockedQuizes === null
            ? true
            : !unlockedQuizes.includes("linear-search")
        }
        background={
          <div className={classes.background}>
            <p>
              Linear search also known as sequential search is a simple
              searching algorithm for finding an element within a list. The way
              this searching algorithm works is that every element in the list
              is checked sequentially starting from index 0 of an array if a
              match is found then that particular element is returned otherwise
              a null or -1 is return to indicate that the element was not found
              in the array that was being searched. In linear search you do not
              have to sort the array before the search takes place and thus no
              preprocessing of data is necessary
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
                  href="https://www.tutorialspoint.com/data_structures_algorithms/linear_search_algorithm.html"
                  target="_blank"
                >
                  tutorialspoint
                </a>
                <a
                  className={classes.link}
                  href="https://www.geeksforgeeks.org/linear-search/"
                  target="_blank"
                >
                  Geeks for Geeks
                </a>
              </div>
            </p>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=aqFTmGbKajI"
              style={{ margin: "30px" }}
            />
          </div>
        }
        prosAndCons={
          <>
            <h1>Pros</h1>
            <ul>
              <li>Linear search is simple to implement</li>
              <li>It is practical when the list has only a few elements.</li>
              <li>
                The list needs no preprocessing and can be search when
                unordered.
              </li>
            </ul>
            <h1>Cons</h1>
            <ul>
              <li>
                Linear search can be slow when used on large list (other
                searching algorithms such as the binary search algorithm and
                hash tables allow significantly faster searching compared to
                Linear search).
              </li>
              <li>
                Linear search requires that all elements of a list be search
                before it can determine if an element is within that list for
                the worst case.
              </li>
            </ul>
          </>
        }
        example={
          <>
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
          </>
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
              {" "}
              Find the murderer known as 72 by clicking on each suspect until
              you have found the murderer using linear search.
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
                        getSearchOrder(problemArr).length
                      ) {
                        setMessage("you have earned the linear search badge");
                        setProblemIndex(0);
                        let badges;
                        badges = JSON.parse(localStorage.getItem("badges"));
                        badges.linear = true;
                        localStorage.setItem("badges", JSON.stringify(badges));
                      }
                      if (
                        getSearchOrder(problemArr)[problemIndex] === item.number
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
                      if (vals.includes("linear-search") === false) {
                        vals.push("linear-search");
                      }
                      localStorage.setItem(
                        "unlockedQuizes",
                        JSON.stringify(vals)
                      );

                      if (unlockedQuizes) {
                        setUnlockedQuizes([...unlockedQuizes, "linear-search"]);
                      } else {
                        setUnlockedQuizes(["linear-search"]);
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
              notation.
            </h2>
            <ul>
              <li>Worst-case performance O (n)</li>
              <li>Best-case performance O (1)</li>
              <li>Average performance O((n+1)/2) </li>
            </ul>

            <h3>
              This means that linear search runs at worst in linear time and
              makes at most n comparisons, where n is the length of the list. If
              each element is equally likely to be searched, then linear search
              has an average case of (n+1)/n comparisons, but the average case
              can be affected if the search probabilities for each element vary.
              Thus as a result other searching algorithms may be faster than
              linear search for instance binary search however in practice even
              on medium sized arrays (around 100 items) it might be infeasible
              to use anything else as the initial time to preprocess the
              data(sort) can be comparable to linear time taken to search the
              array and therefore it is a practical searching algorithm if the
              data being searched is not too large.
            </h3>
          </>
        }
        quiz={<LinearQuiz />}
      />
    </div>
  );
}
