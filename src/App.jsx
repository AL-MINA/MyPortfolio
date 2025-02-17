import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Hero from "./Components/Hero";
import Layout from "./Components/Layout";
import ProjectDetailPage from "./Components/Pages/ProjectDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects/:id" element={<ProjectDetailPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
