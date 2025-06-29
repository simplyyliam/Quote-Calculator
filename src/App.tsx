import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from "./pages/Calculator";
import About from "./pages/About";
import MainLayout from "./pages/MainLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Calculator />} />
          <Route path="About" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
