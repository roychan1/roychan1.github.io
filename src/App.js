import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CustomNavbar } from './components/CustomNavbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { CustomFooter } from './components/CustomFooter';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Hero />
      <Projects />
      <CustomFooter />
    </div>
  );
}

export default App;
