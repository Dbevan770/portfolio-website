import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./scenes/Home/Home";
import About from "./scenes/About/About";
import Projects from "./scenes/Projects/Projects";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div>
  );
};

export default App;
