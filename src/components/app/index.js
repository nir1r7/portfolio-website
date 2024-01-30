import { Route, Routes } from 'react-router-dom';

import { Navbar } from './navigation';
import Home from '../home';
import Projects from '../projects';
import Socials from '../socials';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <Navbar/>
        <Routes>        
          <Route path="/home"  element={<Home/>} />
          <Route path="/projects"  element={<Projects/>} />
          <Route path="/socials"  element={<Socials/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
