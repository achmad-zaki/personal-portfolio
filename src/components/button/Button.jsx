import React from 'react'
import './button.css'

const Button = ({className, text, images, alt, isImage}) => {
  return (
    <button className={`btn ${className}`}>
      {text}
      {isImage === true && 
        <img className='ml-10' src={images} alt={alt} />
      }
    </button>
  )
}

export default Button