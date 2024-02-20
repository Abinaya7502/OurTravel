import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Firstpg from './Firstpg.jsx';
import LoginPage from './Loginpage';
import Secondpg from './Secondpg.jsx';
import Regpg from './Regpg';
import Third from './Third';
import Thailand from './Thailand';
import Greece from './Greece.jsx';
import Spain from './Spain';
import Hongkong from './Hongkong.jsx';
import Germany from './Germany.jsx';
import Italy from './Italy';
import Mexico from './Mexico.jsx';
import Turkey from './Turkey.jsx';
import Paris from './Paris.jsx';
import Switzerland from './Switzerland.jsx';
import Uk from './Uk.jsx';
import Canada from './Canada.jsx';
import Enquiry from './Enquiry';
import Pay from './Pay.jsx'

function App() {
  return (
<>

<BrowserRouter>
<Routes>
  <Route path='/' element={<Firstpg/>}></Route>
  <Route path='/Loginpage' element={<LoginPage/>}></Route>
  <Route path='/Regpg' element={<Regpg/>}></Route>
  <Route path='/Secondpg' element={<Secondpg></Secondpg>}></Route>
  <Route path='/Third' element={<Third></Third>}></Route>
  <Route path='/Thailand' element={<Thailand></Thailand>}></Route>
  <Route path='/Greece' element={<Greece></Greece>}></Route>
  <Route path='/Spain' element={<Spain></Spain>}></Route>
  <Route path='/Hongkong' element={<Hongkong></Hongkong>}></Route>
  <Route path='/Germany' element={<Germany></Germany>}></Route>
  <Route path='/Italy' element={<Italy></Italy>}></Route>
  <Route path='/Mexico' element={<Mexico></Mexico>}></Route>
  <Route path='/Turkey' element={<Turkey></Turkey>}></Route>
  <Route path='/Paris' element={<Paris></Paris>}></Route>
  <Route path='/Switzerland' element={<Switzerland></Switzerland>}></Route>
  <Route path='/Uk' element={<Uk></Uk>}></Route>
  <Route path='/Canada' element={<Canada></Canada>}></Route>
  <Route path='/Enquiry' element={<Enquiry></Enquiry>}></Route>
  <Route path='/Pay' element={<Pay></Pay>}></Route>
 </Routes>
</BrowserRouter>


</>  );
}

export default App;
