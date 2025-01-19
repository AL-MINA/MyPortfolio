import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from "./Components/Home"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;