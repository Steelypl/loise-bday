import { Routes, Route } from "react-router-dom";
import "./App.css";
import BirthdayPage from "./pages/BirthdayPage";
import SurprisePage from "./pages/SurprisePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BirthdayPage />} />
      <Route path="/surprise" element={<SurprisePage />} />
    </Routes>
  );
}

export default App;
