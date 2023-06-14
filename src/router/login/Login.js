import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import './Login.css';

const Login = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }
    
  return (
    <div className="login container">
      <div className="close-icon" onClick={handleClose}>
        <FiX className='close-icon'/>
      </div>
      <h2 className='title'>Telefon raqamini kiriting</h2>
      <p className="subtitle">Tasdiqlash kodini SMS orqali yuboramiz</p>
      <input type="text" className="input" placeholder="Enter your phone number" />
      <button className="button">Kodni terish</button>
      <div className="footer__login">
      <div className="footer-text">
      <p className="info" style={{ fontWeight: '600' }}>Parol bilan kirish</p>
      <p className="info large-text">
        Avtotizatsiyadan o'tish orqali siz:
        <span style={{ color: 'dodgerblue' }}>
          shaxsiy <br /> ma'lumotlarni qayta ishlash siyosatiga rozilik <br /> bildirasiz
        </span>
      </p>
      </div>
      </div>
    </div>
  );
};

export default Login;
