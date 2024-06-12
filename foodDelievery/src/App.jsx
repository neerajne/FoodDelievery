import React from 'react'
import {Navbar} from "./components/navbar";
import { AllRoutes } from './routes/AllRoutes';
import { Footer } from './components/footer';
import { AppDownload } from './components/appDownload';
import { useState } from "react";
import { LoginPopUp } from './components/loginPopup';
const App = () => {
  const [login , setLogin] = useState(false);
  
  return (
   <>
   {login && <LoginPopUp login = {login}  setLogin = {setLogin}  />} 
    <div className='app'>
      <Navbar  login = {login}  setLogin = {setLogin}/>
      <AllRoutes/>
      <AppDownload/>
      <Footer/>
    </div>
    </>
  )
}

export default App
