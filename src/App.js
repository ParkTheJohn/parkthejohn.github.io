// import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav.js";
import Intro from "./components/Intro.js";
import AboutMe from "./components/AboutMe.js";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Intro/>
      <AboutMe/>
    </div>
  );
}

export default App;
