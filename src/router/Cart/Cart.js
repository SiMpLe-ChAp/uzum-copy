import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import empty from '../../assets/empty/shopocat.490a4a1.png'

function Qualified() {
  return (
    <div className='container empty'>
      <img className='empty__img' src={empty} alt="" />
      <h1>Savatda hozircha mahsulot yoʻq</h1>
      <h2>Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping</h2>
      <Link to={"/"}>
      <button className="add__to__account">Boshqa sahifa</button>
      </Link>
    </div>
  )
}

export default Qualified;