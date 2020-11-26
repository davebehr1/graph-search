import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "./App.css";
import { DepthFirstSearch } from "./DepthFirstSearch";
import { Home } from "./Home";
import { NavBar } from "./NavBar";
import { GraphTheory } from "./GraphTheory";

export function Routes() {
  let location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <NavBar />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/depth-first-search" component={DepthFirstSearch} />
        <Route path="/graph-theory" component={GraphTheory} />
      </Switch>
    </>
  );
}
