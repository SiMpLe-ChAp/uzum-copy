import React from 'react'
import './Qualified.css'
import empty from '../../assets/empty/hearts.cf414be.png'
import { useSelector } from 'react-redux'
import ProductWrapper from '../../components/product-wrapper/ProductWrapper'


function Qualified() {
  const heart = useSelector(s => s.heart.value)
  console.log(heart);
  return (
    <div className='container empty'>
      {
        heart.length ?
        <ProductWrapper data={heart} />
        :
        
        <div>

          <img className='empty__img' src={empty} alt="" />
          <h1>Sizga yoqqanini qoʻshing</h1>
          <h2>Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha saralanganlar saqlanib qoladi</h2>
          <button className="add__to__account">Akkauntga kirish</button>
        </div>  
      }
    </div>
  )
}

export default Qualified