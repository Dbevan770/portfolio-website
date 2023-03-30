import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./scenes/Home/Home";
import About from "./scenes/About/About";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
    </div>
  );
};

export default App;
