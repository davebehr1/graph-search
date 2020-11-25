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
          <h1 className={classes.title}>Graph Search Algorithms</h1>
        </Link>

        <Link
          link={"/depth-first-search"}
          className={clsx(
            classes.link,
            pathname === "/linear-search" && classes.active,
            !localStorage.getItem("unlockedPages").includes("linear-search") &&
              classes.disabled
          )}
        >
          Depth First Search
        </Link>
      </div>
    </div>
  );
}
