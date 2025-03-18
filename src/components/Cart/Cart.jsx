import React, { useEffect } from 'react'
import './Card.scss'
import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

function Cart({ data }) {

  return (
    
    <div className='main'>
      <div className='inside'>
        <img src={data.thumbnail} alt='Gamepad'/>
        <button className='sale'>-40%</button>
        <button className='heart'>
          <FaRegHeart className='heart-in' />
        </button>
        <button className='eye'>
          <FiEye className='eye-in' />
        </button>
      </div>
      <h2>{data.title || "Нет названия"}</h2>
      <div className='text'>
        <h3>${data.rating}</h3>
        <h4>${data.price}</h4>
      </div>
      <div className='stars'>
        <img src='/star.svg' alt=""/>
        <p>(88)</p>
      </div>
    </div>
  )
}

export default Cart;
