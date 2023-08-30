import CheckedDistrictReducer from "reducer/CheckedDistrictReducer";
import { createContext, useReducer } from "react";

const CheckedDistrictContext = createContext({ state: [], dispatch: () => {} });

const CheckedDistrictContextProvider = ({ children }) => {
  const [districtState, districtDispatch] = useReducer(
    CheckedDistrictReducer,
    []
  );
  return (
    <CheckedDistrictContext.Provider
      value={{ districtState, districtDispatch }}
    >
      {children}
    </CheckedDistrictContext.Provider>
  );
};

export { CheckedDistrictContext, CheckedDistrictContextProvider };
