import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./navbar.module.css";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import { ProgressContext } from "./Context";
export function NavBar() {
  const { pathname } = useLocation();
  const { unlocked } = useContext(ProgressContext);

  useEffect(() => {}, [unlocked]);

  return (
    <div className={classes.navbarWrapper}>
      <div className={classes.navbar}>
        <Link
          to="/"
          className={clsx(
            classes.link,
            classes.heading,
            pathname === "/" && classes.active
          )}
        >
          <h1 className={classes.title}>Searching Algorithms</h1>
        </Link>

        <Link
          to="/linear-search"
          className={clsx(
            classes.link,
            pathname === "/linear-search" && classes.active,
            !localStorage.getItem("unlockedPages").includes("linear-search") &&
              classes.disabled
          )}
        >
          Linear Search
        </Link>
        <Link
          to="/binary-search"
          className={clsx(
            classes.link,
            pathname === "/binary-search" && classes.active,
            !localStorage.getItem("unlockedPages").includes("binary-search") &&
              classes.disabled
          )}
        >
          Binary Search
        </Link>
        <Link
          to="/hashing"
          className={clsx(
            classes.link,
            pathname === "/hashing" && classes.active,
            !localStorage.getItem("unlockedPages").includes("hashing") &&
              classes.disabled
          )}
        >
          Hashing
        </Link>
      </div>
    </div>
  );
}
