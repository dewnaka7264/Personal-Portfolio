
import styles from './App.module.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import Intro from './components/Intro/Intro.jsx';
import About from "./components/About/About.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
        <Intro/>
        <About/>
      <Experience/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default App
