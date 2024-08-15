
import styles from './App.module.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import Intro from './components/Intro/Intro.jsx';

function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
        <Intro/>
    </div>
  )
}

export default App
