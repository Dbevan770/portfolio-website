import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./scenes/Home/Home";
import About from "./scenes/About/About";
import Projects from "./scenes/Projects/Projects";
import Contact from "./scenes/Contact/Contact";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
