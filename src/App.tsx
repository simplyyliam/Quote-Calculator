import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from "./pages/Calculator";
import About from "./pages/About";
import MainLayout from "./pages/MainLayout";
import { CalculatorProvider } from "./context/CalculatorContext";
import QuotePage from "./pages/QuotePage";
import QuoteForm from "./pages/QuoteForm";

function App() {
  return (
    <CalculatorProvider>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Calculator />} />
            <Route path="About" element={<About />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/quote-form" element={<QuoteForm />} />
          </Route>
        </Routes>
      </Router>
    </CalculatorProvider>
  );
}

export default App;
