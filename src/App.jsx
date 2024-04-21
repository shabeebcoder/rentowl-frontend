import React from 'react'
import './App.css'
import Signup from './Pages/Signup'
import { Routes, Route } from "react-router-dom";
import SignInputs from './Components/SignInputs';
import LoginInputs from './Components/LoginInputs';
import UserInfo from './Components/UserInfo';

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element = {<Signup/> } >
          <Route index element = {<SignInputs/>} />
          <Route path='login' element = {<LoginInputs/>} />
          <Route path='user_info' element = {<UserInfo/>} />
      </Route>
    </Routes>

    </>
  )
}

export default App
