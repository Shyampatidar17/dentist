
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Footer from './component/Footer';
import Doctor from './component/Doctor';
import Dentaldiabetes from './component/Dentaldiabetes';
import Rootcanal from './component/Rootcanal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Teledentistry from './component/Teledentistry';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes> 
         <Route path='/' element={<Home/>} />
         <Route path='/doctor' element={<Doctor/>} /> 
         <Route path='/dentaldiabetes' element={<Dentaldiabetes/>} />  
          <Route path='/rootcanal' element={<Rootcanal/>} />  
          <Route path='/teledentistry' element={<Teledentistry/>}/>  
          <Route path='/contact' element={<Contact/>} />     
        </Routes>
        <Footer/> 
      </BrowserRouter>
      
      {/* 
      */}
      {/* <Doctor/> */}
      {/* <Dentaldiabetes/> */}
      {/* <Rootcanal/> */}
    </div>
  );
}

export default App;
