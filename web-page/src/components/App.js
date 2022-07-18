import { Borders } from './Pages/Borders';
import { Buttons } from './Pages/Buttons';
import { Headers } from './Pages/Headers';
import { Home } from './Pages/Home';
import { Icons } from './Pages/Icons';
import { Images } from './Pages/Images';
import { Switches } from './Pages/Switches';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/borders' element={<Borders />}></Route>
        <Route path='/buttons' element={<Buttons />}></Route>
        <Route path='/headers' element={<Headers />}></Route>
        <Route path='/icons' element={<Icons />}></Route>
        <Route path='/images' element={<Images />}></Route>
        <Route path='/switches' element={<Switches />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
