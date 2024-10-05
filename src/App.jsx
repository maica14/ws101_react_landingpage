import Navbar from "./Component/Navbar/Navbar";
import About from "./Component/About/About";
import Explore from "./Component/Explore/Explore";
import More from "./Component/More/More"
import './App.css'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Explore/>
      <More/>
    </div>
  );
}

export default App;
