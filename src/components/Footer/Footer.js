import React from 'react';
import './Footer.css';
import { AiFillApple } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';

function Footer() {
  return (
    <div className='container footer__wrapper'>
      <ul className='footer__collection__one'>
        <li className='footer__items'><span>Biz haqimizda</span></li>
        <li className='footer__items'>Topshirish punktlari</li>
        <li className='footer__items'>Vakansiyalar</li>
      </ul>

      <ul className='footer__collection__two'>
        <li className='footer__items'><span>Foydalanuchilarga</span></li>
        <li className='footer__items'>Biz bilan bog'lanish</li>
        <li className='footer__items'>Saval-javob</li>
      </ul>

      <ul className='footer__collection__three'>
        <li className='footer__items'><span>Tadbirkorlarga</span></li>
        <li className='footer__items'>Uzumda soting</li>
        <li className='footer__items'>Sotuvhi kabinetiga kirish</li>
      </ul>

      <div className="footer__and__apps">
        <ul className="footer__apps">
          <span>Ilovani yuklab olish</span>
          <div className="footer__app__items">
            <li className='footer__app__store'><AiFillApple /> AppStore</li>
            <li className='footer__play__market'><FcGoogle /> Google Play</li>
          </div>
        </ul>
        <div className="footer__social__media">
          <span>Uzum ijtimoiy tarmoqlarda</span>
          <div className="footer__icons">
            <li className='footer__icon__instagram'><AiOutlineInstagram /></li>
            <li className='footer__icon__telegram'><FaTelegramPlane /></li>
            <li className='footer__icon__youtube'><AiOutlineYoutube /></li>
            <li className='footer__icon__facebook'><FaFacebookF /></li>
          </div>
        </div>
      </div>

    
    </div>
  );
}

export default Footer;
