import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "./App.css";
import { BinarySearch } from "./BinarySearch";
import { Hashing } from "./Hashing";
import { LinearSearch } from "./LinearSearch";
import { Home } from "./Home";
import { NavBar } from "./NavBar";

export function Routes() {
  let location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <NavBar />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/binary-search" component={BinarySearch} />
        <Route path="/linear-search" component={LinearSearch} />
        <Route path="/hashing" component={Hashing} />
      </Switch>
    </>
  );
}
