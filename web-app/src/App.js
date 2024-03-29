import { Borders } from './Components/Borders';
import { Buttons } from './Components/Buttons';
import { Headers } from './Components/Headers';
import { Home } from './Components/Home';
import { Icons } from './Components/Icons';
import { Images } from './Components/Images';
import { Switches } from './Components/Switches';
import { Guide } from './Components/Guide';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FourOFour } from './Components/404-examples';

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
        <Route path='/guide' element={<Guide />}></Route>
        <Route path='/404-example' element={<FourOFour />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
