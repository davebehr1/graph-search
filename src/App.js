import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Routes } from "./Routes";
import { ProgessController } from "./Context";

function App() {
  useEffect(() => {
    if (localStorage.getItem("badges") === null) {
      localStorage.setItem("badges", JSON.stringify({ DFS: false }));
    }

    if (localStorage.getItem("unlockedQuiz") === null) {
      localStorage.setItem("unlockedQuiz", false);
    }
  }, []);
  return (
    <ProgessController>
      <Router>
        <Routes />
      </Router>
    </ProgessController>
  );
}
export default App;
