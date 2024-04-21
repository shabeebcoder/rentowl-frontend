import React from 'react'
import SignInputs from '../Components/SignInputs'
import LoginInputs from '../Components/LoginInputs'
import UserInfo from '../Components/UserInfo'
import cover from '../assets/BG-1.jpeg'
import { Outlet } from 'react-router-dom'


function Signup() {
  return (
    <div className='sign-up-page'>
      <img className=' cover-img w-full h-full absolute z-[-1] bg-cover object-cover  ' src={cover} alt="" />

        <div className="input-container bg-white
        w-[45%] flex flex-col  items-center h-[100vh] overflow-hidden">
          <Outlet/>

        {/* <SignInputs/> */}
        {/* <LoginInputs/> */}
        {/* <UserInfo/> */}
        </div>

  
      
      
    </div>
  )
}

export default Signup
