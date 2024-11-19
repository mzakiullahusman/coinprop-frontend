import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HowItWorks from "./pages/HomeItWorks";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
// import Contact from '../pages/Contact';
// import MainLayout from '../layouts/MainLayout';
import "./App.css";
import Header from "./layouts/Header";

const App = () => {
  return (
    <Router>
      {/* <MainLayout> */}
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      {/* </MainLayout> */}
    </Router>
  );
};

export default App;
