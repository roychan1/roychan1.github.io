import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoadScreen } from './components/LoadScreen';
import { CustomNavbar } from './components/CustomNavbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { CustomFooter } from './components/CustomFooter';
import { useState } from 'react';


function App() {
  const [loadPercentage, setLoadPercentage] = useState(0);
  const [ready, setReady] = useState(false);

  return (
    <div className="App">
      <LoadScreen 
        loadPercentage={loadPercentage} 
        ready={ready}
      />
      {ready && <CustomNavbar /> }
      <div id="home" />
      <Hero 
        setLoadPercentage={setLoadPercentage}
        setReady={setReady}
      />
      <div id="projects" />
      {ready && <Projects /> }
      <div id="about-me" />
      {ready && <CustomFooter /> }
    </div>
  );
}

export default App;
