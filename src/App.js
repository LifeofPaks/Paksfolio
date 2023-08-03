import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";
import SKills from "./Components/Skills/SKills";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="skills" element={<SKills />} />
          <Route path="contact" element={<Contact />} />
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
