import React from "react";

const SheepsContext = React.createContext();

function Counter({ children }) {
  const [isTheCountCorrect, setIsTheCountCorrect] = React.useState(false);

  const [SheepCounter, setSheepCounter] = React.useState(1);

  return (
    <SheepsContext.Provider
      value={{
        SheepCounter,
        isTheCountCorrect,
        setSheepCounter,
        setIsTheCountCorrect,
      }}
    >
      {children}
    </SheepsContext.Provider>
  );
}

export const useSheepsContext = () => React.useContext(SheepsContext);
export default Counter;
