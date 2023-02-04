import Client from './components/client/Client';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import './App.css';
import Skills from './pages/skills/Skills';

function App() {
  return (
    <>
      <Navbar/>
      <About/>
      <Client/>
      <Skills/>
    </>
  );
}

export default App;
