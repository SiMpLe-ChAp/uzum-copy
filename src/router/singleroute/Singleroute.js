import React, { useState } from 'react';
import './Singleroute.css';
import { useLocation } from 'react-router-dom';
import {  AiFillStar } from 'react-icons/ai';

function SingleRoute() {
  const location = useLocation();
  const item = location.state.item; 

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const addPrice = item.price * count;

  return (
    <div className='container'>
      <div className="single__route">
        <img src={item?.url} className='route__img' alt="" />
        <div className="single__left">
          <div className="top">
            <h2>{item?.title}</h2>
            <button className="wishes">&nbsp;
              <span>Istaklarga</span>
            </button>
          </div>
          <p className='card__rating'>
                <AiFillStar />
                <span>5.0 (585 baho)</span>
              </p><br />
          <p>Yetkazib berish: &nbsp;&nbsp;&nbsp; 1 kun, bepul</p><br /><br />
          <div className="line"></div><br />
          <h4>Miqdor:</h4><br />
          <div className="quantity">
            <button className='dec' onClick={decrement}>-</button>
            <span> {count}</span>
            <button className="inc" onClick={increment}>+</button>
          </div><br /><br />
          <h3>Narx: {addPrice} </h3><br /><br />
          <del>{Math.round(item.price * 1.5)} so'm</del><br /><br />
          <span className='month'>{Math.round(item.price * 1.44 / 12)} so'm/oyiga</span><br /><br />
          <input type="text" placeholder='Ismingizni kiriting...' /><br /><br />
          <input type="text" placeholder='Karta raqamingizni kiriting...' /><br /><br />
          <div className="buttons">
            <button className='add__cart'>Savatga qo'shish</button>
            <button className='add__bag'>Tugmani 1 bosishda xarid qilish</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleRoute;
