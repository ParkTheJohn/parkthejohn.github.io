// import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav.js";
import Intro from "./components/Intro.js";
import AboutMe from "./components/AboutMe.js";
import Projects from "./components/Projects.js";
import Contacts from "./components/Contacts.js";

function App() {
  
  return (
    <div className="App">
      <Nav/>
      <Intro/>
      <AboutMe/>
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App;
