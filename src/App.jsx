import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BirthdayPage from "./pages/BirthdayPage";
import SurprisePage from "./pages/SurprisePage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<BirthdayPage />} />
        <Route path="/surprise" element={<SurprisePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
