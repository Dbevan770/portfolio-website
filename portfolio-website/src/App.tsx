import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./scenes/Home/Home";

const App = () => {
  return (
    <div className="App">
      <main className="main-content">
        <Navbar />
        <Home />
      </main>
    </div>
  );
};

export default App;
