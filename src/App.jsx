import Sum from "./pages/Sum";
import HomePage from "./pages/HomePage";
import Lottery from "./pages/Lottery";
import YoubikePage from "./pages/YoubikePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SelectedCityContextProvider } from "context/SelectedCityContext";
import { CheckedDistrictContextProvider } from "context/CheckedDistrictContext";
import "reset.module.scss";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SelectedCityContextProvider>
        <CheckedDistrictContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="*" element={<HomePage />} />
              <Route path="/sum" element={<Sum />} />
              <Route path="/lottery" element={<Lottery />} />
              <Route path="/youbike" element={<YoubikePage />} />
            </Routes>
          </BrowserRouter>
        </CheckedDistrictContextProvider>
      </SelectedCityContextProvider>
    </div>
  );
}

export default App;
