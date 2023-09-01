import Sum from "./pages/Sum";
import HomePage from "./pages/HomePage";
import Lottery from "./pages/Lottery";
import YoubikePage from "./pages/YoubikePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SelectedCityContextProvider } from "context/SelectedCityContext";
import { CheckedDistrictContextProvider } from "context/CheckedDistrictContext";
import { SelectedStationContextProvider } from "context/SelectedStationContext";
import "reset.module.scss";
import "./App.css";

const basename = process.env.PUBLIC_URL;

function App() {
  console.log(basename);
  return (
    <div className="App">
      <BrowserRouter basename={basename}>
        <SelectedStationContextProvider>
          <SelectedCityContextProvider>
            <CheckedDistrictContextProvider>
              <Routes>
                <Route path="*" element={<HomePage />} />
                <Route path="sum" element={<Sum />} />
                <Route path="lottery" element={<Lottery />} />
                <Route path="youbike/manual" element={<YoubikePage />} />
                <Route path="youbike/pay-method" element={<YoubikePage />} />
                <Route path="youbike/station-info" element={<YoubikePage />} />
                <Route path="youbike/news" element={<YoubikePage />} />
                <Route path="youbike/events" element={<YoubikePage />} />
              </Routes>
            </CheckedDistrictContextProvider>
          </SelectedCityContextProvider>
        </SelectedStationContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
