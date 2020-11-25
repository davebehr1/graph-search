import React, { useState } from "react";

export const ProgressContext = React.createContext({
  unlockedQuiz: [],
  setUnlockedQuiz: () => {},
});

export function ProgessController({ children }) {
  const [unlockedQuiz, setUnlockedQuiz] = useState(
    JSON.parse(localStorage.getItem("unlockedQuiz"))
  );

  const value = React.useMemo(
    () => ({
      unlockedQuiz,
      setUnlockedQuiz,
    }),
    [unlockedQuiz, setUnlockedQuiz]
  );

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}
