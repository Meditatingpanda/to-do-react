import Navbar from './components/navbar';
import Home from './pages/Home';
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import CreateBlog from './pages/CreateForm';
import Particles from 'react-tsparticles';
import {configValue} from './ParticleJs/config'


function App() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div>

      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={configValue}></Particles>
    <Router >
    <div className="App">
      <div className="content">
      
       <Navbar />
       
       <Routes>
         <Route exact path='/' element={<Home/>} />
         <Route exact path='/create' element={<CreateBlog/>} />
        </Routes>
       
      </div>
      
    </div>
    </Router>
    </div>
    
  );
}

export default App;
