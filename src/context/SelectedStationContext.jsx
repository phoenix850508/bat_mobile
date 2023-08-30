import SelectedStationReducer from "reducer/SelectedStationReducer";
import { useReducer, createContext } from "react";

const SelectedStationContext = createContext({
  station: "",
  selectedStationDispatch: () => {},
});

const SelectedStationContextProvider = ({ children }) => {
  const [station, selectedStationDispatch] = useReducer(
    SelectedStationReducer,
    ""
  );
  return (
    <SelectedStationContext.Provider
      value={{ station, selectedStationDispatch }}
    >
      {children}
    </SelectedStationContext.Provider>
  );
};

export { SelectedStationContext, SelectedStationContextProvider };
