import Navbar from './navbar';
import Home from './Home';
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import CreateBlog from './Create';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="content">
        <Navbar/>
        <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/create' element={<CreateBlog/>} />
       </Routes>
       
      </div>
      <meta name="google-site-verification" content="7_9zevZVj3YaFrHmH7-q-0IkPKnXP6c7ZOhlXg0byIg" />
    </div>
    </Router>
  );
}

export default App;
