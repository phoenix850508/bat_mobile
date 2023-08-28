import Sum from "./pages/Sum";
import HomePage from "./pages/HomePage";
import Lottery from "./pages/Lottery";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/sum" element={<Sum />} />
          <Route path="/lottery" element={<Lottery />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
