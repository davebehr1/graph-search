import React, { useState, useEffect, useContext } from "react";
import classes from "./search.module.css";
import ReactPlayer from "react-player";
import { clipPaths } from "./Home";
import { ClipButton } from "./Components/ClipButton";
import { SimpleTabs } from "./Components/Tabs";
import { HashingQuiz } from "./HashingQuiz";
import { ProgressContext } from "./Context";

export function Hashing() {
  const { unlockedQuizes, setUnlockedQuizes } = useContext(ProgressContext);

  const [arr] = useState([
    { number: 2, color: "transparent" },
    { number: 4, color: "transparent" },
    { number: 5, color: "transparent" },
    { number: 3, color: "transparent" },
    { number: 8, color: "transparent" },
  ]);
  const [message, setMessage] = useState("");

  const [answer, setAnswer] = useState();

  useEffect(() => {
    let values = [];
    values = JSON.parse(localStorage.getItem("unlockedPages"));
    if (values.includes("hashing") === false) {
      values.push("hashing");
    }

    localStorage.setItem("unlockedPages", JSON.stringify(values));
  }, []);

  function handleSubmit(event) {
    if (parseInt(answer) === 6) {
      setMessage("you have earned the hashing search badge");
      let badges;
      badges = JSON.parse(localStorage.getItem("badges"));
      badges.hashing = true;
      localStorage.setItem("badges", JSON.stringify(badges));
    } else {
      setMessage("try again");
    }

    let vals = [];
    vals = JSON.parse(localStorage.getItem("unlockedQuizes"));
    if (vals.includes("hashing") === false) {
      vals.push("hashing");
    }
    localStorage.setItem("unlockedQuizes", JSON.stringify(vals));

    if (unlockedQuizes) {
      setUnlockedQuizes([...unlockedQuizes, "hashing"]);
    } else {
      setUnlockedQuizes(["hashing"]);
    }

    event.preventDefault();
  }

  function handleChange(event) {
    setAnswer(event.target.value);
  }
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.heading}>Hashing</h1>
      <SimpleTabs
        quizDisabled={
          unlockedQuizes === null ? true : !unlockedQuizes.includes("hashing")
        }
        background={
          <div className={classes.background}>
            <p>
              Unlike Linear and binary search Hashing is the transformation of a
              string of characters into a usually shorter fixed-length value or
              key that represents the original string. This is done through a
              data Structure which is designed to use a special function called
              the Hash function. A Hash function is used to map a given value
              with a particular key for faster access of elements. The
              efficiency of mapping depends of the efficiency of the hash
              function used. In other words, a hash function is any function
              that can be used to map data of arbitrary size to fixed-size
              values. The values returned by a hash function are called hash
              values, hash codes, digests, or simply hashes. The values are used
              to index a fixed-size table called a hash table. Use of a hash
              function to index a hash table is called hashing or scatter
              storage addressing. Hash functions and their associated hash
              tables are used in data storage and retrieval applications to
              access data in a small and nearly constant time per retrieval, and
              storage space only fractionally greater than the total space
              required for the data or records themselves. Hashing is a
              computationally and storage space efficient form of data access
              which avoids the non-linear access time of ordered and unordered
              lists and structured trees, and the often-exponential storage
              requirements of direct access of state spaces of large or
              variable-length keys. It is also used in many encryption
              algorithms
            </p>
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
                href="https://medium.com/@lukabaramishvili/data-structure-hash-table-big-o-notation-a2ee869be861"
                target="_blank"
              >
                medium
              </a>
              <a
                className={classes.link}
                href="https://www.geeksforgeeks.org/hashing-data-structure/"
                target="_blank"
              >
                Geeks for Geeks
              </a>
            </div>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=KyUTuwz_b7Q"
              style={{ margin: "30px" }}
            />
          </div>
        }
        prosAndCons={
          <>
            <h1>Pros</h1>
            <ul>
              <li>fast lookup</li>
              <li>fast indexing</li>
            </ul>
            <h1>Cons</h1>
            <ul>
              <li>
                Hash tables can be more difficult to implement than linear and
                binary search
              </li>
              <li>
                choosing an appropriate hash functions can be a challenge{" "}
              </li>
            </ul>
          </>
        }
        example={<></>}
        problem={
          <div>
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#e6d470",
              }}
            >
              Find the murderer known as 3 using your knew found knowledge of
              hashing.
              <br />
              Using the hash function f(x) = x/2 what number leads to 3?
            </h2>
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
                  placeholder={1}
                  value={answer}
                  onChange={handleChange}
                  className={classes.input}
                />
              </label>
              <h3 style={{ display: "flex", justifyContent: "center" }}>
                {message}
              </h3>
              <ClipButton
                className={classes.button}
                type={"submit"}
                label={"submit"}
                clipPath={clipPaths[0]}
                padding="20px"
                fontSize="20px"
              />
            </form>
          </div>
        }
        performance={
          <>
            <h2>
              The following list below displays the Worst-case and Average
              performance for the different operations when using hashing in Big
              O notation.
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
        quiz={<HashingQuiz />}
      />
    </div>
  );
}
