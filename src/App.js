
import './App.css';
import { useEffect, useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Registration from './Registration';
import Navbar from './Navbar';
import Header from './Header';
import Createuser from './Createuser';
import Otp from './Otp';

import Login from './Login';



function App() {
 
  return (
    <>
    <BrowserRouter>

    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Header/>}/>
      <Route path='login' element={<Login/>}/>

      <Route path='signup' element={<Registration/>}/>
      <Route path='otp' element={<Createuser/>}/>
    
      
    </Routes>
    
    

    </BrowserRouter>
   
   
   
   











    </>
  );
}

export default App;
