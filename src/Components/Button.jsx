import React, { useState } from 'react'

function Button({txt, onClick, style, disabled}) {



   
  return (
    <button
    onClick={onClick}
    style={style}
    disabled = {disabled}
    className='form-btn'>{txt}</button>
  )
}

export default Button
