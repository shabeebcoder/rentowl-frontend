import React, { useState } from 'react'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Logo from '../assets/Logo.svg'
import Button from './Button';


function UserInfo() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState('');



    const handleSubmit = (e)=> {
        e.preventDefault()
        
    }
  
  return (
    <div className=' user-info flex flex-col gap-[10px] w-full items-center pt-[60px] h-full'>
        <img src={Logo} alt="Rent Owl Logo" className='w-[50%] mt-[20px]' />
         <h1 className='text-[24px] font-[400] text-[#666666]  '
       > Welcome to <span className=' font-bold text-black' >RentOwl</span></h1> 

       <p className='text-[14px] font-[200] text-[#666666] mt-[-10px]'>
        Please fill out your account details below</p>

        <form className='aut-form flex flex-col gap-[15px] w-[60%] mt-[10px]' >
        <div className=" flex flex-col gap-[4px]">
          <label htmlFor="firstName ]"
          className='text-[#666666]'
          >First Name</label>
          <input 
           type="text"
           value={firstName}
           id='firstName'
           name='firstName'
           onChange={(e)=> setFirstName(e.target.value)}
           className=' outline-[#0048ff71]'
          />
        </div>

        <div className=" flex flex-col gap-[4px]">
          <label htmlFor="lastName ]"
          className='text-[#666666]'
          >First Name</label>
          <input 
           type="text"
           value={lastName}
           id='lastName'
           name='lastName'
           onChange={(e)=> setLastName(e.target.value)}
           className=' outline-[#0048ff71]'
          />

          
        </div>
        <div className=" flex flex-col gap-[4px]">

        <label htmlFor="firstName ]"
          className='text-[#666666]'
          >Phone Number</label>

        
        <PhoneInput
        defaultCountry="ua"
        value={phone}
        onChange={(phone) => setPhone(phone)}

        inputStyle={{ outline: 'none', width: "100%", border : "none" }}



      />
      </div>

        <Button
        txt="Cintinue"
        style={{marginTop : "15px"}}
        onClick={handleSubmit}
        />

        </form>
      
    </div>
  )
}

export default UserInfo
