import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Step1 from "./assets/DFS/step1.png";
import Step2 from "./assets/DFS/step2.png";
import Step3 from "./assets/DFS/step3.png";
import Step4 from "./assets/DFS/step4.png";
import Step5 from "./assets/DFS/step5.png";
import Step6 from "./assets/DFS/step6.png";
import Step7 from "./assets/DFS/step7.png";

export const DFS = (props) => {
  var items = [
    {
      name: "Step 1",
      description: "Initialize the stack",
      image_url: Step1,
    },
    {
      name: "step 2",
      description:
        "Mark s as visited and add it to the stack, explore the unvisted adjacent nodes from s, because there are three pick the next node alphabetically",
      image_url: Step2,
    },
    {
      name: "step 3",
      description: "Mark A as visted and add it to the stack, next visit d",
      image_url: Step3,
    },
    {
      name: "step 4",
      description:
        "mark D as visited and add it to the stack, D is adjacent to B and C, pick B alphabetically",
      image_url: Step4,
    },
    {
      name: "step 5",
      description:
        "add B to the stack, there ar no adjacent nodes to b that are unvisited so we have to backtrack. Pop B off the stack",
      image_url: Step5,
    },
    {
      name: "step 6",
      description:
        "D is now the top of the stack, does it have any unvisited nodes? yes it does",
      image_url: Step6,
    },
    {
      name: "step 7",
      description: "C is the only unvisited node so lets mark c as visited",
      image_url: Step7,
    },
  ];

  return (
    <Carousel indicators={true} navButtonsAlwaysVisible={true} autoPlay={false}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item(props) {
  return (
    <Paper
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>{props.item.name}</h2>
      <p style={{ paddingLeft: "20%", paddingRight: "20%" }}>
        {props.item.description}
      </p>
      <img src={props.item.image_url} alt={props.item.name} />
    </Paper>
  );
}
