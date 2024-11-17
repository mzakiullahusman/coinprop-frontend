import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HowItWorks from "./pages/HomeItWorks";
// import Contact from '../pages/Contact';
// import MainLayout from '../layouts/MainLayout';
import "./App.css";

const App = () => {
  return (
    <Router>
      {/* <MainLayout> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      {/* </MainLayout> */}
    </Router>
  );
};

export default App;
