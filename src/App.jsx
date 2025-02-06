// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Landing from "./Components/Landing";
// import Home from "./Components/Home";
import About from "./Components/About";
// import Projects from "./Components/Projects";
// import Contact from "./Components/Contact";
import Header from './Components/Header';
import Hero from './Components/Hero';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App;