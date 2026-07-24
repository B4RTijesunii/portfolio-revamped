import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./components/Resume";
import Building from "./pages/Building";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/building" element={<Building />} />
      </Routes>
    </BrowserRouter>
  );
}
