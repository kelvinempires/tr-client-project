import Home from "./pages/home.jsx";
import Dashboard from "./pages/DashBoard.jsx";
import OnBoarding from "./pages/OnBoarding";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/OnBoarding" element={<OnBoarding />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
