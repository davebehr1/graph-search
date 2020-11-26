import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import classes from "./Home.module.css";
import { ClipButton } from "./Components/ClipButtonLink";
import Particles from "react-particles-js";
import BadgeSvg from "./Components/badgeSvg";

export function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("unlockedPages") === null) {
      localStorage.setItem("unlockedPages", JSON.stringify(["linear-search"]));
    }

    if (localStorage.getItem("badges") === null) {
      localStorage.setItem(
        "badges",
        JSON.stringify({ binary: false, linear: false, hashing: false })
      );
    }

    setMounted(true);
  }, []);
  if (mounted) {
    return (
      <>
        <Particles
          style={{ position: "absolute" }}
          params={{
            particles: {
              color: {
                value: "#10144a",
              },
              number: {
                value: 30,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />

        <div className={classes.Wrapper}>
          <div className={classes.headingWrapper}>
            <h1 className={classes.Heading}>Lets learn about graphs</h1>
          </div>
          <Box>
            <BadgeSvg
              fillbadge={JSON.parse(localStorage.getItem("badges")).DFS}
              label={"D.F.S"}
            />
          </Box>
          <h4 className={classes.subHeading}>Lets Learn ?</h4>

          <ClipButton
            link={"/depth-first-search"}
            label={"depth first search"}
          />
          <ClipButton link={"/graph-theory"} label={"Graph theory"} />
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
