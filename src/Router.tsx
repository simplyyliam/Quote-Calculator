import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About } from "./pages";
import Layout from "./layout";
import "./styles/App.css"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
