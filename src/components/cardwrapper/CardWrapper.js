import React, { useState } from 'react';
import "./CardWrapper.css";
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart, decrementCart } from "../../context/cart";

function CardWrapper({ data }) {
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    let total = data.reduce((a, b) => a + b.price * b.quantity, 0);
    setTotalPrice(total);
  };

  const send = (e) => {
    e.preventDefault();

    let token = "6083402856:AAGdn_CAl2qfIXZ7Sh3Mh2lQelXvKA0tdcc";
    let chat_id = -801933919;
    let text1 = encodeURIComponent(document.getElementById("text1").value);
    let text2 = encodeURIComponent(document.getElementById("text2").value);
    let text3 = encodeURIComponent(document.getElementById("text3").value);
    let text4 = encodeURIComponent(document.getElementById("text4").value);
    let jami = encodeURIComponent(document.getElementById("jami").textContent);

    let itemNames = data.map((item) => `- ${item.title}`).join('%0A');
    let my_text = `Mahsulot oluvhi:%0A%0A%0A${itemNames}%0A- Mahsulot oluvhining ismi: ${text1} %0A - Mahsulot oluvhining raqami: ${text2}  %0A - Mahsulot oluvhining manzili: ${text3} %0A - Mahsulot oluvhining karta: ${text4}  %0A - umumiy narx: ${jami}`;


    // my text += `Jami .....`


    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    console.log("Message succesfully sent");
  };
  const dispatch = useDispatch();
  console.log(data);

  return (
    <div className='cart__wrapper'>
      <div className='cart__wrapper-content'>
        {data?.map((item) => (
          <div key={item.id} className='cart__wrapper-item'>
            <div className="ight">
              <img src={item.url} width={80} alt="" />
            </div>
            <div className="eft">
              <h3>{item.title}</h3>
              <h2>{item.price * item.quantity} so'm</h2>
              <button disabled={item.quantity < 1} onClick={() => dispatch(decrementCart(item))}>-</button>&nbsp;&nbsp;&nbsp;
              <span>{item.quantity}</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={() => dispatch(addToCart(item))}>+</button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>ochirish</button>
              <br />
              <br />
              <hr />
              <br />
            </div>
          </div>
        ))}
      </div>
      <div className="cart__wrapper-form">
        <h3>Buyurtma berish</h3>
        <form id="form" onSubmit={send}>
          <input type="text" id="text1" placeholder="Ismingiz" />
          <input type="text" id="text2" placeholder="Raqamingiz" />
          <input type="text" id="text3" placeholder="Manzil" />
          <input type="text" id="text4" placeholder="Karata raqamingiz" />
          <h3 id='jami'>Jami: {totalPrice} som</h3>
          <button type="submit" onClick={calculateTotalPrice}>Olish</button>
        </form>
      </div>
    </div>
  );
}

export default CardWrapper;
