import "./App.css";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";
import HomePage from "./Pages/HomePage/HomePage";
function App() {
  return (
    <div className="container">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
