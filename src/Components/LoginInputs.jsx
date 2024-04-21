import React, { useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from './Button';
import Google from '../assets/Google.svg'
import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom';

function LoginInputs() {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isShown, setIsShowm] = useState(false)


  const handleSubmit = (e)=> {
    e.preventDefault()
    
}


  return (
    <div className='flex flex-col gap-[10px] w-full items-center justify-center h-full '>

<img src={Logo} alt="Rent Owl Logo" className='w-[50%] mt-[50px]' />

      <h1 className='text-[24px] font-[400] text-[#666666]  '
       > Login </h1> 

     <form className='aut-form flex flex-col gap-[15px] w-[60%]' >
     <div className=" flex flex-col gap-[4px] text-[#666666]">
          <label htmlFor="email">Email</label>
          <input 
           type="email"
           value={email}
           id='email'
           name='email'
           onChange={(e)=> setEmail(e.target.value)}
                  className=' outline-[#0048ff71]'
          />
        </div>

        <div className=" flex flex-col gap-[4px]">
          <label className={`w-full justify-between text-[#666666] flex`} >Create Password

         {isShown ? <RemoveRedEyeIcon
          onClick = {()=> setIsShowm(prevState => !prevState)}
          sx={{width : "20px", cursor : "pointer", color : "black" }}/>
          :
          <VisibilityOffIcon
          onClick = {()=> setIsShowm(prevState => !prevState)}
          sx={{width : "20px", cursor : "pointer"}}/>}

           </label>
          <input 
          type={isShown ? "text" : "password"}
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
                 className=' outline-[#0048ff71]'
          />
        </div>

        <Button 
        txt="Login"
        onClick={handleSubmit}
        />

     </form>

     <div className="google-btn w-[60%] flex flex-col items-center">

<div className="or flex items-center gap-[5px]">
<div className='bg-[#666666] w-[160px] h-[0.5px]'></div>
<p className=' text-[#666666] font-[200] text-[14px]'>or</p>
<div className='bg-[#666666] w-[160px] h-[0.5px]'></div>
</div>

<button className='  mt-[10px] flex items-center gap-[10px] border-[1px] w-full 
  justify-center p-[10px] rounded-[30px] border-[#666666]'>
  <img src={Google}/>
  <p className='text-[14px] font-[300] '>Continue with Google</p>
</button>
</div>

<p className=' mt-[10px] flex gap-[2px] text-[14px] font-[300] text-[#666666]'>Don't have an account? 
<Link to= '/' className=' text-black font-[600] cursor-pointer hover:underline'>Sign up</Link> 

</p>
    </div>
  )
}

export default LoginInputs
