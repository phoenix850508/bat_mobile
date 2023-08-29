import { createContext, useReducer } from "react";
import SelectedCityReducer from "reducer/SelectedCityReducer";

const SelectedCity = createContext({ state: "", dispatch: () => {} });
const SelectedCityContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SelectedCityReducer, "");
  return (
    <SelectedCity.Provider value={{ state, dispatch }}>
      {children}
    </SelectedCity.Provider>
  );
};

export { SelectedCity, SelectedCityContextProvider };
