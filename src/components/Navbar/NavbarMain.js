import React , {useState} from 'react'
import {AiOutlineSearch , AiOutlineUser , AiOutlineHeart , AiOutlineShoppingCart , AiOutlineMenu , AiOutlineHome} from 'react-icons/ai'
import navbar__logo from '../../assets/logo__navbar.svg'
import { Link } from "react-router-dom";
import Sidebar from '../sidebar/Sidebar';

function NavbarMain() {
  const [show ,setShow] = useState(false)
  document.body.style.overflow =  show ? "hidden" : "auto"
  return (
    <>
    <div className='container navbar__main'>
      <Link to={"/"}>
        <img src={navbar__logo} alt="" className="nav__logo" />
      </Link>
      <button className='nav__btn' onClick={()=>setShow(true)}>
        <AiOutlineMenu/>
        <span>Katalog</span></button>
      <div className="nav__search">
        <input type="text"placeholder='Qidirish...' />
        <button><AiOutlineSearch/></button>
      </div>
      <ul className="nav__collection">
        <Link to={"/"} className='nav__item'>
          <AiOutlineHome/>
          <span>Bosh Sahifa</span>
        </Link>
   
    <Link to={"Login"} className='nav__item'>
          <AiOutlineUser/>
          <span>Kirish</span>
    </Link>

    <Link to={"Qualified"}  className='nav__item'>
          <AiOutlineHeart/>
          <span>Saralangan</span>
   </Link>

   <Link to={"Cart"} className='nav__item'>
          <AiOutlineShoppingCart/>
          <span>Savatcha</span>
   </Link>
      </ul>
    </div>
    <Sidebar show={show} setShow={setShow}/>
    </>

  )
}

export default NavbarMain